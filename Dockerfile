# ============================
# Etapa 1: Build
# ============================
FROM node:18-alpine AS builder
WORKDIR /app

RUN corepack enable && corepack prepare yarn@stable --activate

COPY package.json yarn.lock .yarnrc.yml ./

# Instala dependências
RUN yarn install --immutable

COPY . .

RUN yarn build

# ============================
# 2: Prod (Runtime)
# ============================
FROM node:18-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production

RUN corepack enable && corepack prepare yarn@stable --activate
COPY --from=builder /app/package.json ./
COPY --from=builder /app/yarn.lock ./
COPY --from=builder /app/.yarnrc.yml ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.ts ./

EXPOSE 3000
CMD ["yarn", "start"]
