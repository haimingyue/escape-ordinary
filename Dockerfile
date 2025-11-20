# ---------- 构建阶段 ----------
FROM node:22-alpine AS build

WORKDIR /app

# 安装 pnpm
RUN npm install -g pnpm

# 先拷贝依赖相关文件（利用缓存）
COPY package.json pnpm-lock.yaml* ./

# 安装依赖
RUN pnpm install --frozen-lockfile

# 拷贝剩余代码
COPY . .

# 生产构建
RUN pnpm build


# ---------- 运行阶段 ----------
FROM node:22-alpine AS runtime

WORKDIR /app

ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV NITRO_PRESET=node

# 仅复制构建产物（减少镜像体积）
COPY --from=build /app/.output ./.output

EXPOSE 3000

# 使用 Nuxt 的生产服务器启动方式
CMD ["node", ".output/server/index.mjs"]
