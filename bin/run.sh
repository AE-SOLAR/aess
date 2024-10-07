#!/bin/bash

CLEAN_DOCKER() {
  echo "Cleaning Docker containers, images, and volumes"
  export ENV_FILE="./config/.env.dev"
  export $(grep -v '^#' $ENV_FILE | xargs)
  docker compose down
  docker container prune --filter "label=prog=aeshop" --force
  
  docker volume rm shop_frontend_node_modules_volume
  docker volume rm shop_backend_node_modules_volume
  docker volume rm frontend_build_volume
  
  docker system prune --force
  docker buildx prune --force
}

if [[ $1 == "clean" || $1 == "clear" ]]; then
  CLEAN_DOCKER
elif [[ $1 == "db_update" ]]; then
  docker exec -it ae_shop_api alembic revision --autogenerate -m "Update migration"
  docker exec -it ae_shop_api alembic upgrade head
  docker exec -it ae_shop_api python3 push_db_data.py 
else
  HOMEDIR=$(basename "$PWD")
  if [[ $HOMEDIR == "bin" ]]; then
    cd ..
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
      echo "  -b, --build         Build Docker images before running"
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
    -b | --build)
      BUILD="--build"
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
    docker compose --env-file $ENV_FILE --profile $COMPOSE_PROFILES up $BUILD $DEMONIZE
  fi
fi
