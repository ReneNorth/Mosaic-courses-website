from django.shortcuts import get_object_or_404
from rest_framework import serializers

from .models import User


class UserCreateSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = User
        fields = ['email', 'id', 'username', 'first_name',
                  'last_name', ]

    def validate_role(self, value):
        """Проверка роли, которую указал пользователь.
        В случае, если пользователь с ролью user прописал роль
        admin или moderator, принудительно устанавливаем роль user,
        иначе устанавливаем роль из переданной переменной."""
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
