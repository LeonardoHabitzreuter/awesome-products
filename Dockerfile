FROM nginx:alpine
LABEL maintainer="Leonardo Habitzreuter <leo.habitzreuter@gmail.com>"
COPY dist /usr/share/nginx/html
COPY default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80