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
    list_display = ('id', 'date_issued', 'status', 'email_sender', 'amount')
    search_fields = ('id',)
    list_filter = ('status', )
    ordering = ('-date_issued',)
