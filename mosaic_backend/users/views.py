import logging

from django.contrib.auth import get_user_model
from django.shortcuts import get_object_or_404
from djoser.serializers import UidAndTokenSerializer
from djoser.views import UserViewSet
from rest_framework.permissions import IsAuthenticated
from rest_framework import filters, status
from rest_framework.decorators import action
from rest_framework.pagination import PageNumberPagination
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from api.serializers import BookingSerializer
from booking.models import Booking
from users.serializers import (CustomCreateUserSerializer, EmailbyUidUserSerializer,
                               UserPersonalPageSerializer)

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

    # @action(detail=False,
    #         methods=['GET', ],
    #         permission_classes=[IsAuthenticated, ],
    #         url_path='me',)
    # def get_me(self, request):
    #     user = get_object_or_404(User, pk=request.user.pk)
    #     serializer = self.get_serializer(user)
    #     return Response(serializer.data, status=status.HTTP_200_OK)

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
