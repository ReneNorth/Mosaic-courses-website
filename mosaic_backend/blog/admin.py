from django.contrib import admin
from django.db import models
from mdeditor.widgets import MDEditorWidget

from blog.models import Post, PostTag, Tag


class MdPostModelAdmin(admin.ModelAdmin):
    formfield_overrides = {
        models.TextField: {'widget': MDEditorWidget}
    }


admin.site.register(Post, MdPostModelAdmin)


@admin.register(PostTag)
class PostTagAdmin(admin.ModelAdmin):
    list_display = ['id', 'post', 'tag', ]
    list_filter = ['post', 'tag', ]


@admin.register(Tag)
class TagAdmin(admin.ModelAdmin):
    list_display = ['title', 'slug', ]
