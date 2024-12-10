FROM node:20-alpine3.20

WORKDIR /app

COPY package.json /app

RUN npm i

COPY . /app

EXPOSE 4000

ENTRYPOINT npm start


