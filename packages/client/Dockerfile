FROM node:16-alpine as builder

WORKDIR "/app"

COPY ./package.json ./

RUN yarn

COPY . .

CMD [ "yarn", "build" ]

FROM nginx:1.24-alpine-slim

EXPOSE 3000

COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

COPY --from=builder /app/dist /usr/share/nginx/html