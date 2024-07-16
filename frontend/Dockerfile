FROM node:22-alpine AS build

LABEL prog="aeshop"

WORKDIR /usr/src/app

COPY ./app/package.json .
COPY ./app/yarn.lock .

RUN rm -rf node_modules/.cache
RUN rm -rf node_modules
RUN yarn cache clean
RUN yarn install


FROM node:22-alpine AS prod
LABEL prog="aeshop"
WORKDIR /usr/src/app

COPY ./app .

COPY --from=build /usr/src/app/node_modules ./node_modules

EXPOSE 3000

CMD ["yarn", "start"]
