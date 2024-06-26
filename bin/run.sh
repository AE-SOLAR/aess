#!/bin/bash

if [[ $1 == "clean" || $1 == "clear" ]]; then
  docker container prune --force && docker image prune --all --force && docker volume prune --force
  exit 0
elif [[ ($2 == "prod" || $2 == "dev" || $2 == "") ]] && [[ ($1 == "up" || $1 == "down") ]]; then

  if [[ $2 != "prod" ]]; then
    COMPOSE_PROFILES="dev"
  else
    COMPOSE_PROFILES=$2
  fi

  ACTION=$1

  HOMEDIR=$(basename "$PWD")
  if [[ $HOMEDIR == "bin" ]]; then
    cd ..
  elif [[ $HOMEDIR != "shop" ]]; then
    cd ../..
  fi

  ENV_FILE="./config/.env.$COMPOSE_PROFILES"
  export ENV_FILE

  echo "Running $ACTION for $COMPOSE_PROFILES with ENV file $ENV_FILE"
  docker compose --env-file $ENV_FILE --profile $COMPOSE_PROFILES $ACTION
else
  echo "Invalid argument. Please use format ./run.sh [up|down|clean] [prod|dev]"
  exit 1
fi
