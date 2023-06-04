from django.contrib import admin
from .models import FeedbackRequest, EmailMainForm, GiftCert


@admin.register(FeedbackRequest, EmailMainForm, GiftCert)
class Admin(admin.ModelAdmin):
    pass
