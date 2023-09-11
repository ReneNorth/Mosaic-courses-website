from django.contrib import admin

from school.models import Advatage, Approach, Question, Review, School


@admin.register(School)
class SchoolAdmin(admin.ModelAdmin):
    pass


@admin.register(Approach)
class ApproachAdmin(admin.ModelAdmin):
    pass


@admin.register(Question)
class QuestionAdmin(admin.ModelAdmin):
    pass


@admin.register(Advatage)
class AdvatageAdmin(admin.ModelAdmin):
    pass


@admin.register(Review)
class ReviewAdmin(admin.ModelAdmin):
    pass
