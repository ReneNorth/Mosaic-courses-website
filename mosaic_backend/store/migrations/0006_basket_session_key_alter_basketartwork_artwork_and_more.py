# Generated by Django 5.0.1 on 2024-12-06 18:50

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("gallery", "0008_remove_artwork_is_replica_available_and_more"),
        ("store", "0005_remove_basketitem_artwork_remove_basket_item_and_more"),
    ]

    operations = [
        migrations.AddField(
            model_name="basket",
            name="session_key",
            field=models.CharField(blank=True, max_length=40, null=True),
        ),
        migrations.AlterField(
            model_name="basketartwork",
            name="artwork",
            field=models.ForeignKey(
                on_delete=django.db.models.deletion.CASCADE,
                related_name="artworks",
                to="gallery.artwork",
            ),
        ),
        migrations.AlterField(
            model_name="basketitem",
            name="basket",
            field=models.ForeignKey(
                on_delete=django.db.models.deletion.CASCADE,
                related_name="items",
                to="store.basket",
            ),
        ),
    ]