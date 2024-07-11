FROM node:alpine As development

WORKDIR /usr/src/app

COPY package.json package-lock.json ./
COPY .env ./
COPY libs/common/src/prisma/schema/schema.prisma ./prisma/
COPY scripts/wait-for-it.sh /usr/src/app/scripts/

RUN npm i -g prisma
RUN npx prisma generate
RUN npx prisma db push

RUN npm install

COPY . .

RUN npm run build

FROM node:alpine As production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package.json package-lock.json ./
COPY .env ./
COPY libs/common/src/prisma/schema/schema.prisma ./prisma/

RUN npm i -g prisma
RUN npx prisma generate

RUN npm install --only=production

COPY --from=development /usr/src/app/dist ./dist

CMD ["node", "dist/apps/training-program/main.js"]