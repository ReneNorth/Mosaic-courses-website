from django.core.validators import MinValueValidator
from django.db import models
from django.utils import timezone
from django.contrib.auth import get_user_model
from mosaic.business_logic import DummyTeacher
from django.core.exceptions import ValidationError

User = get_user_model()


def get_or_create_dummy_teacher():
    return get_user_model().objects.get_or_create(
        username=DummyTeacher.username,
        first_name=DummyTeacher.first_name,
        last_name=DummyTeacher.last_name,
        is_staff=DummyTeacher.is_staff,
        general_agreement=DummyTeacher.general_agreement,
        role=DummyTeacher.role,
        email=DummyTeacher.email,
        phone=DummyTeacher.phone
    )[0]


class MasterclassType(models.Model):
    title = models.CharField(max_length=50, verbose_name='Title')
    slug = models.SlugField(max_length=15, verbose_name='Link')
    image = models.ImageField(upload_to='masterclasses/')
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
        return self.title


class Masterclass(models.Model):
    CURRENCY_CHIOCE = [('тенге', 'тенге'), ('руб.', 'руб.'), ('eur', 'eur')]
    course_type = models.ForeignKey(MasterclassType,
                                    on_delete=models.CASCADE,
                                    related_name='masterclasses',
                                    verbose_name='Basic course type')
    title = models.CharField(max_length=50,
                             verbose_name='Название')
    price = models.PositiveIntegerField(
        null=False,
        validators=[MinValueValidator(0, "Price can't be negative")]
    )
    currency = models.CharField(choices=CURRENCY_CHIOCE,
                                max_length=20,
                                default='тенге')
    time_start = models.DateTimeField(default=timezone.now)
    time_end = models.DateTimeField(default=timezone.now)
    teacher = models.ForeignKey(User,
                                related_name='masterclasses',
                                on_delete=models.SET(
                                    get_or_create_dummy_teacher))

    class Meta:
        verbose_name = 'Masterclass'
        verbose_name_plural = 'Masterclasses'
        ordering = ['-time_start']
        constraints = []

    def clean(self):
        if self.time_start > self.time_end:
            raise ValidationError(
                'There is an overlap between the start time and end time. '
                'Please ensure that the course timing is accurate.')

    def __str__(self) -> str:
        return (
            f'Курс {self.course_type} / {self.title} '
            f'at {self.time_start.strftime("%x")} '
            f'(timezone {self.time_start.tzinfo})'
        )
