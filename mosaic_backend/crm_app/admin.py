from django.contrib import admin
from .models import FeedbackRequest, EmailMainForm


@admin.register(FeedbackRequest, EmailMainForm)
class Admin(admin.ModelAdmin):
    pass
