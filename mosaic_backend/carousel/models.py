from django.db import models


class MainCarouselItem(models.Model):
    """Represents an item of the main carousel."""
    link = models.CharField(
        max_length=200, verbose_name='Hyperlink')  # написать пояснение
    title = models.CharField(max_length=50,
                             verbose_name='Header on the banner',
                             blank=True)
    text = models.CharField(max_length=250,
                            verbose_name='Text on banner')
    button = models.CharField(max_length=20, blank=True)
    order = models.PositiveSmallIntegerField(default=1)
    image = models.ImageField(
        upload_to='carousel_items/', default=None)

    def __str__(self) -> str:
        return f'Item in the carousel: {self.text[15:]}'
