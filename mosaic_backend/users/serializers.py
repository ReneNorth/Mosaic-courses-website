from django.shortcuts import get_object_or_404
from rest_framework import serializers

from .models import User


class UserCreateSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ['email', 'id', 'username', 'first_name',
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


class UserReadOnlySerializer(serializers.ModelSerializer):
    is_subscribed = serializers.SerializerMethodField()

    class Meta:
        model = User
        fields = ['email', 'id', 'username', 'first_name',
                  'last_name',
                  ]
        lookup_field = 'username'
