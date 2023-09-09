from django.contrib.auth.models import AbstractUser, AbstractUser
from django.contrib.auth.base_user import BaseUserManager
from django.db import models
from phonenumber_field.modelfields import PhoneNumberField
import logging

log = logging.getLogger(__name__)


class CustomUserManager(BaseUserManager):
    """This class redefines promts when creating username, e.g. we don't need
    the username in this project, so it shouldn't be prompted"""

    use_in_migrations = True

    def _create_user(self, email, password, phone, **extra_fields):
        print('123')
        log.info('test123')
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
        return self._create_user(email, password, **extra_fields)

    def create_superuser(self, email, password, phone, **extra_fields):
        log.info('test123')
        log.info(email)
        log.info(phone)
        user = self.create_user(email=email, phone=phone, password=password)
        extra_fields.setdefault('general_agreement', True)
        user.is_superuser = True
        user.is_staff = True
        user.save(using=self._db)
        return user


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
        return self.email
