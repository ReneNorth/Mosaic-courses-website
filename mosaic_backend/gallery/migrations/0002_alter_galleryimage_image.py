from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("gallery", "0001_initial"),
    ]

    operations = [
        migrations.AlterField(
            model_name="galleryimage",
            name="image",
            field=models.ImageField(default=None, upload_to="gallery/"),
        ),
    ]
