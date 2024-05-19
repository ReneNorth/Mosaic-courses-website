from .settings import *
import os

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'mosaic',
        'USER': 'mosaic_admin',
        'PASSWORD': 'mosaic_admin',
        'HOST': 'localhost',
        'PORT': '5432',
    }
}

EMAIL_BACKEND = 'django.core.mail.backends.filebased.EmailBackend'
SITE_NAME = 'Tessera Mosaic'
EMAIL_FILE_PATH = os.path.join(BASE_DIR, 'sent_emails')  # directory for emails
