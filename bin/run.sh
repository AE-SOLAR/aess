#!/bin/bash

CLEAN_DOCKER() {
  echo "Cleaning Docker containers, images, and volumes"
  docker compose down
  docker container prune --filter "label=prog=aeshop" --force
  docker image prune --all --force
  docker volume prune --all --filter "label=prog=aeshop" --force
}

if [[ $1 == "clean" || $1 == "clear" ]]; then
  CLEAN_DOCKER
else
  HOMEDIR=$(basename "$PWD")
  if [[ $HOMEDIR == "bin" ]]; then
    cd ..
  elif [[ $HOMEDIR != "shop" ]]; then
    cd ../..
  fi

  DEMONIZE=""
  ACTION="up"
  CLEAN=false
  COMPOSE_PROFILES="dev"
  while [[ $# -gt 0 ]]; do
    case $1 in
    down)
      ACTION="down"
      shift
      ;;
    -h | --help)
      echo "Usage: run.sh [OPTIONS]"
      echo "Options:"
      echo "  -h, --help          Show this help message and exit"
      echo "  -d, --demonize      Run Docker in the background"
      echo "  -c, --clean         Clean Docker containers, images, and volumes before running"
      echo "  -p, --production    Run Docker in production mode"
      echo "  -t, --development   Run Docker in development mode"
      exit 0
      ;;
    -d | --demonize)
      DEMONIZE="-d"
      shift
      ;;
    -c | --clean)
      CLEAN=true
      shift
      ;;
    -p | --production | --prod)
      COMPOSE_PROFILES="prod"
      shift
      ;;
    -t | --development | --dev)
      COMPOSE_PROFILES="dev"
      shift
      ;;
    *)
      break
      shift
      ;;
    esac
  done

  ENV_FILE="./config/.env.$COMPOSE_PROFILES"
  NGINX_CONFIG_FILE="./config/nginx/nginx.$COMPOSE_PROFILES.conf"
  DOCKERFILE="./config/docker/Dockerfile.$COMPOSE_PROFILES"

  export NGINX_CONFIG_FILE
  export DOCKERFILE
  export ENV_FILE

  docker compose --env-file $ENV_FILE down

  docker network create ae_shop_network >/dev/null 2>&1

  if [[ $CLEAN == true ]]; then
    CLEAN_DOCKER
  fi

  if [[ $ACTION == "up" ]]; then
    echo "$ACTION Docker for $COMPOSE_PROFILES with ENV file $ENV_FILE"
    docker compose --env-file $ENV_FILE --profile $COMPOSE_PROFILES up $DEMONIZE
  fi
fi
