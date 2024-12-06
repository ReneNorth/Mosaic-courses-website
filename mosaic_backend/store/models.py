from django.db import models
from django.contrib.auth import get_user_model

from gallery.models import Artwork

User = get_user_model()


class StoreItem(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    quantity = models.PositiveIntegerField(default=1)
    is_active = models.BooleanField(default=True)
    is_for_deletion = models.BooleanField(default=False)

    def __str__(self):
        return self.name

    class Meta:
        constraints = [
            models.CheckConstraint(
                check=models.Q(price__gte=0),
                name='price_non_negative'
            ),
            models.CheckConstraint(
                check=models.Q(quantity__gte=0),
                name='quantity_non_negative'
            )
        ]

    def increase_quantity(self, amount: int):
        self.quantity += amount
        self.save()

    def decrease_quantity(self, amount: int):
        if self.quantity >= amount:
            self.quantity -= amount
            self.save()
        else:
            raise ValueError('No more items in stock')


class StoreItemImage(models.Model):
    store_item = models.ForeignKey(StoreItem,
                                   related_name='images',
                                   on_delete=models.DO_NOTHING)
    image = models.ImageField(
        upload_to='store_content/', default=None)

    class Meta:
        verbose_name = "Store Item Image"
        verbose_name_plural = "Store Item Images"

    def __str__(self) -> str:
        return f'Image for {self.store_item.name}'


class Basket(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    session_key = models.CharField(max_length=40, null=True, blank=True)
    item = models.ManyToManyField(StoreItem, through='BasketItem')
    artwork = models.ManyToManyField(Artwork, through='BasketArtwork')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f'Basket {self.id} by {self.user.username} if self.user else "Anonymous"'


class BasketItem(models.Model):
    basket = models.ForeignKey(
        Basket, related_name='items', on_delete=models.CASCADE)
    store_item = models.ForeignKey(StoreItem, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField(default=1)

    def __str__(self):
        return f'{self.quantity}'


class BasketArtwork(models.Model):
    basket = models.ForeignKey(Basket, on_delete=models.CASCADE)
    artwork = models.ForeignKey(Artwork, related_name='artworks',
                                on_delete=models.CASCADE)
    is_reproduction = models.BooleanField()
