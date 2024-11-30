from django.db import models


class StoreItem(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    # images
    quantity = models.PositiveIntegerField(default=1)
    available = models.BooleanField(default=True)

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
