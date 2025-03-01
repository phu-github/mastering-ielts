FROM node:20.10.0

RUN apt-get update \
    && apt-get install -y vim

WORKDIR /app
COPY . /app/

COPY start_dev.sh /
RUN chmod +x /start_dev.sh

EXPOSE 3000

CMD ["sh", "start_dev.sh"]
