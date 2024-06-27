#!/bin/bash

CLEAN_DOCKER() {
  echo "Cleaning Docker containers, images, and volumes"
  docker container prune --force
  docker image prune --all --force
  docker volume prune --force
}

if [[ $1 == "clean" || $1 == "clear" ]]; then
  CLEAN_DOCKER
elif [[ $1 == "down" ]]; then
  docker compose down
else
  HOMEDIR=$(basename "$PWD")
  if [[ $HOMEDIR == "bin" ]]; then
    cd ..
  elif [[ $HOMEDIR != "shop" ]]; then
    cd ../..
  fi

  DEMONIZE=""
  CLEAN=false
  COMPOSE_PROFILES="dev"
  while [[ $# -gt 0 ]]; do
    case $1 in
    -h | --help)
      echo "Usage: run.sh [OPTIONS]"
      echo "Options:"
      echo "  -h, --help          Show this help message and exit"
      echo "  -d, --demonize      Run Docker in the background"
      echo "  -c, --clean         Clean Docker containers, images, and volumes before running"
      echo "  -p, --production    Run Docker in production mode"
      echo "  -d, --development   Run Docker in development mode"
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
    -d | --development | --dev)
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
  export ENV_FILE

  if [[ $CLEAN == true ]]; then
    CLEAN_DOCKER
  fi

  echo "Running Docker for $COMPOSE_PROFILES with ENV file $ENV_FILE"
  docker compose --env-file $ENV_FILE --profile $COMPOSE_PROFILES up $DEMONIZE
fi
