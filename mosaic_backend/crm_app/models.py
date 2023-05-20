from django.db import models
from phonenumber_field.modelfields import PhoneNumberField


class FeedbackRequest(models.Model):
    """Class for customer requests for feedback in the 'contact me' forms."""

    name = models.CharField(max_length=50)
    date = models.DateTimeField(auto_now_add=True)
    phone_num = models.CharField(max_length=25)
    comment = models.TextField(max_length=150, blank=True)
    contact_consent = models.BooleanField(default=False)

    def __str__(self) -> str:
        """Returns contact + "оставил сообщение" as class str repr."""
        return f'{self.phone_num} оставил обращение'


class EmailMainForm(models.Model):
    """Class for main email for the site."""

    email = models.EmailField(max_length=254)

    def __str__(self) -> str:
        """Returns email as class str repr."""
        return self.email