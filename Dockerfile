FROM node:14

WORKDIR /usr/src/app
COPY package*.json ./

RUN npm install
RUN npm run build
RUN npm run build:css

COPY . .
COPY */ .

EXPOSE 8080

CMD [ "npm", "run", "start" ]