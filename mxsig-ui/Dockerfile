FROM php:8.0-apache

RUN apt-get update && apt-get install -y libpq-dev \
    && docker-php-ext-configure pgsql -with-pgsql=/usr/local/pgsql \
    && docker-php-ext-install pdo pdo_pgsql pgsql

#RUN apk update && apk upgrade
#RUN apk -q add curl vim libcap

#RUN apk --update add git less openssh && \
#    rm -rf /var/lib/apt/lists/* && \
#    rm /var/cache/apk/*

COPY sig /var/www/html/sig
COPY siginegi /var/www/html/siginegi

RUN chown -hR www-data:www-data /var/www/

#setcap to bind to privileged ports as non-root
#RUN setcap 'cap_net_bind_service=+ep' /usr/local/apache2/bin/httpd
#RUN getcap /usr/local/apache2/bin/httpd

HEALTHCHECK --interval=60s --timeout=30s CMD nc -zv localhost 80 || exit 1
#Run as a www-data
USER www-data

EXPOSE 80