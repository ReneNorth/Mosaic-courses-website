from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()


class Post(models.Model):
    title = models.CharField(max_length=80)
    slug = models.CharField(max_length=80)
    text = models.TextField()
    pub_date = models.DateTimeField('Дата публикации', auto_now_add=True)
    author = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name='posts')
    image = models.ImageField(
        upload_to='blog/posts/', null=True, blank=True)

    def __str__(self):
        return f'{self.title}, {self.pub_date.strftime("%Y-%m-%d %H:%M:%S")}'
    
    
    
    # может потом добавить группы постам
    # group = models.ForeignKey(
    #     Group,
    #     on_delete=models.SET_NULL,
    #     null=True,
    #     blank=True,
    #     related_name='posts'
    # )

