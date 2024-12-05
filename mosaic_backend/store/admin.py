from django.contrib import admin
from .models import StoreItem, StoreItemImage, Basket, BasketItem, BasketArtwork


@admin.register(StoreItem)
class StoreItemAdmin(admin.ModelAdmin):
    list_display = ('name', 'description', 'price',
                    'quantity', 'is_active', 'is_for_deletion')
    search_fields = ('name', 'description')
    list_filter = ('is_active', 'is_for_deletion')


@admin.register(StoreItemImage)
class StoreItemImageAdmin(admin.ModelAdmin):
    list_display = ('store_item', 'image')
    search_fields = ('store_item__name',)


class BasketItemInline(admin.TabularInline):
    model = BasketItem
    extra = 1


class BasketArtworkInline(admin.TabularInline):
    model = BasketArtwork
    extra = 1


@admin.register(Basket)
class BasketAdmin(admin.ModelAdmin):
    list_display = ('id', 'user', 'created_at', 'updated_at')
    search_fields = ('user__username',)
    list_filter = ('created_at', 'updated_at')
    inlines = [BasketItemInline, BasketArtworkInline]


@admin.register(BasketItem)
class BasketItemAdmin(admin.ModelAdmin):
    list_display = ('basket', 'store_item', 'quantity')
    search_fields = ('basket__id', 'store_item__name')


@admin.register(BasketArtwork)
class BasketArtworkAdmin(admin.ModelAdmin):
    list_display = ('basket', 'artwork', 'is_reproduction')
    search_fields = ('basket__id', 'artwork__title')
    list_filter = ('is_reproduction',)
