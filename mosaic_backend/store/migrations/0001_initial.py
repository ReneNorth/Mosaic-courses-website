# Generated by Django 5.0.1 on 2024-11-16 16:13

from django.db import migrations, models


class Migration(migrations.Migration):
    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="StoreItem",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("name", models.CharField(max_length=100)),
                ("description", models.TextField()),
                ("price", models.DecimalField(decimal_places=2, max_digits=10)),
                ("quantity", models.PositiveIntegerField(default=1)),
                ("available", models.BooleanField(default=True)),
            ],
        ),
        migrations.AddConstraint(
            model_name="storeitem",
            constraint=models.CheckConstraint(
                check=models.Q(("price__gte", 0)), name="price_non_negative"
            ),
        ),
        migrations.AddConstraint(
            model_name="storeitem",
            constraint=models.CheckConstraint(
                check=models.Q(("quantity__gte", 0)), name="quantity_non_negative"
            ),
        ),
    ]