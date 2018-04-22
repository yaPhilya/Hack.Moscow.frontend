#!/usr/bin/env bash

set -e

docker build -t strangeducttape/bluecat_frontend .
docker push strangeducttape/bluecat_frontend
