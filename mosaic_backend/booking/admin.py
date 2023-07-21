from django.contrib import admin

from booking.models import Booking


@admin.register(Booking)
class Admin(admin.ModelAdmin):
    pass
