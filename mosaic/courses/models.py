from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator


class CourseType(models.Model):
    title = models.CharField(max_length=50, verbose_name='Name')
    slug = models.SlugField(max_length=15, verbose_name='Link')
    max_guests = models.PositiveSmallIntegerField(
        verbose_name='Max numberof guests'
    )
    short_description = models.CharField(max_length=50,
                                         verbose_name='Short description')
    full_description = models.TextField(blank=True,
                                        verbose_name='Full description')


class Course(models.Model):
    course_type = models.ForeignKey(CourseType,
                                    on_delete=models.CASCADE,
                                    related_name='courses')
    price = models.PositiveSmallIntegerField(
        null=False,
        validators=[MinValueValidator(0, "Price can't be negative")]
    )
    # if price == 0: write 'free'
    time_begin = models.TimeField()
    time_end = models.TimeField()
    address = models.CharField(max_length=80)

    class Meta:
        verbose_name = 'Мастер-класс'
        verbose_name_plural = 'Рецензии'
        ordering = ['-time_begin']
    # проверка дата окончания позже даты начала
    
