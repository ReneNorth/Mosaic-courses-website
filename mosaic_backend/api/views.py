import logging
import random
import string
from collections import OrderedDict

from django.contrib.auth import get_user_model
from django.db.models import Count
from django.shortcuts import get_object_or_404
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import mixins, status, viewsets
from rest_framework.decorators import action
from rest_framework.pagination import LimitOffsetPagination
from rest_framework.permissions import AllowAny
from rest_framework.response import Response

from api.filters import MasterclassTypeFilter, PostsFilter
from api.serializers import (ArtworkSerializer, BookingSerializer,
                             EmailMainSerializer, FavoriteSerializer,
                             GiftCertSerializer, MainCarouselSerializer,
                             MasterclassCategoryFilterSerializer,
                             MasterclassSerializer, MasterclassTypeSerializer,
                             PostSerializer, RequestSerializer,
                             ReviewsSerializer, SchoolSerializer,
                             TagReadOnlySerializer, BasketSerializer)
from blog.models import Post, Tag
from booking.models import Booking
from carousel.models import MainCarouselItem
from crm_app.models import GiftCert
from favorite.models import FavoriteArtwork
from gallery.models import Artwork
from masterclass.models import (Masterclass, MasterclassCategory,
                                MasterclassType)
from school.models import Review, School
from users.permissions import BookingPermission, FavoritePermission
from store.models import Basket, BasketArtwork, BasketItem, StoreItem
from checkout.models import Order, OrderArtwork, OrderItem, Payment, Receipt

User = User = get_user_model()
log = logging.getLogger(__name__)


def generate_cert_id(size=6, chars=string.ascii_uppercase + string.digits):
    """generates an unique 6 letters/digits code"""
    return ''.join(random.choice(chars) for _ in range(size))


class AbstractView(
    viewsets.GenericViewSet,
    mixins.DestroyModelMixin,
    mixins.ListModelMixin,
    mixins.CreateModelMixin
):
    pass


class RequestCreateOnlyViewSet(mixins.CreateModelMixin,
                               viewsets.GenericViewSet):
    serializer_class = RequestSerializer
    permission_classes = [AllowAny, ]


class TagReadOnlyViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Tag.objects.all()
    serializer_class = TagReadOnlySerializer
    permission_classes = [AllowAny, ]


class ArtworkReadOnlyViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Artwork.objects.all()
    serializer_class = ArtworkSerializer
    pagination_class = LimitOffsetPagination
    permission_classes = [AllowAny, ]


class FavoritedCreateDeleteViewSet(
    mixins.CreateModelMixin, mixins.DestroyModelMixin, viewsets.GenericViewSet
):
    queryset = FavoriteArtwork.objects.all()
    serializer_class = FavoriteSerializer
    permission_classes = (FavoritePermission, )

    @action(methods=["post"], detail=True)
    def create(self, request, pk=None) -> Response:
        """
        The method adds an artwork to favorites. The user ID and artwork ID
        are passed to the serializer through the context.
        """
        log.info('1working here')
        user = get_object_or_404(User, id=request.user.id)
        favorited_artwork = get_object_or_404(Artwork, pk=pk)
        log.info('working here')
        serializer = self.get_serializer(
            data=request.data,
            context={'who_favorited': user,
                     'favorited_artwork': favorited_artwork},
        )
        log.info('trying to validate the serializer', f'{serializer}')
        if serializer.is_valid(raise_exception=True):
            log.info('serializer errors', serializer.errors)
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    @action(methods=['delete'], detail=True)
    def destroy(self, request, pk=None) -> Response:
        favorited = get_object_or_404(
            FavoriteArtwork,
            who_favorited_id=request.user.id,
            favorited_artwork_id=pk
        )
        self.perform_destroy(favorited)
        return Response('object deleted', status=status.HTTP_204_NO_CONTENT)


class EmailCreateOnlyViewSet(mixins.CreateModelMixin,
                             viewsets.GenericViewSet):
    serializer_class = EmailMainSerializer
    permission_classes = [AllowAny, ]


class MasterclassCategoryFilterReadOnlyViewSet(viewsets.ReadOnlyModelViewSet):
    # leave only list view not retrieve
    queryset = MasterclassCategory.objects.all()
    serializer_class = MasterclassCategoryFilterSerializer
    permission_classes = [AllowAny, ]
    pagination_class = None

    def list(self, request, *args, **kwargs):
        response = super().list(request, *args, **kwargs)
        response_dict = OrderedDict(
            {key: []
             for key in MasterclassCategory.CATEGORY_FILTER_CHOICES.keys()}
        )
        for item in response.data:
            category_filter = item.pop('category_filter', None)
            if category_filter in response_dict:
                response_dict[category_filter].append(item)
        response.data = response_dict
        return response


class MasterclassReadOnlyViewset(viewsets.ReadOnlyModelViewSet):
    serializer_class = MasterclassSerializer
    permission_classes = [AllowAny, ]

    def get_queryset(self):
        return Masterclass.objects.all().annotate(
            num_of_guests=(
                Count('bookings__guest') + Count('admin_reservations')
            )
        )


class MasterclassTypeReadOnlyViewSet(viewsets.ModelViewSet):
    serializer_class = MasterclassTypeSerializer
    queryset = MasterclassType.objects.all()
    pagination_class = LimitOffsetPagination
    permission_classes = [AllowAny, ]
    filter_backends = [DjangoFilterBackend, ]
    pagination_class = LimitOffsetPagination
    filterset_class = MasterclassTypeFilter

    @action(detail=True, methods=['get', ])
    def related_masterclasses(self, request, slug) -> Response:
        get_object_or_404(MasterclassType, slug=slug)
        masterclass_types = MasterclassType.objects.all().exclude(slug=slug)
        return Response(self.get_serializer(masterclass_types,
                                            many=True).data)


