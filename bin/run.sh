#!/bin/bash

CLEAN_DOCKER() {
  echo "Cleaning Docker containers, images, and volumes"
  export $(grep -v '^#' $ENV_FILE | xargs)
  docker compose -f ./docker-compose.$COMPOSE_PROFILES down
  docker container prune --filter "label=prog=aeshop" --force
  
  docker volume rm shop_frontend_node_modules_volume
  docker volume rm shop_backend_node_modules_volume
  docker volume rm frontend_build_volume
  
  docker system prune --force
  docker buildx prune --force
}

if [[ $1 == "db_update" ]]; then
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
  UPLOADS_PATH = './uploads'
  if [[ $COMPOSE_PROFILES == "prod" ]]; then
    ENV_FILE="/home/0.data/.env.$COMPOSE_PROFILES"
    UPLOADS_PATH = '/home/0.data/uploads'
  fi

  NGINX_CONFIG_FILE="./config/nginx/nginx.$COMPOSE_PROFILES.conf"

  export NGINX_CONFIG_FILE
  export ENV_FILE

  echo "================== Running with: ======================"
  echo "| ACTION: $ACTION"
  echo "| COMPOSE_PROFILES: $COMPOSE_PROFILES"
  echo "| ENV_FILE: $ENV_FILE"
  echo "| NGINX_CONFIG_FILE: $NGINX_CONFIG_FILE"
  echo "| DEMONIZE: $DEMONIZE"
  echo "| RUNNING COMMAND: docker compose -f ./docker-compose.$COMPOSE_PROFILES --env-file $ENV_FILE --profile $COMPOSE_PROFILES up $BUILD $DEMONIZE"

  echo "| Stopping old Docker compose..."
  docker compose -f ./docker-compose.$COMPOSE_PROFILES --env-file $ENV_FILE down

  echo "| Creating Docker network 'ae_shop_network'"
  docker network create ae_shop_network >/dev/null 2>&1
  echo "| Creating Docker volume 'shop_upload_volume'"
  docker volume create --driver local --opt type=none --opt device=/home/0.data/uploads --opt o=bind shop_upload_volume

  if [[ $CLEAN == true ]]; then
    echo "| Cleaning Docker containers, images, and volumes"
    CLEAN_DOCKER
  fi

  if [[ $ACTION == "up" ]]; then
    echo "| Running Docker compose..."
    docker compose -f docker-compose.$COMPOSE_PROFILES --env-file $ENV_FILE --profile $COMPOSE_PROFILES up $BUILD $DEMONIZE
  fi
  echo "======================= Done =========================="
fi
