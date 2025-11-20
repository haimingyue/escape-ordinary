# 使用最新版本的 Node.js 镜像
FROM node:latest

# 设置工作目录
WORKDIR /app

# 删除 node_modules 和 package-lock.json（确保干净的安装）
RUN rm -rf node_modules package-lock.json

# 将 package.json 和 package-lock.json 复制到容器中
COPY package*.json ./

# 安装项目依赖
RUN npm install

# 将整个项目复制到容器中
COPY . .

# 构建 Nu
