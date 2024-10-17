FROM node:22-alpine

WORKDIR /usr/src/app

COPY ./app/package.json .

RUN rm -rf node_modules/.cache
RUN rm -rf node_modules
RUN yarn cache clean
RUN yarn install

COPY ./app .

RUN if [ "$NODE_ENV" = "production" ]; then yarn build; fi

EXPOSE 3000

CMD ["yarn", "start"]
