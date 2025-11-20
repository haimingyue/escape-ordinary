# 使用官方 Node.js 18 镜像
FROM node:latest

# 设置工作目录
WORKDIR /app

# 将 package.json 和 package-lock.json 复制到容器中
COPY package*.json ./

# 安装项目依赖
RUN npm install  # 安装项目依赖

# 如果 nuxt 没有列在 package.json 中，可以在此安装它
RUN npm install -g nuxt  # 全局安装 nuxt

# 将整个项目复制到容器中
COPY . .

# 构建 Nuxt 应用
RUN npm run build

# 暴露 Nuxt 应用的端口
EXPOSE 3000

# 启动 Nuxt 应用
CMD ["npm", "start"]
