from django.core.validators import MinValueValidator
from django.db import models

from mosaic.business_logic import BusinessLogic


class FeedbackRequest(models.Model):
    """Class for customer requests for feedback in the 'contact me' forms."""

    name = models.CharField(max_length=50)
    date = models.DateTimeField(auto_now_add=True)
    phone_num = models.CharField(max_length=25)
    comment = models.TextField(max_length=150, blank=True)
    contact_consent = models.BooleanField(default=False)
    date_created = models.DateField(auto_now_add=True)

    def __str__(self) -> str:
        """Returns contact + "оставил сообщение" as class str repr."""
        return f'{self.phone_num} оставил обращение'


class EmailMainForm(models.Model):
    """Class for main email for the site."""

    email = models.EmailField(max_length=254)

    def __str__(self) -> str:
        """Returns email as class str repr."""
        return self.email


class GiftCert(models.Model):
    """Class for gift certificates.
    Sertificate has a status model, it can be issued or redeemed."""

    ISSUED = 'ISSUED'
    REDEEMED = 'REDEEMED'
    EXPIRED = 'EXPIRED'
    STATUS_MODEL = [
        (ISSUED, 'Issued'),
        (REDEEMED, 'Redeemed'),
        (EXPIRED, 'Expired'),
    ]
    id = models.CharField(primary_key=True,
                          blank=False,
                          max_length=6)
    amount = models.PositiveSmallIntegerField(
        validators=[MinValueValidator(BusinessLogic.MIN_CERT_TG,
                                      f'Минимальная стоимость сертификата'
                                      f'{BusinessLogic.MIN_CERT_TG} тенге')])
    name_sender = models.CharField(max_length=50)
    email_sender = models.EmailField(max_length=50)
    name_recepient = models.CharField(max_length=50)
    email_recipient = models.EmailField(max_length=50)
    status = models.CharField(max_length=10,
                              choices=STATUS_MODEL,
                              default=ISSUED)
    date_issued = models.DateField(auto_now_add=True)

    def __str__(self) -> str:
        """Returns gift cert as class str repr."""
        return f'certificate №{self.id}'
