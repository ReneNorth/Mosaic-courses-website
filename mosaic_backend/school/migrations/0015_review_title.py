# Generated by Django 4.1.6 on 2023-09-09 11:22

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("school", "0014_alter_review_review"),
    ]

    operations = [
        migrations.AddField(
            model_name="review",
            name="title",
            field=models.TextField(default=2, max_length=100),
            preserve_default=False,
        ),
    ]
