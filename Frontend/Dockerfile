FROM node:20-alpine3.20

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

EXPOSE 3000

ENTRYPOINT ["npm", "start"]
