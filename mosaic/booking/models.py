from django.db import models
from django.contrib.auth import get_user_model
from masterclass.models import Masterclass, MasterclassType


User = get_user_model()


class Booking(models.Model):
    guest = models.ForeignKey(User,
                              on_delete=models.CASCADE,
                              related_name='guests')
    attending = models.ForeignKey(Masterclass,
                                  on_delete=models.CASCADE,
                                  related_name='attending')
    
    
    def __str__(self) -> str:
        return f'{self.guest} attends {self.attending}'
