from django.contrib.auth.models import User
from django.shortcuts import get_object_or_404
from django.db.models import Count
from rest_framework import viewsets, mixins
from rest_framework.response import Response

from masterclass.models import Masterclass, MasterclassType
from booking.models import Booking
from blog.models import Post
from school.models import School, Question, Advatage, Review
from carousel.models import MainCarouselItem
# from carousel.models import
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.pagination import (LimitOffsetPagination,
                                       PageNumberPagination)
from rest_framework.permissions import AllowAny
from api.serializers import (MasterclassSerializer,
                             MasterclassTypeSerializer,
                             BookingSerializer,
                             SchoolSerializer,
                             PostSerializer,
                             RequestSerializer,
                             MainCarouselSerializer,
                             EmailMainSerializer,
                             )


class RequestCreateOnlyViewSet(mixins.CreateModelMixin,
                               viewsets.GenericViewSet):
    serializer_class = RequestSerializer
    permission_classes = [AllowAny, ]
    
class EmailCreateOnlyViewSet(mixins.CreateModelMixin,
                               viewsets.GenericViewSet):
    serializer_class = EmailMainSerializer
    permission_classes = [AllowAny, ]


class MasterclassReadOnlyViewset(viewsets.ReadOnlyModelViewSet):
    serializer_class = MasterclassSerializer
    permission_classes = [AllowAny, ]

    def get_queryset(self):
        return Masterclass.objects.all().annotate(
            num_of_guests=Count('bookings__guest'))


class MasterclassTypeReadOnlyViewset(viewsets.ReadOnlyModelViewSet):
    serializer_class = MasterclassTypeSerializer
    queryset = MasterclassType.objects.all()
    permission_classes = [AllowAny, ]


class AbstractView(
    viewsets.GenericViewSet,
    mixins.DestroyModelMixin,
    mixins.ListModelMixin,
    mixins.CreateModelMixin
):
    pass


class BookingViewSet(AbstractView):
    """Viewset for user profile and course/masterclass bookings
    that process get, post and delete requests.
    Only authorized user can book a course. For non-authorized users there is
    a redirect to the 'call me back' page (or it will be done if not yet."""
    queryset = Booking.objects.all() # TODO после авторизации
    serializer_class = BookingSerializer
    # permission_classes = TODO


class PostViewset(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    permission_classes = [AllowAny, ]
    # pagination_class = PageNumberPagination
    pagination_class = LimitOffsetPagination

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)


class SchoolReadOnlyViewSet(viewsets.ReadOnlyModelViewSet):
    # подумать как на уровне БД ограничить модель одной записью
    queryset = School.objects.all()
    serializer_class = SchoolSerializer
    permission_classes = [AllowAny, ]


class MainCarouselReadOnlyViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = MainCarouselItem.objects.all()
    serializer_class = MainCarouselSerializer
    permission_classes = [AllowAny, ]
