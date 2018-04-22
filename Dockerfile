FROM node AS build
WORKDIR /app
ADD package.json package.json
ADD package-lock.json package-lock.json
RUN npm install

ADD . .
RUN npm run build

FROM nginx:stable

COPY --from=build /app/build/ /var/www
ADD ./nginx.conf /etc/nginx/conf.d/default.conf

CMD /usr/sbin/nginx -g 'daemon off;'