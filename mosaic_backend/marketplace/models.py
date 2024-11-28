from django.db import models


class Artwork(models.Model):
    """Instance represents an artwork of a student or a teacher."""
    STUDENT = 'student'
    TEACHER = 'teacher'

    AUTHOR_TYPES = [
        (STUDENT, 'student'),
        (TEACHER, 'teacher'), ]

    title = models.CharField(max_length=50)
    author = models.CharField(max_length=50)
    author_type = models.CharField(
        max_length=15,
        choices=AUTHOR_TYPES)
    image = models.ImageField(
        upload_to='artworks/', default=None)

    is_for_sale = models.BooleanField()
    price = models.PositiveSmallIntegerField(null=True,
                                             blank=True)
    description = models.TextField(max_length=1000,
                                   blank=True)

    def __str__(self) -> str:
        return f'{self.title} by {self.author}'


class ArtworkMainPage(models.Model):
    artwork = models.ForeignKey(Artwork,
                                on_delete=models.CASCADE,
                                related_name='artworks_on_main')
    custom_ordering = models.PositiveSmallIntegerField()

    def __str__(self) -> str:
        return f'{self.artwork} with {self.custom_ordering} priority'
