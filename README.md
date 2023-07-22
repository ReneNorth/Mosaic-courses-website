# Mosaic Courses Website
![Mosaic workflow](https://github.com/ReneNorth/Mosaic-courses-website/actions/workflows/main.yml/badge.svg)

Website for Mosaic Courses that utilizes React and Django. It allows users to view available courses, book them, and access various other features.

### Tech stack

- React
- Django
- Django REST Framework
- PostgreSQL
- Docker
- nginx

### Installation

Clone the repository.
Rename dev.env to .env and change the constants to ones
you need to run the project.
Install Docker and Docker Compose.
Run the following command to build the project's Docker containers:

```console
cd infra/
docker-compose up --build -d
```

A successful containers launch is followed by a similar output

```
[+] Running 5/5
 ⠿ Network infra_default       Created                                                 0.3s
 ⠿ Container infra-frontend-1  Started                                                12.7s
 ⠿ Container infra-db-1        Started                                                12.7s
 ⠿ Container infra-web-1       Started                                                20.4s
 ⠿ Container infra-nginx-1     Started
```

Once the containers are ready, enter the web container's CLI

```console
docker exec -it infra-web-1 bash
```

Run the following command to make migrations:

```console
python manage.py makemigrations
python manage.py migrate
```

Run the following command to create a superuser and follow the prompts:

```console
python manage.py createsuperuser
```

then execute the commands to collect and move statics
```console
python manage.py collectstatic
cp -r /app/collected_static/. /backend_static/static/
```

Access the application at http://localhost:8000 or http://127.0.0.1:8000
Use the credentials of the superuser you created in the previous step to access
http://localhost:8000/admin
(the specific port is subject to change, so the docs might not reflex the current one)

### API docs
The docs are available at http://localhost:8000/api/redoc
