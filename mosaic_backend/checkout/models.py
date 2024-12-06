from django.db import models
from django.contrib.auth import get_user_model

from gallery.models import Artwork
from store.models import StoreItem, Basket

User = get_user_model()


class Order(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    is_paid = models.BooleanField(default=False)
    basket = models.ForeignKey(Basket, related_name='basket',
                               on_delete=models.CASCADE)
    item = models.ManyToManyField(StoreItem, through='OrderItem')
    artwork = models.ManyToManyField(Artwork, through='OrderArtwork')
    delivery_type = ...
    delivery_adress = ...
    total_price = ...
    discount = ...  # I will need the update for it
    lifetime = ...

    def __str__(self):
        return f'Order {self.id} by {self.user.username}'

    # def


class OrderItem(models.Model):
    order = models.ForeignKey(
        Order, on_delete=models.CASCADE)
    store_item = models.ForeignKey(StoreItem,
                                   related_name='items',
                                   on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField(default=1)

    def __str__(self):
        return f'{self.quantity}'


class OrderArtwork(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE)
    artwork = models.ForeignKey(Artwork, related_name='order_artworks',
                                on_delete=models.CASCADE)
    is_reproduction = models.BooleanField()


class Payment(models.Model):
    order = models.OneToOneField(Order, on_delete=models.CASCADE)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    payment_method = models.CharField(max_length=50)
    payment_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'Payment for Order {self.order.id}'


class Receipt(models.Model):
    order = models.OneToOneField(Order, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    is_sent = models.BooleanField(default=False)

    def __str__(self):
        return f'Receipt for Order {self.order.id}'
