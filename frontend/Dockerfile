# # Build Stage
# FROM node:20-alpine AS build

# # Set working directory
# WORKDIR /app

# # Copy project files
# COPY package*.json ./
# RUN npm install

# COPY . .

# # Set environment variables for production build
# ARG REACT_APP_API_URL
# ENV REACT_APP_API_URL=${REACT_APP_API_URL}

# # Build the app
# RUN npm run build

# # Run Stage
# FROM nginx:stable-alpine

# # Copy build output to NGINX directory
# COPY --from=build /app/build /usr/share/nginx/html

# # Expose port
# EXPOSE 80

# # Start NGINX server
# CMD ["nginx", "-g", "daemon off;"]

FROM node
COPY package.json /data/
WORKDIR /data/
RUN npm install 
ENV PATH /data/node_modules/.bin:$PATH

COPY . /data/app/
WORKDIR /data/app/