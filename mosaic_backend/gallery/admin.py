from django.contrib import admin
from gallery.models import GalleryImage


@admin.register(GalleryImage)
class PostTagAdmin(admin.ModelAdmin):
    list_display = ['id', 'title', 'description', ]
    list_filter = ['add_date', ]
