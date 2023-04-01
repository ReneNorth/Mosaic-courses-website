from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator
from django.utils import timezone


class MasterclassType(models.Model):
    type = models.CharField(max_length=50, verbose_name='Name')
    slug = models.SlugField(max_length=15, verbose_name='Link')
    max_guests = models.PositiveSmallIntegerField(
        verbose_name='Max number of guests'
    )
    duration = models.PositiveSmallIntegerField(
        verbose_name='How many hours required to finish the masterclass'
    )
    short_description = models.CharField(max_length=50,
                                         verbose_name='Short description')
    full_description = models.TextField(blank=True,
                                        verbose_name='Full description')

    class Meta:
        verbose_name = 'Masterclass type'
        verbose_name_plural = 'Masterclass types'
        ordering = ['id']

    def __str__(self) -> str:
        return self.type


class Masterclass(models.Model):
    CURRENCY_CHIOCE = [('тенге', 'тенге'), ('руб.', 'руб.'), ('eur', 'eur')]
    course_type = models.ForeignKey(MasterclassType,
                                    on_delete=models.CASCADE,
                                    related_name='masterclasses',
                                    verbose_name='Выбор типа курса из '
                                    'предустановленных вариантов')
    title = models.CharField(max_length=50,
                             verbose_name='Название',
                             )
    price = models.PositiveIntegerField(
        null=False,
        validators=[MinValueValidator(0, "Price can't be negative")]
    )
    currency = models.CharField(choices=CURRENCY_CHIOCE,
                                max_length=20,
                                default='тенге')
    time_begin = models.DateTimeField(default=timezone.now)
    time_end = models.DateTimeField(default=timezone.now)


    class Meta:
        verbose_name = 'Masterclass'
        verbose_name_plural = 'Masterclasses'
        ordering = ['-time_begin']
    # проверка дата окончания позже даты начала

    def __str__(self) -> str:
        return f'{self.course_type} / {self.title} at {self.time_begin}'
