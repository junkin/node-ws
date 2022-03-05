#adaped from this
#https://nodejs.org/en/docs/guides/nodejs-docker-webapp/
FROM node:16
WORKDIR /code/app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
EXPOSE 9876
CMD [ "node", "server.js" ]
