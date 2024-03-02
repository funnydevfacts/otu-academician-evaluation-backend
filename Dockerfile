FROM node:20.11.1-alpine3.19

COPY package.json /server/package.json
COPY src /server/src/

WORKDIR /server

EXPOSE 3000

RUN npm install
CMD ["node", "src/index.js"]