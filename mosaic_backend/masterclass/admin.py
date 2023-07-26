from django.contrib import admin

from masterclass.models import Masterclass, MasterclassType


@admin.register(MasterclassType)
class MasterclassTypeAdmin(admin.ModelAdmin):
    pass


@admin.register(Masterclass)
class MasterclassAdmin(admin.ModelAdmin):
    pass
