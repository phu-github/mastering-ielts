# build stage
FROM node:20.10.0 as build-stage
WORKDIR /app/
COPY frontend/package.json /app/
COPY frontend/pnpm-lock.yaml /app/
RUN npm install -g pnpm
RUN pnpm install
COPY frontend /app/
RUN pnpm generate


# production stage
FROM nginx:1.25.3-alpine as production-stage
COPY nginx/prod/prod.conf /etc/nginx/nginx.conf
COPY --from=build-stage /app/.output /dist/
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
