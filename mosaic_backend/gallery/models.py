from django.db import models


class GalleryImage(models.Model):
    title = models.CharField(max_length=80,
                             help_text='Post`s title')
    description = models.CharField(max_length=150,
                                   blank=True,
                                   help_text='Post`s title')
    add_date = models.DateTimeField(verbose_name='Publication date',
                                    auto_now_add=True)
    image = models.ImageField(
        upload_to='gallery/', default=None)

    class Meta:
        ordering = ['-add_date']

    def __str__(self) -> str:
        return f'{self.title}, {self.add_date.strftime("%Y-%m-%d %H:%M:%S")}'
