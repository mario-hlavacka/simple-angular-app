# Build Angular application
FROM node:23-alpine AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# Serve Angular application with Nginx
FROM nginx:1.27.5-alpine-slim

COPY --from=build /app/dist/simple-angular-app/browser /usr/share/nginx/html

COPY nginx.conf.template /etc/nginx/templates/default.conf.template

EXPOSE 80