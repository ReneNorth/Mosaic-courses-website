
from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("blog", "0013_alter_post_image"),
    ]

    operations = [
        migrations.AlterField(
            model_name="post",
            name="slug",
            field=models.CharField(
                help_text="defines an address where users can acess this post, for instance, ifthe slug is <mosaic>, the post will beaccesible at blog/mosaic",
                max_length=90,
                unique=True,
            ),
        ),
        migrations.AlterField(
            model_name="post",
            name="title",
            field=models.CharField(help_text="Post`s title", max_length=100),
        ),
    ]
