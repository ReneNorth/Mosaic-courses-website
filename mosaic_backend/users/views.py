import logging
import datetime

from django.contrib.auth import get_user_model
from djoser.serializers import UidAndTokenSerializer
from djoser.views import UserViewSet
from rest_framework.permissions import IsAuthenticated
from rest_framework import filters, status
from rest_framework.decorators import action
from rest_framework.pagination import PageNumberPagination
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from api.serializers import BookingSerializer, MasterclassSerializer
from masterclass.models import Masterclass
from booking.models import Booking
from users.serializers import (CustomCreateUserSerializer,
                               EmailbyUidUserSerializer)

User = get_user_model()
log = logging.getLogger(__name__)


class CustomizedUserViewSet(UserViewSet):
    queryset = User.objects.all()
    serializer_class = CustomCreateUserSerializer
    filter_backends = (filters.SearchFilter, )
    permission_classes = (IsAuthenticated, )
    search_fields = ('username', )

    @action(detail=False,
            url_path='my_masterclasses',
            serializer_class=BookingSerializer,
            permission_classes=[IsAuthenticated, ],
            pagination_class=PageNumberPagination)
    def get_my_masterclasses(self, request):
        """Returns all masterclasses the user has booked."""
        bookings = Booking.objects.filter(guest=request.user)
        pagination = self.paginate_queryset(bookings)
        serializer = self.get_serializer(pagination, many=True)
        return self.get_paginated_response(serializer.data)

    @action(url_path='email',
            methods=['post'],
            serializer_class=UidAndTokenSerializer,
            detail=False)
    def get_user_by_uid(self, request):
        """Returns an user instance by uid."""
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            user = serializer.user
            log.info(user)
            return Response(
                EmailbyUidUserSerializer(user).data,
                status=status.HTTP_200_OK)
        return Response(serializer.errors,
                        status=status.HTTP_400_BAD_REQUEST)

    @action(url_path='my_masterclasses/past',
            methods=['get'],
            serializer_class=MasterclassSerializer,
            detail=False,)
    def get_user_past_masterclasses(self, request, pk=None):
        past_masterclasses = Masterclass.objects.filter(
            bookings__guest=request.user,
            time_end__lte=datetime.datetime.now())
        serializer = self.get_serializer(past_masterclasses, many=True)
        return Response(serializer.data)

    @action(url_path='my_masterclasses/upcoming',
            methods=['get'],
            serializer_class=MasterclassSerializer,
            detail=False,)
    def get_user_upcoming_courses(self, request, pk=None):
        past_masterclasses = Masterclass.objects.filter(
            bookings__guest=request.user,
            time_start__gt=datetime.datetime.now())
        serializer = self.get_serializer(past_masterclasses, many=True)
        return Response(serializer.data)

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = self.get_serializer(instance, data=request.data)
        serializer.is_valid(raise_exception=True)

        # if instance == request.user: # this won't work
        #     utils.logout_user(self.request)
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)


# copy-paste code for handling token logout
# class BlackListedToken(models.Model):
#     token = models.CharField(max_length=500)
#     user = models.ForeignKey(User, related_name="token_user", on_delete=models.CASCADE)
#     timestamp = models.DateTimeField(auto_now=True)

#     class Meta:
#         unique_together = ("token", "user")


# class IsTokenValid(BasePermission):
#     def has_permission(self, request, view):
#         user_id = request.user.id
#         is_allowed_user = True
#         token = request.auth.decode("utf-8")
#         try:
#             is_blackListed = BlackListedToken.objects.get(user=user_id, token=token)
#             if is_blackListed:
#                 is_allowed_user = False
#         except BlackListedToken.DoesNotExist:
#             is_allowed_user = True
#         return is_allowed_user
