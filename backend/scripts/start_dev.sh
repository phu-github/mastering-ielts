#!/bin/bash

uv run manage.py collectstatic --no-input
uv run manage.py makemigrations
uv run manage.py migrate

uv run manage.py runserver 0.0.0.0:5000
