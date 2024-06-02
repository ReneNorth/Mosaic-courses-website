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

## Installation

### What to do before proceeding with the installation 
First, you'll need to install Docker and Docker Compose, if they are not already
installed on the system where the containers will run.
Then clone this repository.

Rename dev.env to .env and change the constants to the ones
you need to run the project. If you work on the project with me, you should ask me for the creds.

### How to build the project

There are two ways to build the project:

Option 1. Build the containers from the source code and public images locally | docker-compose.yml
Option 2. Pull the already built containers from dockerhub | docker-compose.production

You may choose whatever approach suits best for you.
The main difference is that the second option will work much faster on Windows.

All commands must be executed from /infra directory in the main folder, so do not forget to go to the infra 
```console
cd infra
```

#### Option 1. Build the project from the local codebase: 
```console
docker-compose up --build -d
```

#### Option 2. Build the project from the local codebase:

```console
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
Currently, migrations and collection of new staics are not parts of the ci/cd, 
so you will have to do the following: 


"Enter" into the running container with the Django application using the following command:

``` console
docker exec -it <name of the container with the Django web backend, <web> will be in the name of the container> bash
```

Example:
``` console
docker exec -it infra-web-1 bash
```
[Docs on docker exec]([url](https://docs.docker.com/reference/cli/docker/container/exec/))

 
Once you entered the container, execute the commands:
```
python manage.py makemigrations
python manage.py migrate
python manage.py collectstatic
cp -r /app/collected_static/. /backend_static/static/
```

If you didn't previously create a superuser or you deleted the project volumes, run the following command and follow the prompts to create a superuser:

```console
docker exec -it infra-web-1 bash
python manage.py createsuperuser
```


Access the application at http://localhost:8000 or http://127.0.0.1:8000
Use the credentials of the superuser you created in the previous step to access
http://localhost:8000/admin
(the specific port is subject to change, so the docs might not reflex the current one)

### API docs

The docs are available at http://localhost:8000/api/docs/redoc/ and http://localhost:8000/api/docs/swagger/
They are the same, choose the one you prefer 
