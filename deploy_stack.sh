#!/usr/bin/env bash


scp ./docker-compose.yaml root@188.246.233.30:/app

ssh root@188.246.233.30 "cd /app && docker stack deploy --compose-file docker-compose.yaml images"
