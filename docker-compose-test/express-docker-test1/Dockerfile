FROM node:16

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY dist/ ./

EXPOSE 8000

CMD ["node", "./app.js"]