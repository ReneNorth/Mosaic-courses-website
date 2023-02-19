FROM python:3.11-slim

WORKDIR /app

COPY requirements.txt .

# COPY ../mosaic/requirements.txt .

# RUN ls

RUN pip3 install -r ./requirements.txt --no-cache-dir
# RUN pip3 install -r requirements.txt --no-cache-dir

COPY . .

CMD ["gunicorn", "mosaic.wsgi:application", "--bind", "0:8000" ] 