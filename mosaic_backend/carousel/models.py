from django.db import models


class MainCarouselItem(models.Model):
    """ ДОБАВИТЬ Докстринг """
    link = models.CharField(max_length=200, verbose_name='Hyperlink') # написать пояснение 
    text = models.CharField(max_length=100, verbose_name='Text on banner')
    button = models.CharField(max_length=20, blank=True)
    order = models.PositiveSmallIntegerField(default=1)
    image = models.ImageField(
        upload_to='carousel_items/', default=None)

    def __str__(self) -> str:
        return f'Item in carouser: {self.text[15:]}'
