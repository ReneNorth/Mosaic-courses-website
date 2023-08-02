from django.contrib import admin

from masterclass.models import Masterclass, MasterclassType
from booking.models import Booking, ReservationAdmin


@admin.register(MasterclassType)
class MasterclassTypeAdmin(admin.ModelAdmin):

    list_display = ['id', 'type', 'slug', 'max_guests', ]
    search_fields = ('type', 'slug',)


@admin.register(Masterclass)
class MasterclassAdmin(admin.ModelAdmin):
    list_display = ['id', 'course_type', 'title', 'time_begin', 'time_end',
                    'max_guests', 'bookings', 'reservations']
    list_filter = ['time_begin', ]
    search_fields = ('course_type', 'title',)

    def max_guests(self, masterclass) -> str:
        return MasterclassType.objects.get(
            masterclasses=masterclass).max_guests

    def bookings(self, masterclass) -> int:
        return Booking.objects.filter(attending=masterclass).count()

    def reservations(self, masterclass) -> int:
        return ReservationAdmin.objects.filter(attending=masterclass).count()
