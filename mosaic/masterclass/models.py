from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator


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
    title = models.CharField(max_length=50,
                             verbose_name='Title',
                             default='masterclass')
    # сделать предзаполненное название - название типа курса =
    course_type = models.ForeignKey(MasterclassType,
                                    on_delete=models.CASCADE,
                                    related_name='masterclasses')
    price = models.PositiveSmallIntegerField(
        null=False,
        validators=[MinValueValidator(0, "Price can't be negative")]
    )
    currency = models.CharField(max_length=20)
    # if price == 0: write 'free'
    # time_begin = models.DateTimeField()
    # time_end = models.DateTimeField()
    address = models.CharField(max_length=80)
    # num_of_guests = models.PositiveSmallIntegerField(
    #     null=False,
    #     default=0,
        # validators=[MaxValueValidator()]
    # )
    # понять как считать это значение + сделать его неизменяемым
    # через админку

    class Meta:
        verbose_name = 'Masterclass'
        verbose_name_plural = 'Masterclasses'
        # ordering = ['-time_begin']
    # проверка дата окончания позже даты начала
    
    def __str__(self) -> str:
        # return f'{self.course_type} / {self.title} at {self.time_begin}'
        return f'{self.course_type} / {self.title} at {self.time_begin}'
        # TODO поменять репрезентацию времени в админке
    
