FROM node:16-alpine as build


WORKDIR /app
COPY package*.json ./
ARG TEST=${TEST}
ENV REACT_APP_API_URL=https://tessera.hopto.org/
ENV TESTVAR ${TEST}
RUN echo "Actual var represent ${REACT_APP_API_URL}"
RUN echo "TEST var represent ${TESTVAR}"
RUN echo "TEST var2 represent ${TEST}"
RUN npm ci
COPY . ./
RUN npm run build
CMD cp -r build result_build
