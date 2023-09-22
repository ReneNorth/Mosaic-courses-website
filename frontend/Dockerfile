FROM node:16-alpine as build


WORKDIR /app
COPY package*.json ./
ARG REACT_API_URL=$API_URL
RUN echo "Oh dang look at that $REACT_API_URL"
ENV REACT_APP_API_URL=$REACT_API_URL
RUN echo "2Oh dang look at that $REACT_APP_API_URL"
RUN npm ci
COPY . ./
RUN npm run build
CMD cp -r build result_build
