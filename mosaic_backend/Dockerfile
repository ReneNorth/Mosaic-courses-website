FROM python:3.11-slim

WORKDIR /app

COPY requirements.txt .

RUN pip3 install -r ./requirements.txt --no-cache-dir

COPY . .

# RUN python manage.py makemigrations

# RUN python manage.py migrate

CMD ["gunicorn", "mosaic.wsgi:application", "--bind", "0:8000" ] 