# Generated by Django 4.1.6 on 2023-06-25 06:56

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('marketplace', '0006_remove_artworkmainpage_is_on_main'),
    ]

    operations = [
        migrations.AlterField(
            model_name='artworkmainpage',
            name='artwork',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='artworks_on_main', to='marketplace.artwork'),
        ),
    ]
