from django.contrib import admin

from carousel.models import MainCarouselItem


@admin.register(MainCarouselItem)
class MainCarouselItemAdmin(admin.ModelAdmin):
    list_display = ['id', 'title', 'button', 'order']
    list_filter = ['order', ]
