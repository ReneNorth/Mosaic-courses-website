import requests
import smtplib
import logging
from django.core.mail import EmailMessage
from rest_framework.views import APIView
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.request import Request


log = logging.getLogger(__name__)


DOMAIN_NAME = 'test'
API_KEY = 'test'
MAIL_1 = 'test'
MAIL_2 = 'test'
email_data = {
    'to': f'{MAIL_2}',
    'subject': 'test subject',
    'text': 'testing email'
}


@api_view(['POST'])
def send_test_email(request):
    response = requests.post(
        f"https://api.mailgun.net/v3/{DOMAIN_NAME}/messages",
        auth=("api", API_KEY),
        data={
            "from": f"Excited User <mailgun@{DOMAIN_NAME}>",
            "to": [MAIL_2],
            "subject": email_data['subject'],
            "text": email_data['text']
        }
    )
    log.info(response, response.text)
    return Response({'status_code': response.status_code,
                     'message': response.text})
