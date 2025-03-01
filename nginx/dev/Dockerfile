FROM nginx:1.25.3-alpine
COPY nginx/dev/dev.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
