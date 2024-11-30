from django.contrib import admin

from favorite.models import FavoriteArtwork


@admin.register(FavoriteArtwork)
class FavoriteArtworkAdmin(admin.ModelAdmin):
    pass
    # list_display = ['who_favorited', 'favorited_artwork', ]
    # list_filter = ['who_favorited', 'favorited_artwork', ]
