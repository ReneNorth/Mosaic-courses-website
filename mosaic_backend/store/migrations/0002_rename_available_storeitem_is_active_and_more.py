# Generated by Django 5.0.1 on 2024-11-16 17:31

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("gallery", "0006_legacyartwork_artworkmainpage"),
        ("store", "0001_initial"),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.RenameField(
            model_name="storeitem",
            old_name="available",
            new_name="is_active",
        ),
        migrations.AddField(
            model_name="storeitem",
            name="is_for_deletion",
            field=models.BooleanField(default=False),
        ),
        migrations.CreateModel(
            name="Basket",
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
                ("created_at", models.DateTimeField(auto_now_add=True)),
                ("updated_at", models.DateTimeField(auto_now=True)),
                (
                    "user",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        to=settings.AUTH_USER_MODEL,
                    ),
                ),
            ],
        ),
        migrations.CreateModel(
            name="BasketItem",
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
                ("quantity", models.PositiveIntegerField(default=1)),
                (
                    "artwork",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        to="gallery.artwork",
                    ),
                ),
                (
                    "basket",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="items",
                        to="store.basket",
                    ),
                ),
                (
                    "store_item",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        to="store.storeitem",
                    ),
                ),
            ],
        ),
        migrations.CreateModel(
            name="StoreItemImage",
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
                ("image", models.ImageField(default=None, upload_to="store_content/")),
                (
                    "store_item",
                    models.ForeignKey(
                        blank=True,
                        null=True,
                        on_delete=django.db.models.deletion.SET_NULL,
                        related_name="images",
                        to="store.storeitem",
                    ),
                ),
            ],
            options={
                "verbose_name": "Store Item Image",
                "verbose_name_plural": "Store Item Images",
            },
        ),
    ]