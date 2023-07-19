from django.contrib import admin

from marketplace.models import Artwork, ArtworkMainPage


@admin.register(Artwork, ArtworkMainPage)
class Admin(admin.ModelAdmin):
    pass
