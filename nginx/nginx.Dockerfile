FROM nginx:1.21.4

COPY nginx.conf /etc/nginx/nginx.conf

CMD nginx -g 'daemon off;'