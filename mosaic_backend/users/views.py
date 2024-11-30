import datetime
import logging

from django.contrib.auth import get_user_model
from djoser.serializers import UidAndTokenSerializer
from djoser.views import UserViewSet
from rest_framework import filters, status
from rest_framework.decorators import action
from rest_framework.pagination import PageNumberPagination
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from api.serializers import BookingSerializer, MasterclassSerializer
from booking.models import Booking
from masterclass.models import Masterclass
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
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)
