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

First, you'll need to install Docker and Docker Compose, if thay are not already
installed on the system where the containers will run.

Then clone the repository.
Rename dev.env to .env and change the constants to the ones
you need to run the project.

There are two ways to build the project:

1. Option 1. Build the containers from the source code and public images locally | docker-compose.yml
2. Option 2. Pull the already built containers (except for the gateway, it's still build from a public image) from dockerhub | docker-compose.production

You may choose whatever approach suites best for you.
The main difference is that the second option will work much faster on Windows.

Option 1.
All commands must be executed from /infra directory

```console
cd infra/
docker-compose up --build -d
```

Option 2.
All commands must be executed from /infra directory

```console
cd infra/
docker-compose up -r docker-compose.production.yml -d --build
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

If you didn't previously create superuser or you deleted the volumes,  
once the containers are ready, enter the web container's CLI.
Then run the following command and follow the prompts to create a superuser:

```console
docker exec -it infra-web-1 bash
python manage.py createsuperuser
```

then execute the commands to collect and move statics

Access the application at http://localhost:8000 or http://127.0.0.1:8000
Use the credentials of the superuser you created in the previous step to access
http://localhost:8000/admin
(the specific port is subject to change, so the docs might not reflex the current one)

### API docs

The docs are available at http://localhost:8000/api/docs/redoc/
The docs are available at http://localhost:8000/api/docs/swagger/
