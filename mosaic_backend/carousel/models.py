from django.db import models


class MainCarouselItem(models.Model):
    # MAIN_CAROUSEL = 'MAIN'
    # MAIN_GALLERY_CAROUSEL = 'GALLERY'
    # CAROUSEL_CHOICES = [
    #     (MAIN_CAROUSEL, 'Main carousel'),
    #     (MAIN_GALLERY_CAROUSEL, 'Gallery carousel'),
    # ]
    link = models.CharField(max_length=200, verbose_name='Hyperlink')
    text = models.CharField(max_length=100, verbose_name='Text on banner')
    button = models.CharField(max_length=20, blank=True)
    order = models.PositiveSmallIntegerField(default=1)
    # carousel_type = models.CharField(
    #     max_length=20,
    #     choices=CAROUSEL_CHOICES)
    image = models.ImageField(
        upload_to='carousel_items/', default=None)

    def __str__(self) -> str:
        return f'Item in carouser: {self.text[15:]}'
