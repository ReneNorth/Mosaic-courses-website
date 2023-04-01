from django.contrib import admin
from carousel.models import CarouselItem


@admin.register(CarouselItem)
class Admin(admin.ModelAdmin):
    pass
