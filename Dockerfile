FROM node:latest
WORKDIR /app

COPY . .
RUN npm install
EXPOSE 10000
CMD ["npm","start"]