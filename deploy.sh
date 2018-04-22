#!/usr/bin/env bash

set -e

docker build -t strangeducttape/bluecat_frontend .
docker push strangeducttape/bluecat_frontend

scp ./docker-compose.yaml root@188.246.233.30:/app/frontend

ssh root@188.246.233.30 "cd /app/backend && docker stack deploy --compose-file docker-compose.yaml frontend"
