
FROM node:alpine


RUN npm install -g http-server


WORKDIR /usr/src/app
COPY . .


EXPOSE 8080


CMD ["http-server", "-p", "8080"]
