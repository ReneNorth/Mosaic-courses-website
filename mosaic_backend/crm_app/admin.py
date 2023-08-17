from django.contrib import admin

from .models import EmailMainForm, FeedbackRequest, GiftCert


@admin.register(FeedbackRequest)
class FeedbackRequestAdmin(admin.ModelAdmin):
    pass


@admin.register(EmailMainForm)
class EmailMainFormAdmin(admin.ModelAdmin):
    pass


@admin.register(GiftCert)
class GiftCertAdmin(admin.ModelAdmin):
    pass
