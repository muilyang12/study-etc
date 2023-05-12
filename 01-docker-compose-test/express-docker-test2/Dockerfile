FROM node:16

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY dist/ ./

EXPOSE 7000

CMD ["node", "./app.js"]