FROM node:24-alpine

WORKDIR /app

COPY package*.json ./

RUN npm ci --omit=dev

COPY app.js .

RUN rm -rf /usr/local/lib/node_modules/npm

EXPOSE 3000

CMD ["node", "app.js"]
