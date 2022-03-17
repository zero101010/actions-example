FROM node:12-alpine

WORKDIR /app

COPY . .

EXPOSE 3000

ENTRYPOINT [ "npm", "start" ]
