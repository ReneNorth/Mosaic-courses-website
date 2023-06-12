from django.contrib import admin

from blog.models import Post


@admin.register(Post)
class Admin(admin.ModelAdmin):
    pass