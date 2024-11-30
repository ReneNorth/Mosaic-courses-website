from django.contrib import admin

from store.models import StoreItem, StoreItemImage, Basket, BasketItem


@admin.register(StoreItem)
class StoreItemAdmin(admin.ModelAdmin):
    list_display = ('name', 'price', 'quantity', 'is_active')
    search_fields = ('name', 'description')
    list_filter = ('is_active', 'is_for_deletion')


@admin.register(StoreItemImage)
class StoreItemImageAdmin(admin.ModelAdmin):
    list_display = ('store_item', 'image')
    search_fields = ('store_item__name',)


@admin.register(Basket)
class BasketAdmin(admin.ModelAdmin):
    list_display = ('user', 'created_at')
    search_fields = ('user__username',)
    list_filter = ('created_at',)


@admin.register(BasketItem)
class BasketItemAdmin(admin.ModelAdmin):
    list_display = ('basket', 'artwork', 'store_item', 'quantity')
    search_fields = ('basket__user__username',
                     'artwork__title', 'store_item__name')
    list_filter = ('basket', 'artwork', 'store_item')
