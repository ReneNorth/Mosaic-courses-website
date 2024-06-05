from django.contrib import admin

from users.models import User


@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    exclude = ('user_permissions', 'groups', 'is_superuser',
               'last_login', 'date_joined',
               'confirmation_code', 'password')

    list_display = ['id', 'first_name', 'email',
                    'phone', 'is_active', 'is_staff', 'is_superuser',]
    list_filter = ['email', ]
    search_fields = ('email', 'phone', )
