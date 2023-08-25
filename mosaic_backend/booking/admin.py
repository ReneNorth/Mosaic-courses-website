from django.contrib import admin

from booking.models import Booking, ReservationAdmin


@admin.register(Booking)
class BookingAdmin(admin.ModelAdmin):
    list_display = ['guest', 'masterclass', ]
    list_filter = ['guest', 'masterclass', ]


@admin.register(ReservationAdmin)
class AdminReservationAdmin(admin.ModelAdmin):
    list_display = ['id', 'guest_name', 'guest_phone', 'attending', ]
    list_filter = ['guest_name', 'guest_phone', 'attending', ]
