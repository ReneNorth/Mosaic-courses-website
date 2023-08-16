import logging

from django.contrib.auth import get_user_model
from djoser.views import UserViewSet
from rest_framework import filters
from rest_framework.decorators import action
from rest_framework.permissions import IsAuthenticated
from rest_framework.pagination import PageNumberPagination
from users.serializers import CustomUserSerializer

from api.serializers import BookingSerializer
from booking.models import Booking

User = get_user_model()
log = logging.getLogger(__name__)


class CustomizedUserViewSet(UserViewSet):
    queryset = User.objects.all()
    serializer_class = CustomUserSerializer
    filter_backends = (filters.SearchFilter, )
    search_fields = ('username', )

    def get_serializer_context(self):
        return {'user': self.request.user}

    @action(detail=False,
            url_path='my_masterclasses',
            serializer_class=BookingSerializer,
            permission_classes=[IsAuthenticated, ],
            pagination_class=PageNumberPagination)
    def get_my_masterclasses(self, request):
        """
        Returns all masterclasses the user has booked.
        """
        bookings = Booking.objects.filter(guest=request.user)
        pagination = self.paginate_queryset(bookings)
        serializer = self.get_serializer(pagination, many=True)
        return self.get_paginated_response(serializer.data)
