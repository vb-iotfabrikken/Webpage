# syntax=docker/dockerfile:1

# ── Build stage ──────────────────────────────────────────────────────────────
# Compile the static Astro site. The soft-launch gate in astro.config.mjs prunes
# hidden pages during `astro build`, so only allowlisted pages reach /srv.
FROM node:22-alpine AS build
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .

# Railway builds from this Dockerfile for the soft-launch deployment. Force the
# allowlist gate on regardless of which git branch was cloned — master keeps
# LAUNCH_LIVE_ONLY = false for local dev, but Docker/Railway must always prune.
RUN sed -i 's/export const LAUNCH_LIVE_ONLY = \(true\|false\)/export const LAUNCH_LIVE_ONLY = true/' src/data/launch.ts
RUN grep -q 'export const LAUNCH_LIVE_ONLY = true' src/data/launch.ts

RUN npm run build

# ── Serve stage ──────────────────────────────────────────────────────────────
# Caddy serves the static output and enforces HTTP Basic Auth (see Caddyfile).
FROM caddy:2-alpine
COPY Caddyfile /etc/caddy/Caddyfile
COPY --from=build /app/dist /srv

# Railway injects $PORT; the Caddyfile binds to it.
EXPOSE 8080
