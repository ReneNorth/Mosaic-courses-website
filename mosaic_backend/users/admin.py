from django.contrib import admin

from .models import User


@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    exclude = ('user_permissions', 'groups', 'is_superuser',
               'last_login', 'is_staff', 'is_active', 'date_joined')

    list_display = ['username', 'first_name', 'last_name', 'email', 'phone']
    list_filter = ['username', ]
    search_fields = ('username', )
