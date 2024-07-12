from django.contrib.auth import get_user_model
from django.db import models

from masterclass.models import Masterclass

User = get_user_model()


class Booking(models.Model):
    guest = models.ForeignKey(User,
                              on_delete=models.CASCADE,
                              related_name='bookings')
    masterclass = models.ForeignKey(
        Masterclass,
        on_delete=models.CASCADE,
        related_name='bookings',
        verbose_name='course/masterclass',
        help_text='the course this guests is going to attend')

    def __str__(self) -> str:
        return (f'{self.guest} attends '
                f'{self.masterclass} ({self.masterclass.id})')

    class Meta:
        verbose_name = 'Booking by a registered user'
        verbose_name_plural = 'Bookings by registered users'


class GuestReservation(models.Model):
    guest_name = models.CharField(max_length=30)
    guest_phone = models.CharField(max_length=15)
    attending = models.ForeignKey(
        Masterclass,
        on_delete=models.CASCADE,
        related_name='admin_reservations',
        verbose_name='course/masterclass',
        help_text='the course this guests is going to attend')

    class Meta:
        verbose_name = 'A reservation made by an admin'
        verbose_name_plural = 'Reservations made by admins'
