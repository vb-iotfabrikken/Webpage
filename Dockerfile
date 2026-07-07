# syntax=docker/dockerfile:1

# ── Build stage ──────────────────────────────────────────────────────────────
# Compile the static Astro site. The soft-launch gate in astro.config.mjs prunes
# hidden pages during `astro build`, so only allowlisted pages reach /srv.
FROM node:22-alpine AS build
WORKDIR /app

# Railway injects RAILWAY_GIT_BRANCH on GitHub-triggered builds. Fail fast if
# master (or any non-soft-launch branch) is cloned — see .cursor/rules/railway-soft-launch.mdc.
ARG RAILWAY_GIT_BRANCH
RUN if [ -n "${RAILWAY_GIT_BRANCH}" ]; then \
      test "${RAILWAY_GIT_BRANCH}" = "soft-launch" || \
      (echo "ERROR: Railway must build from soft-launch, got: ${RAILWAY_GIT_BRANCH}" && exit 1); \
    fi

COPY package.json package-lock.json ./
RUN npm ci

COPY . .

# Railway builds from this Dockerfile for the soft-launch deployment. Force the
# allowlist gate on regardless of which git branch was cloned — master keeps
# LAUNCH_LIVE_ONLY = false for local dev, but Docker/Railway must always prune.
RUN sed -i 's/export const LAUNCH_LIVE_ONLY = \(true\|false\)/export const LAUNCH_LIVE_ONLY = true/' src/data/launch.ts
RUN grep -q 'export const LAUNCH_LIVE_ONLY = true' src/data/launch.ts
RUN sed -i 's/export const ANALYTICS_WAVE_LIVE = \(true\|false\)/export const ANALYTICS_WAVE_LIVE = false/' src/data/launch.ts
RUN grep -q 'export const ANALYTICS_WAVE_LIVE = false' src/data/launch.ts

RUN npm run build

# ── Serve stage ──────────────────────────────────────────────────────────────
# Caddy serves the static output and enforces HTTP Basic Auth (see Caddyfile).
FROM caddy:2-alpine
COPY Caddyfile /etc/caddy/Caddyfile
COPY --from=build /app/dist /srv

# Railway injects $PORT; the Caddyfile binds to it.
EXPOSE 8080
