# ARG NODE_VERSION=20.12.2
FROM node:20-slim AS base

ARG PORT=3000

ENV NODE_ENV=production

WORKDIR /app

# Dev stage
FROM base AS dev
COPY --link package.json package-lock.json ./
RUN npm ci
CMD [ "npm", "run", "dev" ]

# Build stage
FROM base AS build

COPY --link package.json package-lock.json ./
RUN npm ci

COPY --link . .

RUN npm run build

# Run stage
FROM base

COPY --from=build /app/.output /app/.output

CMD [ "node", ".output/server/index.mjs" ]
