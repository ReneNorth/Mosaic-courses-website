from booking.models import Booking
from django.contrib import admin


@admin.register(Booking)
class Admin(admin.ModelAdmin):
    pass
