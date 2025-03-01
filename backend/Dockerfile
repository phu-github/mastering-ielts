# Pull official base image
FROM python:3.10

RUN apt-get update \
    && apt-get install -y gcc python3-dev musl-dev libmagic1 libffi-dev netcat-traditional \
    build-essential libpq-dev gettext postgresql-client postgresql-client-common

COPY --from=ghcr.io/astral-sh/uv:latest /uv /uvx /bin/

# Set working directory
WORKDIR /app

# Copy the project into the image
COPY . /app
COPY scripts/start*.sh /

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

RUN uv sync --frozen; chmod +x /start*.sh
