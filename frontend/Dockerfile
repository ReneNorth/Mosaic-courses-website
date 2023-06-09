# build env
FROM node:16-alpine as build

WORKDIR /app
COPY package*.json ./
# COPY .eslintrc.js ./
# COPY .prettierrc.json ./
# COPY .stylelintrc.json ./

RUN npm ci
COPY . ./
RUN npm run build
CMD cp -r build result_build
