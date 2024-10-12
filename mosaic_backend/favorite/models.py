from django.db import models
from django.contrib.auth import get_user_model
from gallery.models import Artwork

User = get_user_model()


class FavoriteArtwork(models.Model):
    who_favorited = models.ForeignKey(User,
                                      related_name='who_favorited',
                                      on_delete=models.CASCADE)
    favorited_artwork = models.ForeignKey(Artwork,
                                          related_name='is_favorited',
                                          on_delete=models.CASCADE)

    def __str__(self) -> str:
        return (f'{self.who_favorited}'
                f'added to favorite an artwork {self.favorited_artwork}')
