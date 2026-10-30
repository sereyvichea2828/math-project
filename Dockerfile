# ============================================================
# Stage 1: Builder
# Installs deps and builds the Vite/Vue SPA
# ============================================================
FROM node:22-alpine AS builder

WORKDIR /app

# Copy dependency manifests first for better layer caching
COPY package.json package-lock.json ./

# Install all deps (including devDependencies needed for build)
RUN npm install --prefer-offline --no-audit --progress=false

# Copy the rest of the source
COPY . .

# Accept build-time env vars (passed via --build-arg / docker-compose args)
ARG VITE_SITENAME="Math Assignment Become to Backend"
ENV VITE_SITENAME=$VITE_SITENAME

# Build the production bundle
RUN npm run build

# ============================================================
# Stage 2: Production runner (Nginx)
# Serves the compiled static assets
# ============================================================
FROM nginx:1.27-alpine AS runner

# Remove default nginx content
RUN rm -rf /usr/share/nginx/html/*

# Copy compiled assets from builder
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy custom nginx config (SPA fallback + security headers)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Health-check: ensure nginx is serving
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://127.0.0.1:80/health || exit 1

CMD ["nginx", "-g", "daemon off;"]

