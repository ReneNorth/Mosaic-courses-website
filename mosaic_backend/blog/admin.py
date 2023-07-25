from django.contrib import admin
from django.db import models
from blog.models import Post, PostTag, Tag
from mdeditor.widgets import MDEditorWidget


class MdPostModelAdmin(admin.ModelAdmin):
    formfield_overrides = {
        models.TextField: {'widget': MDEditorWidget}
    }


admin.site.register(Post, MdPostModelAdmin)

# @admin.register(Post)
# class PostAdmin(admin.ModelAdmin):
#     pass


@admin.register(PostTag)
class PostTagAdmin(admin.ModelAdmin):
    pass


@admin.register(Tag)
class TagAdmin(admin.ModelAdmin):
    pass
