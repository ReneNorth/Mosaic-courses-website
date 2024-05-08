from .settings import *

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
