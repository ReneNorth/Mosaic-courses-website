from django.contrib.auth import get_user_model
from django.core.validators import MinValueValidator
from django.db import models
from mdeditor.fields import MDTextField

User = get_user_model()


class Tag(models.Model):
    title = models.CharField(
        max_length=50, help_text='how the tag is named')
    slug = models.CharField(
        max_length=50, help_text='defines a name for the searchfield')

    class Meta:
        ordering = ['-id']

    def __str__(self) -> str:
        """Return the name field of the model."""
        return f'tag {self.title} with slug {self.slug}'


class Post(models.Model):
    author = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name='author')
    title = models.CharField(max_length=80,
                             help_text='Post`s title')
    slug = models.CharField(max_length=80,
                            unique=True,
                            help_text='defines an address where users can '
                                      'acess this post, for instance, if'
                                      'the slug is <mosaic>, the post will be'
                                      'accesible at blog/mosaic')
    preview_text = models.TextField(max_length=400)
    text = MDTextField()
    pub_date = models.DateTimeField(verbose_name='Publication date',
                                    auto_now_add=True)
    upd_date = models.DateTimeField(verbose_name='Update date',
                                    auto_now_add=True)
    image = models.ImageField(
        upload_to='blog/', default=None)
    read_time = models.SmallIntegerField(
        blank=True,
        validators=[MinValueValidator(1)],
        help_text='Approximate time that is reqired to read the article'
    )
    tags = models.ManyToManyField(Tag, through='PostTag')

    class Meta:
        ordering = ['-pub_date']

    def __str__(self) -> str:
        return f'{self.title}, {self.pub_date.strftime("%Y-%m-%d %H:%M:%S")}'


class PostTag(models.Model):
    post = models.ForeignKey(
        Post, on_delete=models.CASCADE, related_name='posts',
        help_text='choose to what post to add a tag')
    tag = models.ForeignKey(
        Tag, on_delete=models.CASCADE, related_name='tags',
        help_text='choose what tag to add to a post you choose above')

    def __str__(self) -> str:
        return f'{self.tag} to the post {self.post}'
