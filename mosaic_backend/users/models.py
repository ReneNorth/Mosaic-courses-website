from django.contrib.auth.models import AbstractUser
from django.db import models
from phonenumber_field.modelfields import PhoneNumberField


class User(AbstractUser):
    """Basic user class."""

    USER: str = 'user'
    ADMIN: str = 'admin'
    TEACHER: str = 'teacher'

    CHOICES = (
        (USER, 'user'),
        (ADMIN, 'admin'),
        (TEACHER, 'teacher'),
    )
    username = None
    role = models.CharField(choices=CHOICES,
                            default='user',
                            max_length=32)
    email = models.EmailField(unique=True, blank=False)
    phone = PhoneNumberField(unique=True)
    markcomm_agreement = models.BooleanField(
        blank=True, default=False)
    general_agreement = models.BooleanField(
        blank=False, default=True)
    tg_nickname = models.CharField(blank=True, max_length=32)
    confirmation_code = models.CharField(max_length=30, blank=True)
    times_postponed = models.SmallIntegerField(default=0)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['phone', ]

    class Meta:
        ordering = ['id']
        verbose_name = 'User'
        verbose_name_plural = 'Users'
        constraints = [
            models.UniqueConstraint(fields=['phone', 'email'],
                                    name='unique_user')
        ]

    def __str__(self):
        return self.email
