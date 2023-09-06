from django.contrib import admin
from users.models import User


@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    exclude = ('user_permissions', 'groups', 'is_superuser',
               'last_login', 'is_staff', 'date_joined',
               'confirmation_code')

    list_display = ['id', 'first_name', 'email', 'phone']
    list_filter = ['email', ]
    search_fields = ('email', 'phone', )
