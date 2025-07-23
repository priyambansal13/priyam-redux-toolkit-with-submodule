# Use official Node.js image for build
FROM node:20 AS build
WORKDIR /app
COPY package.json package-lock.json* yarn.lock* ./
RUN npm install --legacy-peer-deps
COPY . .
RUN npm run build

# Use official Nginx image to serve static files
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
