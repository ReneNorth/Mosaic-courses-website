# Generated by Django 4.1.6 on 2023-08-12 04:15

from django.db import migrations


class Migration(migrations.Migration):
    dependencies = [
        ("masterclass", "0012_masterclass_teacher"),
    ]

    operations = [
        migrations.AlterModelOptions(
            name="masterclass",
            options={
                "ordering": ["-time_start"],
                "verbose_name": "Masterclass",
                "verbose_name_plural": "Masterclasses",
            },
        ),
        migrations.RenameField(
            model_name="masterclass",
            old_name="time_begin",
            new_name="time_start",
        ),
    ]
