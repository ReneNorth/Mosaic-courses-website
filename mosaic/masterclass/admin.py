from django.contrib import admin
from masterclass.models import MasterclassType, Masterclass


@admin.register(MasterclassType)
# @admin.register(MasterclassType, Masterclass)
class Admin(admin.ModelAdmin):
    pass
