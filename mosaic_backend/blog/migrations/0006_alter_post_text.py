# Generated by Django 4.1.6 on 2023-06-24 06:00

import mdeditor.fields
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0005_post_preview_text'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='text',
            field=mdeditor.fields.MDTextField(),
        ),
    ]
