### STAGE 1: Build ###
FROM node:16-alpine3.14 as build
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
ENV PATH /usr/src/app/node_modules/.bin:$PATH
ENV GENERATE_SOURCEMAP=false
COPY package.json /usr/src/app/package.json
COPY pnpm-lock.yaml /usr/src/app/pnpm-lock.yaml
COPY .npmrc /usr/src/app/.npmrc
RUN npm install -g pnpm
RUN pnpm install
COPY . /usr/src/app
RUN pnpm run build

### STAGE 2: Production Environment ###
FROM nginx:1.21.6-alpine
COPY --from=build /usr/src/app/build /usr/share/nginx/html
COPY default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

