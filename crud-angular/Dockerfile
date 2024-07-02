FROM node:20.14.0-alpine
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run
EXPOSE 4200
