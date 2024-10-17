#!/bin/bash

CLEAN_DOCKER() {
  echo "Cleaning Docker containers, images, and volumes"
  docker compose -f ./docker-compose.yaml down
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
  RUNDIR="$(pwd)"
  HOMEDIR=$(basename "$PWD")
  if [[ $HOMEDIR == "bin" ]]; then
    cd ..
  fi
  RUNDIR="$(pwd)"

  DEMONIZE=""
  ACTION="up"
  CLEAN=false
  COMPOSE_PROFILES="debug"
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
      COMPOSE_PROFILES="production"
      shift
      ;;
    -t | --development | --dev)
      COMPOSE_PROFILES="debug"
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

  if ($COMPOSE_PROFILES == "production"); then
    echo "================== Running in production mode ======================"
    CONFIG_PATH="/home/0.data"
  else
    echo "================== Running in development mode ======================"
    CONFIG_PATH=$RUNDIR"/config"
  fi
  export CONFIG_PATH

  NGINX_CONFIG_FILE="$CONFIG_PATH/nginx/nginx.$COMPOSE_PROFILES.conf"
  # export NGINX_CONFIG_FILE

  ENV_FILE="$CONFIG_PATH/.env.$COMPOSE_PROFILES"
  export ENV_FILE

  UPLOADS_PATH="$CONFIG_PATH/uploads"
  export UPLOADS_PATH

  echo "| RUNDIR: $RUNDIR"
  echo "| ACTION: $ACTION"
  echo "| COMPOSE_PROFILES: $COMPOSE_PROFILES"
  echo "| ENV_FILE: $ENV_FILE"
  echo "| NGINX_CONFIG_FILE: $NGINX_CONFIG_FILE"
  echo "| UPLOAD_PATH: $UPLOADS_PATH"
  echo "| DEMONIZE: $DEMONIZE"
  echo "| RUNNING COMMAND: docker compose -f ./docker-compose.yaml --env-file '$ENV_FILE' --profile $COMPOSE_PROFILES up $BUILD $DEMONIZE"

  echo "| Stopping old Docker compose..."
  docker compose -f ./docker-compose.yaml --env-file "$ENV_FILE" --profile $COMPOSE_PROFILES down
  docker volume rm shop_upload_volume

  echo "| Creating Docker network 'ae_shop_network'"
  docker network create ae_shop_network >/dev/null 2>&1
  echo "| Creating Docker volume 'shop_upload_volume'"
  docker volume create --driver local --opt type=none --opt device="$UPLOADS_PATH" --opt o=bind shop_upload_volume

  if [[ $CLEAN == true ]]; then
    echo "| Cleaning Docker containers, images, and volumes"
    CLEAN_DOCKER
  fi

  if [[ $ACTION == "up" ]]; then
    echo "| Running Docker compose..."
    docker compose -f docker-compose.yaml --env-file "$ENV_FILE" --profile $COMPOSE_PROFILES up $BUILD $DEMONIZE
    if [[ $DEMONIZE == "-d" ]]; then
      echo "| Cleaning unsued Docker images and containers"
      docker system pruce -a --force
    fi
  fi
  echo "======================= Done =========================="
fi
