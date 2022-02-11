FROM debian:latest

RUN npm install
RUN npm run build
RUN npm run build:css

EXPOSE 80

CMD [ "npm", "run", "start" ]