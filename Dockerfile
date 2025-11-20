# ---------- 构建阶段 ----------
FROM node:22-alpine AS build

WORKDIR /app

# 安装 pnpm
RUN npm install -g pnpm

# 先拷贝依赖相关文件（你现在只有 package.json，就拷贝它）
COPY package.json ./

# 安装依赖（没 lockfile，就不要 frozen）
RUN pnpm install --no-frozen-lockfile

# 再拷贝剩余代码
COPY . .

# 构建 Nuxt 应用（等价于 pnpm run build）
RUN pnpm build


# ---------- 运行阶段 ----------
FROM node:22-alpine AS runtime

WORKDIR /app

ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV NITRO_PRESET=node

# 只复制构建产物
COPY --from=build /app/.output ./.output

EXPOSE 3000

# 用 Nuxt/Nitro 生产服务启动
CMD ["node", ".output/server/index.mjs"]
