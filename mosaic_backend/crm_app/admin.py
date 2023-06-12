from django.contrib import admin

from .models import EmailMainForm, FeedbackRequest, GiftCert


@admin.register(FeedbackRequest, EmailMainForm, GiftCert)
class Admin(admin.ModelAdmin):
    pass
