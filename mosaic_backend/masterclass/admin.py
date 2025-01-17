from django.contrib import admin
from django.core.exceptions import ValidationError

from booking.models import Booking, GuestReservation
from masterclass.models import (Masterclass, MasterclassCategory,
                                MasterclassType, MasterclassTypeCategory)

from .models import MasterclassCategory


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
        return GuestReservation.objects.filter(
            attending__id=masterclass.id).count()


@admin.register(MasterclassCategory)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ['name', 'slug', 'category_filter', ]

    def delete_model(self, request, obj):
        """
        Deletes the specified model instance
        if it is not the "recommended" category.

        Raises:
            ValidationError: If the model instance has a slug of 'recommended'.
        """
        if obj.slug == 'recommended':
            raise ValidationError(
                'The "recommended" category cannot be deleted.')
        obj.delete()

    def delete_queryset(self, request, queryset):
        """
        Deletes the given queryset, but raises a ValidationError
        if any object in the queryset
        has a slug of 'recommended'.


        Raises:
            ValidationError: If any object
            in the queryset has a slug of 'recommended'.
        """
        for obj in queryset:
            if obj.slug == 'recommended':
                raise ValidationError(
                    'The "recommended" category cannot be deleted.')
            obj.delete()


@admin.register(MasterclassTypeCategory)
class MasterclassTypeCategoryAdmin(admin.ModelAdmin):
    list_display = ['category', 'masterclass_type', ]
    list_filter = ['category', 'masterclass_type', ]
