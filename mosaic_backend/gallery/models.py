from django.db import models


class Artwork(models.Model):
    """Instance represents an artwork of a student or a teacher."""
    STUDENT = 'student'
    TEACHER = 'teacher'

    AUTHOR_TYPES = [
        (STUDENT, 'student'),
        (TEACHER, 'teacher'), ]

    author = models.CharField(max_length=50,
                              help_text='Author`s name')
    author_type = models.CharField(max_length=15,
                                   choices=AUTHOR_TYPES)
    title = models.CharField(max_length=80,
                             help_text='artwork`s title')
    add_date = models.DateTimeField(verbose_name='Publication date',
                                    auto_now_add=True)
    price = models.DecimalField(max_digits=10,
                                blank=True,
                                null=True,
                                decimal_places=2,
                                help_text='Price might be empty. if so,'
                                          'the artwork is not for sale')
    dimensions = models.CharField(max_length=50,
                                  help_text='dimentions of the'
                                  'artwork in format length x width'
                                  '(if applicable) x height')
    material = models.CharField(max_length=50,
                                help_text="Material of the artwork",
                                verbose_name="Material")
    description = models.CharField(max_length=150,
                                   blank=True,
                                   help_text='artwork`s description')
    is_in_stock = models.BooleanField(verbose_name='is this artwork available',
                                      default=True)
    is_replica_available = models.BooleanField(
        verbose_name='is this artwork can be made again',
        default=False)

    class Meta:
        ordering = ['-add_date']

    def __str__(self) -> str:
        return f'{self.title}, {self.add_date.strftime("%Y-%m-%d %H:%M:%S")}'


class ArtworkImage(models.Model):
    artwork = models.ForeignKey(Artwork,
                                related_name='images',
                                on_delete=models.SET_NULL,
                                blank=True,
                                null=True)
    image = models.ImageField(
        upload_to='gallery/', default=None)

    class Meta:
        verbose_name = "Artwork Image"
        verbose_name_plural = "Artwork Images"

    def __str__(self) -> str:
        return f'Image for {self.artwork.title}'
