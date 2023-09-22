FROM node:16-alpine as build


WORKDIR /app
COPY package*.json ./
ENV REACT_APP_API_URL=$REACT_APP_API_URL
RUN npm ci
COPY . ./
RUN npm run build
CMD cp -r build result_build
