FROM python:3.11-slim

WORKDIR /app

COPY requirements.txt .
RUN pip3 install -r ./requirements.txt --no-cache-dir
COPY . .
CMD ["gunicorn", "mosaic.wsgi:application", "--bind", "0:8000" ]

# ;["python", "/app/collected_static/.", "collectstatic" ];["python", "manage.py", "makemigrations" ];["python", "manage.py", "migrate"];["-r", "/app/collected_static/.", "/backend_static/static/"]
# COPY docker-entrypoint.sh /docker-entrypoint.sh
# RUN chmod a+x /docker-entrypoint.sh
# ENTRYPOINT ["/docker-entrypoint.sh"]
