

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("masterclass", "0014_remove_masterclasstype_type_masterclasstype_title"),
    ]

    operations = [
        migrations.AlterField(
            model_name="masterclasstype",
            name="image",
            field=models.ImageField(upload_to="masterclasses/"),
        ),
    ]
