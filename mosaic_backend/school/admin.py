from django.contrib import admin
from school.models import Advatage, Approach, Question, Review, School


@admin.register(School, Approach, Question, Advatage, Review)
class Admin(admin.ModelAdmin):
    pass
