FROM node:16-bullseye

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

COPY . .

ENV NODE_ENV production

EXPOSE 8080
# CMD ["yarn", "start"]