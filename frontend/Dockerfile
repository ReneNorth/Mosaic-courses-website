FROM node:16-alpine as build


WORKDIR /app
COPY package*.json ./
ARG REACT_APP_API_URL
RUN echo "The ARG variable value is $REACT_APP_API_URL"
RUN npm ci
COPY . ./
RUN npm run build
CMD cp -r build result_build
