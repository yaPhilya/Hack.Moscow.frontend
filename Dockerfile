FROM node AS build
WORKDIR /app
ADD . .
RUN npm install
RUN npm run build

FROM nginx:stable

COPY --from=build /app/build/ /var/www
ADD ./nginx.conf /etc/nginx/conf.d/default.conf

CMD /usr/sbin/nginx -g 'daemon off;'