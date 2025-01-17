# Generated by Django 5.0.1 on 2024-02-16 05:03

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("masterclass", "0017_category_masterclasstypecategory_and_more"),
    ]

    operations = [
        migrations.AlterField(
            model_name="masterclasstypecategory",
            name="category",
            field=models.ForeignKey(
                on_delete=django.db.models.deletion.CASCADE,
                related_name="categories",
                to="masterclass.category",
            ),
        ),
        migrations.AlterField(
            model_name="masterclasstypecategory",
            name="masterclass_type",
            field=models.ForeignKey(
                on_delete=django.db.models.deletion.CASCADE,
                related_name="masterclass_type_categories",
                to="masterclass.masterclasstype",
            ),
        ),
    ]
