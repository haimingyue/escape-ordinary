# 使用最新版本的 Node.js 镜像
FROM node:25.2.1

# 设置工作目录
WORKDIR /app

# 将 package.json 和 package-lock.json 复制到容器中
COPY package*.json ./

# 删除旧的 node_modules 和 package-lock.json（如果存在）
RUN rm -rf node_modules package-lock.json

RUN npm install -g nuxt@4.2.1

# 安装依赖
RUN npm install  # 使用 npm install 安装依赖

# 设置环境变量，确保 node_modules/.bin 被添加到 PATH 中
# ENV PATH /app/node_modules/.bin:$PATH

# 将整个项目复制到容器中
COPY . .

# 构建 Nuxt 应用
RUN npm run build

# 暴露 Nuxt 应用的端口
EXPOSE 3000

# 启动 Nuxt 应用
CMD ["npm", "start"]
