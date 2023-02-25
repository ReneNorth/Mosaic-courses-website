from django.contrib import admin
from school.models import School, Questions, Advatage, Review


@admin.register(School, Questions, Advatage, Review)
class Admin(admin.ModelAdmin):
    pass
