from django.contrib import admin

from carousel.models import MainCarouselItem


@admin.register(MainCarouselItem)
class Admin(admin.ModelAdmin):
    pass
