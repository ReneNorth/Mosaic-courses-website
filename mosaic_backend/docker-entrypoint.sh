#!/bin/sh -x

python manage.py collectstatic --noinput || exit 1
python manage.py makemigrations --noinput || exit 1
python manage.py migrate --noinput || exit 1
cp -r /app/collected_static/. /backend_static/static/
exec "$@"

