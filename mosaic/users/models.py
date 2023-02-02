from django.db import models
from django.contrib.auth.models import AbstractUser, BaseUserManager
from phonenumber_field.modelfields import PhoneNumberField


# https://stackoverflow.com/questions/54233005/error-in-superuser-creation-not-null-constraint-failed
class UserManager(BaseUserManager):
    """Здесь будет переопределение метода создания суперюзера, чтобы 
    обходить ограничение базы по consent_general = models.BooleanField(
    required=True)
    """

    pass


class User(AbstractUser):
    email = models.EmailField(unique=True)
    phone = PhoneNumberField(blank=False, unique=True)
    consent_comm = models.BooleanField(blank=True, null=True)
    consent_general = models.BooleanField(blank=True, null=True)
    # consent_general = models.BooleanField()
    # нужно создать кастомный менеджер
    # созданя юзеров, чтобы создать админа при ограничении на обязательность
    tg_nickname = models.CharField(max_length=32, blank=True)
    confirmation_code = models.CharField(max_length=30, blank=True)
    # TODO - как спрятать лишние поля в админке?

    class Meta:
        ordering = ['id']
        verbose_name = 'User'
        verbose_name_plural = 'Users'
        constraints = [
            models.UniqueConstraint(fields=['username', 'email'],
                                    name='unique_user')
        ]
    
