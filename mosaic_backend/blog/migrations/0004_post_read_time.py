# Generated by Django 4.1.6 on 2023-06-22 05:25

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0003_alter_post_image_alter_post_text'),
    ]

    operations = [
        migrations.AddField(
            model_name='post',
            name='read_time',
            field=models.SmallIntegerField(blank=True, default=1, validators=[django.core.validators.MinValueValidator(1)]),
            preserve_default=False,
        ),
    ]
