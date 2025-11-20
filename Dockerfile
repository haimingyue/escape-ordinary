# 使用最新版本的 Node.js 镜像
FROM node:25.2.1 as builder

# 设置工作目录
WORKDIR /app

# 将 package.json 和 package-lock.json 复制到容器中
COPY . /app

# 安装依赖
RUN npm config set registry https://registry.npmmirror.com && npm install && npm run build

# 启动 Nuxt 应用

FROM node:25.2.1

WORKDIR /app

COPY --from=builder /app/.output /app

RUN npm config set registry https://registry.npmmirror.com && npm install -g nuxt

ENTRYPOINT ["npm", "run", "start"]