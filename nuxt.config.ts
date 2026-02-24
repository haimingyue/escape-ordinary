// nuxt.config.js
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  runtimeConfig: {
    apiServerBase: process.env.API_SERVER_BASE || 'https://api.tlpy8.com',
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE || ''
    }
  },
  server: {
    host: '0.0.0.0', // 允许外部访问
    port: 3000 // 默认端口 3000
  }
})
