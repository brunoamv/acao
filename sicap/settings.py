"""
Django settings for sicap project.

Generated by 'django-admin startproject' using Django 1.9.1.

For more information on this file, see
https://docs.djangoproject.com/en/1.9/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/1.9/ref/settings/
"""

import os

PROJECT_ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/1.9/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = '(dyjp&2%i1w1*1=16c$$!zoz4zyxwdmd7)bx2)jfo-yaros7)q'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = ['sicap.herokuapp.com']


# Application definition

INSTALLED_APPS = [
    'acao.apps.AcaoConfig',
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
]

MIDDLEWARE_CLASSES = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.auth.middleware.SessionAuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'acao.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'sicap.wsgi.application'

ENVIRONMENT='online'

if ENVIRONMENT=='online':
 # SECURITY WARNING: don't run with debug turned on in production!
 STATIC_ROOT = os.path.join(PROJECT_ROOT, 'staticfiles')    
 DEBUG = True
 #STATIC_URL = "https://%s/" % AWS_S3_CUSTOM_DOMAIN
 DB_HOST='acao2.crgzdupd4jsy.us-west-2.rds.amazonaws.com'
 DB_USER='admin'
 DB_PASSWORD='rosinha06'

elif ENVIRONMENT=='offline':
 STATIC_ROOT = os.path.join(PROJECT_ROOT, 'static')  
 DEBUG = True
 STATIC_URL = '/static/'
 DB_HOST='127.0.0.1'
 DB_USER='root'
 DB_PASSWORD='Timtones09'

# Database
# https://docs.djangoproject.com/en/1.9/ref/settings/#databases

DATABASES = {    
  'default' : {
      'ENGINE': 'django.db.backends.mysql', 
      'NAME': 'sicap',
      'USER': DB_USER,
      'PASSWORD': DB_PASSWORD,
      'HOST': DB_HOST,   # Or an IP Address that your DB is hosted on
      'PORT': '3306',
      'OPTIONS': {
         'init_command': 'SET sql_mode=""'
      },
  }
}


# Password validation
# https://docs.djangoproject.com/en/1.9/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/1.9/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_L10N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/1.9/howto/static-files/

STATIC_URL = '/static/'
STATIC_ROOT = 'static'
STATIC_PATH = '/static'