class BookingViewSet(viewsets.ModelViewSet):
    """Viewset for user profile and course/masterclass bookings
    that process get, post and delete requests.
    Only authorized user can book a course. For non-authorized users there is
    a redirect to the 'call me back' page (or it will be done if not yet."""
    queryset = Booking.objects.all()
    serializer_class = BookingSerializer
    permission_classes = (BookingPermission, )

    def create(self, request) -> Response:
        serializer = self.get_serializer(
            data=request.data,
            context={
                'user': request.user,
                'request': request},
        )
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data,
                            status=status.HTTP_201_CREATED)
        return Response(serializer.errors,
                        status=status.HTTP_400_BAD_REQUEST)


class PostViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    permission_classes = [AllowAny, ]
    pagination_class = None
    filterset_class = PostsFilter
    filter_backends = [DjangoFilterBackend, ]
    lookup_field = 'slug'

    @action(detail=True, methods=['get', ])
    def related_posts(self, request, slug) -> Response:
        post = Post.objects.get(slug=slug)
        tags = list(post.tags.all().values_list('slug', flat=True))
        posts = Post.objects.filter(tags__slug__in=tags).exclude(id=post.id)
        return Response(self.get_serializer(posts, many=True).data)


class SchoolReadOnlyViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = School.objects.all()
    serializer_class = SchoolSerializer
    permission_classes = [AllowAny, ]
    pagination_class = None


class MainCarouselReadOnlyViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = MainCarouselItem.objects.all()
    serializer_class = MainCarouselSerializer
    permission_classes = [AllowAny, ]


class CertificatePostPatchViewSet(viewsets.GenericViewSet,
                                  mixins.DestroyModelMixin,
                                  mixins.CreateModelMixin):
    queryset = GiftCert.objects.all()
    serializer_class = GiftCertSerializer
    permission_classes = [AllowAny, ]

    def perform_create(self, serializer):
        """Standard behaviour except for calling a method to
        generate a 6-symbols (digits and letters) code as the cert ID"""
        cert_id = generate_cert_id()
        serializer.save(id=cert_id)
        return cert_id

    def create(self, request, *args, **kwargs):
        """Returns the certificate's ID among the other data"""
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            cert_id = self.perform_create(serializer)
            serializer_id = {'certificate_id': f'{cert_id}'}
            serializer_id.update(serializer.data)
            headers = self.get_success_headers(serializer.data)
            return Response(serializer_id,
                            status=status.HTTP_201_CREATED,
                            headers=headers)
        return Response(serializer.errors,
                        status=status.HTTP_400_BAD_REQUEST)


class StudentReviewsReadOnlyViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Review.objects.all()
    serializer_class = ReviewsSerializer
    permission_classes = [AllowAny, ]
    pagination_class = LimitOffsetPagination
    ordering_fields = ['pub_date']
    ordering = ['pub_date']


class BasketViewSet(viewsets.ModelViewSet):
    serializer_class = BasketSerializer
    permission_classes = [AllowAny, ]
    queryset = Basket.objects.all()

    def get_queryset(self):
        log.info('in get queryset')
        if self.request.user.is_authenticated:
            log.info('step1', Basket.objects.filter(user=self.request.user))
            return Basket.objects.filter(user=self.request.user)
        else:
            session_key = self.request.session.session_key
            if not session_key:
                self.request.session.create()
                session_key = self.request.session.session_key
            return Basket.objects.filter(session_key=session_key)

    def list(self, request, *args, **kwargs):
        queryset = self.filter_queryset(self.get_queryset())
        log.info('t123', request, queryset)
        page = self.paginate_queryset(queryset)
        if page is not None:
            serializer = self.get_serializer(page, many=True)
            log.info('test123', serializer)
            return self.get_paginated_response(serializer.data)  # падаем тут

        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)

    # def get_object(self):
    #     log.info('in get object')
    #     if self.request.user.is_authenticated:
    #         log.info('step 1 get obj')
    #         obj = Basket.objects.get_or_create(
    #             user=self.request.user
    #         )
    #         # obj = Basket.objects.filter(user=self.request.user)
    #         # obj = Basket.objects.create(user=self.request.user)
    #     else:
    #         log.info('step 2')
    #         obj = Basket.objects.create(
    #             session_key=self.request.session.session_key)
    #     self.check_object_permissions(self.request, obj)
    #     return obj

    def update(self, request, *args, **kwargs):
        partial = kwargs.pop('partial', False)
        instance = self.get_object()
        serializer = self.get_serializer(
            instance, data=request.data, partial=partial)
        serializer.is_valid(raise_exception=True)
        self.perform_update(serializer)

        if getattr(instance, '_prefetched_objects_cache', None):
            # If 'prefetch_related' has been applied to a queryset, we need to
            # forcibly invalidate the prefetch cache on the instance.
            instance._prefetched_objects_cache = {}

        return Response(serializer.data)

    @action(detail=True, methods=['post'])
    def add_item(self, request, pk=None):
        log.info('logging in add_item', request, pk)
        # request

        return Response()

    # add item - if the basket is not created - create it
    # if the basket has already been created - add an item to a basket
