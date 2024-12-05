from django.contrib import admin
from .models import Order, OrderItem, OrderArtwork, Payment, Receipt


class OrderItemInline(admin.TabularInline):
    model = OrderItem
    extra = 1


class OrderArtworkInline(admin.TabularInline):
    model = OrderArtwork
    extra = 1


@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    list_display = ('id', 'user', 'created_at', 'updated_at', 'is_paid')
    search_fields = ('user__username',)
    list_filter = ('is_paid', 'created_at')
    inlines = [OrderItemInline, OrderArtworkInline]


@admin.register(OrderItem)
class OrderItemAdmin(admin.ModelAdmin):
    list_display = ('order', 'store_item', 'quantity')
    search_fields = ('order__id', 'store_item__name')


@admin.register(OrderArtwork)
class OrderArtworkAdmin(admin.ModelAdmin):
    list_display = ('order', 'artwork')
    search_fields = ('order__id', 'artwork__title')


@admin.register(Payment)
class PaymentAdmin(admin.ModelAdmin):
    list_display = ('order', 'amount', 'payment_method', 'payment_date')
    search_fields = ('order__id', 'payment_method')
    list_filter = ('payment_method', 'payment_date')


@admin.register(Receipt)
class ReceiptAdmin(admin.ModelAdmin):
    list_display = ('order', 'created_at', 'updated_at', 'is_sent')
    search_fields = ('order__id',)
    list_filter = ('is_sent', 'created_at')

# Alternatively, you can use the simpler approach:
# admin.site.register(Order)
# admin.site.register(OrderItem)
# admin.site.register(OrderArtwork)
# admin.site.register(Payment)
# admin.site.register(Receipt)
