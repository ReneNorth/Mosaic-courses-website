from django.contrib import admin

from gallery.models import Artwork, ArtworkImage


@admin.register(Artwork)
class ArtworkAdmin(admin.ModelAdmin):
    pass


@admin.register(ArtworkImage)
class ArtworkImageAdmin(admin.ModelAdmin):
    pass
