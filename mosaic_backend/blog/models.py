from django.contrib.auth import get_user_model
from django.db import models
from django.core.validators import MinValueValidator
from mdeditor.fields import MDTextField


User = get_user_model()


class Post(models.Model):
    author = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name='author')
    title = models.CharField(max_length=80)
    slug = models.CharField(max_length=80)
    preview_text = models.TextField(max_length=400)
    text = MDTextField()
    pub_date = models.DateTimeField('Дата публикации', auto_now_add=True)
    image = models.ImageField(
        upload_to='blog/posts/', blank=True, default=None)
    read_time = models.SmallIntegerField(
        blank=True,
        validators=[MinValueValidator(1)]
    )

    def __str__(self):
        return f'{self.title}, {self.pub_date.strftime("%Y-%m-%d %H:%M:%S")}'
