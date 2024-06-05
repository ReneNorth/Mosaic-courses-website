from django.contrib import admin

from booking.models import Booking, ReservationAdmin
from masterclass.models import (MasterclassCategory, Masterclass, MasterclassType,
                                MasterclassTypeCategory)


@admin.register(MasterclassType)
class MasterclassTypeAdmin(admin.ModelAdmin):

    list_display = ['id', 'title', 'slug', 'max_guests', ]
    search_fields = ('title', 'slug',)


@admin.register(Masterclass)
class MasterclassAdmin(admin.ModelAdmin):
    list_display = ['id', 'course_type', 'title', 'price', 'time_start',
                    'time_end', 'max_guests', 'bookings', 'reservations']
    list_filter = ['time_start', ]
    search_fields = ('course_type', 'title', )

    def max_guests(self, masterclass) -> int:
        return MasterclassType.objects.get(
            masterclasses=masterclass).max_guests

    def bookings(self, masterclass) -> int:
        return Booking.objects.filter(
            masterclass=masterclass).count()

    def reservations(self, masterclass) -> int:
        return ReservationAdmin.objects.filter(
            attending__id=masterclass.id).count()


@admin.register(MasterclassCategory)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ['name', 'slug', 'category_filter', ]


@admin.register(MasterclassTypeCategory)
class MasterclassTypeCategoryAdmin(admin.ModelAdmin):
    list_display = ['category', 'masterclass_type', ]
    list_filter = ['category', 'masterclass_type', ]
