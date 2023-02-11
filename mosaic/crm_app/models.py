from django.db import models
from phonenumber_field.modelfields import PhoneNumberField


#TODO add the models to the installed apps in settings
class Inquiry(models.Model):
    """Class for storing customer inquires in the 'contact me' forms."""

    name = models.CharField(max_length=50, blank=True)
    date = models.DateTimeField(auto_now_add=True)
    contact = PhoneNumberField()
    comment = models.TextField(max_length=500, blank=False)

    def __str__(self) -> str:
        return f'{self.contact} оставил обращение'
