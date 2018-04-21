#!/usr/bin/env bash

set -e

npm run build

ARCHIVE=frontend.tar.gz

tar cvzf ${ARCHIVE} build

# kek, CI/CD (:
scp -r ${ARCHIVE} root@188.246.233.30:/app
ssh root@188.246.233.30 "cd /app && rm -r frontend && tar xvzf ${ARCHIVE} && mv build frontend && rm ${ARCHIVE}"

# nginx
scp ./nginx/frontend.nginx root@188.246.233.30:/etc/nginx/sites-enabled