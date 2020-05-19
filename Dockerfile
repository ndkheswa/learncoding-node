FROM node:lts-alpine AS development

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --only=development
COPY . .
# If you are building your code for production
# RUN npm ci --only=production
RUN npm run build

FROM node:lts-alpine AS production
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

RUN apk add --no-cache bash
RUN npm install -g pm2
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --only=production
COPY . .
COPY --from=development /usr/src/app/dist ./dist
COPY .env ./dist/.env
EXPOSE 3000
CMD [ "pm2-runtime", "start", "ecosystem.config.js" ]