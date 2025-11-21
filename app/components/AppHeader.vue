<template>
  <header class="header" :class="{ 'header-dark': isDark }">
    <div class="header-container">
      <NuxtLink to="/" class="logo">
        <img src="/images/Logo.png" alt="Escaping Ordinary" />
      </NuxtLink>
      <button class="menu-toggle" @click="toggleMenu" :class="{ active: isMenuOpen }">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <div class="menu-overlay" v-if="isMenuOpen" @click="closeMenu"></div>
      <nav class="nav" :class="{ active: isMenuOpen }">
        <a target="_blank" href="https://source.tlpy8.com/book-on-page.html" class="nav-link" @click="closeMenu">思维导图</a>
        <a target="_blank" href="https://space.bilibili.com/608088910" class="nav-link" @click="closeMenu">视频</a>
        <NuxtLink to="/top-50-books" class="nav-link" :class="{ active: isTop50BooksPage }" @click="closeMenu">50本推荐书籍</NuxtLink>
        <a href="https://space.bilibili.com/608088910" target="_blank" class="shop-btn" @click="closeMenu">支持</a>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const isMenuOpen = ref(false)

const isDark = computed(() => {
  return route.path === '/'
})

const isTop50BooksPage = computed(() => {
  return route.path === '/top-50-books'
})

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 100;
  backdrop-filter: blur(10px);
  padding: 1rem 2rem;
  transition: background 0.3s, border-color 0.3s;
}

.header-dark {
  background: rgba(10, 25, 41, 0.95);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.header:not(.header-dark) {
  background: rgba(255, 255, 255, 0.95);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.header-container {
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  text-decoration: none;
  display: flex;
  align-items: center;
}

.logo img {
  height: 80px;
  width: auto;
  object-fit: contain;
}

.menu-toggle {
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 30px;
  height: 30px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 101;
  gap: 5px;
}

.menu-toggle span {
  width: 100%;
  height: 3px;
  border-radius: 3px;
  transition: all 0.3s ease;
  transform-origin: center;
}

.header-dark .menu-toggle span {
  background: white;
}

.header:not(.header-dark) .menu-toggle span {
  background: #333;
}

.menu-toggle.active span:nth-child(1) {
  transform: rotate(45deg) translate(8px, 8px);
}

.menu-toggle.active span:nth-child(2) {
  opacity: 0;
}

.menu-toggle.active span:nth-child(3) {
  transform: rotate(-45deg) translate(8px, -8px);
}

.menu-overlay {
  display: none;
}

.nav {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.nav-link {
  text-decoration: none;
  font-size: 14px;
  transition: opacity 0.3s;
}

.header-dark .nav-link {
  color: white;
}

.header:not(.header-dark) .nav-link {
  color: #333;
}

.nav-link:hover {
  opacity: 0.7;
}

.nav-link.active {
  color: #1976d2;
  font-weight: 600;
  opacity: 1;
}

.shop-btn {
  background: #1976d2;
  color: white;
  border: none;
  padding: 0.6rem 1.5rem;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s;
  text-decoration: none;
  display: inline-block;
}

.shop-btn:hover {
  background: #1565c0;
}

/* Responsive Design */
@media (max-width: 768px) {
  .header {
    padding: 1rem;
  }

  .menu-toggle {
    display: flex;
  }

  .menu-overlay {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    z-index: 99;
  }

  .nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 280px;
    height: 100vh;
    backdrop-filter: blur(10px);
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 5rem 2rem 2rem;
    gap: 1.5rem;
    transform: translateX(-100%);
    transition: transform 0.3s ease;
    z-index: 100;
    box-shadow: 2px 0 10px rgba(0, 0, 0, 0.3);
  }

  .header-dark .nav {
    background: rgba(10, 25, 41, 0.98);
  }

  .header:not(.header-dark) .nav {
    background: rgba(255, 255, 255, 0.98);
  }

  .nav.active {
    transform: translateX(0);
  }

  .nav-link {
    font-size: 16px;
    width: 100%;
    padding: 0.75rem 0;
  }

  .header-dark .nav-link {
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }

  .header:not(.header-dark) .nav-link {
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }

  .shop-btn {
    width: 100%;
    padding: 0.75rem 1.5rem;
    margin-top: 1rem;
  }
}
</style>

