from django.contrib import admin

from blog.models import Post, Tag, PostTag


@admin.register(Post, Tag, PostTag)
class Admin(admin.ModelAdmin):
    pass
