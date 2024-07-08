from django.contrib import admin

from booking.models import Booking, GuestReservation


@admin.register(Booking)
class BookingAdmin(admin.ModelAdmin):
    list_display = ['id', 'guest', 'masterclass', ]
    list_filter = ['guest', 'masterclass', ]


@admin.register(GuestReservation)
class AdminReservationAdmin(admin.ModelAdmin):
    list_display = ['id', 'guest_name', 'guest_phone', 'attending', ]
    list_filter = ['guest_name', 'guest_phone', 'attending', ]
