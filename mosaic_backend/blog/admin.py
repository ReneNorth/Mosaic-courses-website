from blog.models import Post, PostTag, Tag
from django.contrib import admin


@admin.register(Post, Tag, PostTag)
class Admin(admin.ModelAdmin):
    pass
