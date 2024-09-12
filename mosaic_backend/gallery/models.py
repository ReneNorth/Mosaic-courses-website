from django.db import models


class GalleryImage(models.Model):
    title = models.CharField(max_length=80,
                             help_text='artwork`s title')
    description = models.CharField(max_length=150,
                                   blank=True,
                                   help_text='artwork`s description')
    add_date = models.DateTimeField(verbose_name='Publication date',
                                    auto_now_add=True)
    image = models.ImageField(
        upload_to='gallery/', default=None)
    price = models.DecimalField(max_digits=10,
                                blank=True,
                                decimal_places=2,
                                help_text='Price might be empty. if so,'
                                          'the artwork is not for sale')
    author = models.CharField(max_length=50,
                              help_text='Author`s name')
    dimentions = models.CharField(max_length=50,
                                  dimentions='dimentions of the'
                                             'artwork in format length x width'
                                             '(if applicable) x height')
    material = models.CharField(max_length=50)

    class Meta:
        ordering = ['-add_date']

    def __str__(self) -> str:
        return f'{self.title}, {self.add_date.strftime("%Y-%m-%d %H:%M:%S")}'
