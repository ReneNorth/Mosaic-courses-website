from django.contrib import admin
from school.models import School, Approach, Question, Advatage, Review


@admin.register(School, Approach, Question, Advatage, Review)
class Admin(admin.ModelAdmin):
    pass
