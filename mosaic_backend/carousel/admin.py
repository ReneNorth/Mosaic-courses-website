from carousel.models import MainCarouselItem
from django.contrib import admin


@admin.register(MainCarouselItem)
class Admin(admin.ModelAdmin):
    pass
