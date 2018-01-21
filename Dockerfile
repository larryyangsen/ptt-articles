FROM node:9-alpine
WORKDIR /var/ptt-articles
COPY package.json package-lock.json .babelrc ./
COPY server ./server
COPY src ./src
RUN npm install
RUN npm run build:server
RUN npm run build:client
EXPOSE 9999
ENTRYPOINT [ "npm","start" ]