// nuxt.config.js
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  server: {
    host: '0.0.0.0', // 允许外部访问
    port: 3000        // 默认端口 3000
  }
})
