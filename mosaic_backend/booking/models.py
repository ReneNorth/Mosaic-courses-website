from django.contrib.auth import get_user_model
from django.db import models

from masterclass.models import Masterclass

User = get_user_model()


class Booking(models.Model):
    guest = models.ForeignKey(User,
                              on_delete=models.CASCADE,
                              related_name='bookings')
    attending = models.ForeignKey(
        Masterclass,
        on_delete=models.CASCADE,
        related_name='bookings',
        verbose_name='course/masterclass',
        help_text='the course this guests is going to attend')

    def __str__(self) -> str:
        return f'{self.guest} attends {self.attending}'

    class Meta:
        verbose_name = 'Booking by a registered user'
        verbose_name_plural = 'Booking by registered users'
