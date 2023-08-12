from django.contrib.auth.models import AbstractUser, BaseUserManager
from django.db import models
from phonenumber_field.modelfields import PhoneNumberField


# https://stackoverflow.com/questions/54233005/error-in-superuser-creation-not-null-constraint-failed
class UserManager(BaseUserManager):
    """Здесь будет переопределение метода создания суперюзера, чтобы
    обходить ограничение базы по consent_general = models.BooleanField(
    required=True)
    """
    pass


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
    role = models.CharField(choices=CHOICES,
                            default='user',
                            max_length=32)
    email = models.EmailField(unique=True)
    phone = PhoneNumberField(blank=True, unique=True)
    markcomm_agreement = models.BooleanField(
        blank=True, null=True, default=False)
    general_agreement = models.BooleanField(
        blank=False, null=True, default=True)
    tg_nickname = models.CharField(blank=True, max_length=32)
    confirmation_code = models.CharField(max_length=30, blank=True)

    class Meta:
        ordering = ['id']
        verbose_name = 'User'
        verbose_name_plural = 'Users'
        constraints = [
            models.UniqueConstraint(fields=['username', 'email'],
                                    name='unique_user')
        ]

    def __str__(self):
        return self.email
