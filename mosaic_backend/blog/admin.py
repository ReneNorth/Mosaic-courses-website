from django.contrib import admin

from blog.models import Post, PostTag, Tag


@admin.register(Post, Tag, PostTag)
class Admin(admin.ModelAdmin):
    pass
