#!/bin/bash

uv run manage.py collectstatic --no-input
uv run manage.py makemigrations
uv run manage.py migrate --no-input
uv run django-admin compilemessages

uv run gunicorn core.wsgi:application -b 0.0.0.0:5000
