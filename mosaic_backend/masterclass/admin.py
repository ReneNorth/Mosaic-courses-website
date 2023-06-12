from django.contrib import admin

from masterclass.models import Masterclass, MasterclassType


# @admin.register(MasterclassType)
@admin.register(MasterclassType, Masterclass)
class Admin(admin.ModelAdmin):
    pass
