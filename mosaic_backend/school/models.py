from django.db import models
from mdeditor.fields import MDTextField


class School(models.Model):
    """Основные данные о школе."""

    name = models.CharField(max_length=20,
                            verbose_name='School name ',
                            help_text='Add or change the school name')
    logo = models.ImageField(
        upload_to='logo/', blank=True)
    full_description = MDTextField(max_length=500)
    short_description = models.TextField(max_length=300)
    address_text = models.CharField(max_length=50)
    address_link = models.CharField(max_length=150)
    working_hours = models.CharField(max_length=50)  # строкой?
    phone = models.CharField(max_length=50)
    email = models.CharField(max_length=50)
    facebook_link = models.CharField(max_length=150)
    tg_link = models.CharField(max_length=150)
    instagram_link = models.CharField(max_length=150)

    def __str__(self) -> str:
        return f'Информация о школе {self.name}'


class Question(models.Model):
    """Вопросы и ответы для главной страницы."""

    school = models.ForeignKey(School, on_delete=models.CASCADE,
                               related_name='questions', default=1)
    question = models.CharField(max_length=100)
    answer = models.CharField(max_length=150)

    def __str__(self) -> str:
        return f'Вопрос {self.question[:15]}'


class Advatage(models.Model):
    """Преимущества школы для главной страницы."""

    school = models.ForeignKey(School, on_delete=models.CASCADE,
                               related_name='advantages', default=1)
    title = models.CharField(max_length=100)
    description = models.CharField(max_length=200)

    def __str__(self) -> str:
        return f'Преимущество {self.title[:15]}'


class Approach(models.Model):
    """Подход к занятиям для главной страницы."""

    school = models.ForeignKey(School, on_delete=models.CASCADE,
                               related_name='approach', default=1)
    title = models.CharField(max_length=100)
    description = models.CharField(max_length=200)

    def __str__(self) -> str:
        return f'Подход {self.title[:15]}'


class Review(models.Model):
    """
    Model for student reviews.

    This model represents reviews submitted by students.
    It includes information such as the student's name,
    a photo (optional), a title (optional), the review text,
    and the publication date.

    Attributes:
        student_name (CharField): The name of the student (max 20 characters).
        photo (ImageField): Photo of the review (optional).
        title (TextField): Title of the review (max 100 characters, optional).
        review (TextField): The review text (maximum 450 characters).
        pub_date (DateField): The date of review publication.

    Methods:
        __str__(): Returns a string representation of the review object.

    """
    student_name = models.CharField(max_length=20)
    photo = models.ImageField(blank=True)
    title = models.TextField(max_length=100, blank=True)
    review = models.TextField(max_length=450)
    pub_date = models.DateField(auto_now=False, auto_now_add=False)

    def __str__(self) -> str:
        return f'Review by {self.student_name}'
