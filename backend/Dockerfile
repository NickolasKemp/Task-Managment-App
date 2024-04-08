FROM node:20

WORKDIR /app

ARG DATABASE_URL
ENV DATABASE_URL=${DATABASE_URL}

COPY package*.json ./

RUN npm install

COPY . .

COPY prisma ./prisma

RUN npx prisma generate

RUN npx prisma db push

EXPOSE 5000

CMD ["npm", "run", "start:dev"]
