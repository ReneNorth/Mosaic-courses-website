# Generated by Django 4.1.6 on 2023-06-22 05:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0004_post_read_time'),
    ]

    operations = [
        migrations.AddField(
            model_name='post',
            name='preview_text',
            field=models.TextField(default=1, max_length=400),
            preserve_default=False,
        ),
    ]