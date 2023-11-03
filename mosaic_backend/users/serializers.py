from django.contrib.auth import get_user_model
import logging

from django.shortcuts import get_object_or_404
from django.contrib.auth.hashers import make_password
from django.contrib.auth import get_user_model
from rest_framework import serializers


User = get_user_model()
log = logging.getLogger(__name__)


class UserCreateSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ['email', 'id', 'first_name',
                  'last_name', ]

    def validate_role(self, value):
        """
        Check the role specified by the user.
        If a user with the "user" role specifies "admin" or "moderator"
        as the role, forcefully set the role to "user",
        otherwise, set the role to the value from the passed variable.
        """
        if (value == ('admin' or 'moderator')
           and get_object_or_404(User, pk=self.instance.pk).is_user):
            return 'user'
        return value


class CustomUserSerializer(serializers.ModelSerializer):
    """Customized user serialiser with redefined create method. """

    class Meta:
        model = User
        fields = ['email', 'id', 'first_name',
                  'last_name', 'password', 'phone', 'general_agreement',
                  'markcomm_agreement']
        lookup_field = 'username'
        extra_kwargs = {'password': {'write_only': True},
                        'general_agreement': {'required': True},
                        'markcomm_agreement': {'required': True}}

    def create(self, validated_data):
        validated_data['password'] = make_password(validated_data['password'])
        user = super().create(validated_data)
        return user


class EmailbyUidUserSerializer(serializers.ModelSerializer):
    """Returns just a user's email."""

    class Meta:
        model = User
        fields = ['email', ]
