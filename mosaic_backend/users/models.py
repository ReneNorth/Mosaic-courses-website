import logging

from django.contrib.auth.models import AbstractUser, AbstractUser
from django.contrib.auth.base_user import BaseUserManager
from django.db import models
from phonenumber_field.modelfields import PhoneNumberField


log = logging.getLogger(__name__)


class CustomUserManager(BaseUserManager):
    """This class redefines promts when creating username, e.g. we don't need
    the username in this project, so it shouldn't be prompted"""

    use_in_migrations = True

    def _create_user(self, email, password, phone, **extra_fields):
        if not email:
            raise ValueError('The given email must be set')
        if not phone:
            raise ValueError('The given phone must be set')
        email = self.normalize_email(email)
        user = self.model(email=email, phone=phone, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_user(self, email, password=None, **extra_fields):
        extra_fields.setdefault('general_agreement', True)
        extra_fields.setdefault('is_staff', False)
        extra_fields.setdefault('is_superuser', False)
        extra_fields.setdefault('role', 'user')
        return self._create_user(email, password, **extra_fields)

    def create_superuser(self, email, password, phone, **extra_fields):
        extra_fields.setdefault('general_agreement', True)
        extra_fields.setdefault('is_active', True)
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        extra_fields.setdefault('role', 'admin')
        return self._create_user(email, password, phone, **extra_fields)


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
    is_active = models.BooleanField(
        ("active"),
        default=False,
        help_text=(
            "Designates whether this user should be treated as active. "
            "Unselect this instead of deleting accounts."
        ),
    )

    objects = CustomUserManager()

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
        return f'{self.email} (id {self.id})'

    @property
    def is_user(self):
        return self.role == self.USER

    @property
    def is_admin(self):
        return self.role == self.ADMIN

    @property
    def is_teacher(self):
        return self.role == self.TEACHER
