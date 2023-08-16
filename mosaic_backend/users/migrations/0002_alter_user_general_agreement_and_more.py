# Generated by Django 4.1.6 on 2023-07-26 05:11

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("users", "0001_initial"),
    ]

    operations = [
        migrations.AlterField(
            model_name="user",
            name="general_agreement",
            field=models.BooleanField(default=True, null=True),
        ),
        migrations.AlterField(
            model_name="user",
            name="markcomm_agreement",
            field=models.BooleanField(blank=True, default=False, null=True),
        ),
        migrations.AlterField(
            model_name="user",
            name="tg_nickname",
            field=models.CharField(blank=True, max_length=32),
        ),
    ]