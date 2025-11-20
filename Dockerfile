# 使用最新版本的 Node.js 镜像
FROM node:25.2.1

# 设置工作目录
WORKDIR /app

# 将 package.json 和 package-lock.json 复制到容器中
COPY . /app

# 安装依赖
RUN npm config set registry https://registry.npmmirror.com && npm install && npm install -g nuxt@4.2.1 && npm run buildH

# 启动 Nuxt 应用
ENTRYPOINT ["npm", "run", "start"]
