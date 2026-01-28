<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-left">
        <div class="footer-logo">
          <div class="logo-circle">
            <span>ESCAPING</span>
            <span>ORDINARY</span>
          </div>
        </div>
        <div class="social-icons">
          <a href="#" class="social-icon">f</a>
          <a href="#" class="social-icon">🐦</a>
          <a href="#" class="social-icon">📷</a>
        </div>
        <p class="copyright">版权所有 © Escaping Ordinary | 2025</p>
      </div>
      <div class="footer-right">
        <h4 class="footer-menu-title">菜单</h4>
        <div class="footer-links">
          <div class="footer-link-group">
            <NuxtLink to="/" class="footer-link" :class="{ active: isHomePage }">首页</NuxtLink>
            <NuxtLink to="/top-50-books" class="footer-link" :class="{ active: isTop50BooksPage }">50本推荐书籍</NuxtLink>
            <a href="#" class="footer-link">思维导图</a>
            <a href="#" class="footer-link">视频页面</a>
            <a href="#" class="footer-link">联系我们</a>
          </div>
          <div class="footer-link-group">
            <a href="#" class="footer-link">条款和条件</a>
            <a href="#" class="footer-link">退款政策</a>
            <NuxtLink to="/privacy-policy" class="footer-link" :class="{ active: isPrivacyPolicyPage }">隐私政策</NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const isHomePage = computed(() => {
  return route.path === '/'
})

const isTop50BooksPage = computed(() => {
  return route.path === '/top-50-books'
})

const isPrivacyPolicyPage = computed(() => {
  return route.path === '/privacy-policy'
})
</script>

<style scoped>
.footer {
  background: #f5f5f5;
  padding: 3rem 2rem 2rem;
  border-top: 1px solid #e0e0e0;
}

.footer-container {
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
}

.footer-logo .logo-circle {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: linear-gradient(135deg, #4fc3f7, #29b6f6);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 10px;
  font-weight: bold;
  color: white;
  text-align: center;
  line-height: 1.2;
  margin-bottom: 1.5rem;
}

.social-icons {
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.social-icon {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #e0e0e0;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: #666;
  font-weight: 600;
  transition: background 0.3s;
}

.social-icon:hover {
  background: #bdbdbd;
}

.copyright {
  font-size: 0.9rem;
  color: #999;
}

.footer-menu-title {
  font-size: 1.2rem;
  font-weight: 700;
  color: #1976d2;
  margin-bottom: 1rem;
}

.footer-links {
  display: flex;
  gap: 3rem;
}

.footer-link-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.footer-link {
  color: #666;
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.3s;
}

.footer-link:hover {
  color: #1976d2;
}

.footer-link.active {
  color: #1976d2;
  font-weight: 600;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .footer-container {
    grid-template-columns: 1fr;
  }
}
</style>

