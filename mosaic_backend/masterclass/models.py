import logging

from django.contrib.auth import get_user_model
from django.core.exceptions import ValidationError
from django.core.validators import MinValueValidator
from django.db import models
from django.db import IntegrityError

from mosaic.business_logic import DummyTeacher

User = get_user_model()
log = logging.getLogger(__name__)


def get_or_create_dummy_teacher():
    """Method creates a dummy teacher instance to populate masterclasses

    Returns:
        User: an instance of a User with a role set to a Teacher
    """
    try:
        dummy_teacher = User.objects.get_or_create(
            first_name=DummyTeacher.first_name,
            last_name=DummyTeacher.last_name,
            is_staff=DummyTeacher.is_staff,
            general_agreement=DummyTeacher.general_agreement,
            role=DummyTeacher.role,
            email=DummyTeacher.email,
            phone=DummyTeacher.phone)[0]
        return dummy_teacher
    except IntegrityError as e:
        log.error(
            'Got DB integrity error while'
            f'creating or assigning dummy teacher: {e}')
        raise
    except Exception as e:
        log.error(
            f"Other errors while creating or assigning dummy teacher: {e}")
        raise


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


class Category(models.Model):
    name = models.CharField(max_length=50, unique=True, verbose_name='Tag')
    slug = models.SlugField(max_length=50, unique=True, verbose_name='Slug')

    class Meta:
        ordering = ['-id']

    def __str__(self) -> str:
        """Return the name field of the model."""
        return self.name


class Masterclass(models.Model):
    CURRENCY_CHIOCE = [('₸', 'тенге'), ('₽', 'рубли'), ('€', 'евро')]
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
    time_start = models.DateTimeField()
    time_end = models.DateTimeField()
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
            f'Course {self.title} (id {self.id}) '
            f'at {self.time_start.strftime("%x")} '
        )


class MasterclassTypeCategory(models.Model):
    category = models.ForeignKey(Category, on_delete=models.CASCADE,
                                 related_name='tags')
    masterclass_type = models.ForeignKey(Masterclass, on_delete=models.CASCADE)

    class Meta:
        constraints = [
            models.UniqueConstraint(fields=['category', 'masterclass_type'],
                                    name='unique category-masterclass pair')
        ]

    def __str__(self):
        return f'{self.category} -> {self.masterclass_type}'
