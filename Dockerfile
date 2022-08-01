FROM node:alpine
WORKDIR /app

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install --production

COPY . .

CMD [ "node", "src/server/index.js" ]