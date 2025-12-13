<template>
  <div class="home-page">
    <!-- Header Navigation -->
    <AppHeader />

    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-container">
        <div class="hero-content">
          <div class="hero-text">
            <p class="sub-headline">我们创造</p>
            <h1 class="main-headline">最佳书籍和思想的视觉总结。</h1>
            <p class="description">
              拥有超过 <strong>1万订阅者</strong>，我们是
              <strong>视觉学习者</strong> 的首选频道，帮助他们掌握世界上最伟大的书籍和思想。
            </p>
            <NuxtLink to="/top-50-books" class="cta-btn">我的50本推荐书籍</NuxtLink>
          </div>
          <div class="hero-illustration">
            <div class="illustration-wrapper">
              <img src="/images/make/vtw-logo-horizontal.png" alt="VTW Logo" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Product Promotion Section -->
    <section class="product-section">
      <div class="product-container">
        <div class="product-content">
          <div class="product-text">
            <p class="limited-text">独家内容</p>
            <h2 class="product-headline">立即开始学习，探索更多可能...</h2>
            <a href="https://space.bilibili.com/608088910" target="_blank" class="product-btn">开始学习</a>
            <p class="limited-note">**独家内容</p>
          </div>
          <div class="product-box">
            <div class="flashcard-box">
              <div class="box-front">
                <h3>个人成长类</h3>
                <p class="box-subtitle">视觉思维导图</p>
                <div class="box-features">
                  <span>自我管理</span>
                  <span>目标设定</span>
                  <span>情绪调节</span>
                  <span>效率提升</span>
                </div>
                <p class="box-description">掌握提升自我管理与执行力的技巧</p>
                <p class="box-tagline">由 逃离平庸 精心呈现</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Latest Videos Section -->
    <section class="videos-section">
      <div class="videos-container">
        <h2 class="videos-title">最新视频</h2>
        <div class="videos-grid">
          <div class="video-card atomic-habits">
            <div class="video-iframe-wrapper">
              <iframe
                src="https://player.bilibili.com/player.html?bvid=BV1Nh4y147XK&page=1&autoplay=0"
                scrolling="no"
                border="0"
                frameborder="no"
                framespacing="0"
                allowfullscreen="true"
                class="video-iframe"
              ></iframe>
            </div>
          </div>

          <div class="video-card mind-traps">
            <div class="video-iframe-wrapper">
              <iframe
                src="https://player.bilibili.com/player.html?bvid=BV1Bh4y1n7oC&page=1&autoplay=0"
                scrolling="no"
                border="0"
                frameborder="no"
                framespacing="0"
                allowfullscreen="true"
                class="video-iframe"
              ></iframe>
            </div>
          </div>

          <div class="video-card human-nature">
            <div class="video-cover" v-if="!showVideo3" @click="showVideo3 = true">
              <img src="/images/make/keyilianxi_cover.jpg" alt="视频封面" />
              <div class="play-overlay">
                <div class="play-icon">▶</div>
              </div>
            </div>
            <div class="video-iframe-wrapper" v-if="showVideo3">
              <iframe
                src="https://player.bilibili.com/player.html?bvid=BV1dD4y1f7qM&page=1&autoplay=0"
                scrolling="no"
                border="0"
                frameborder="no"
                framespacing="0"
                allowfullscreen="true"
                class="video-iframe"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Visit stats Section -->
    <section class="stats-section">
      <div class="stats-container">
        <div class="stats-header">
          <div>
            <p class="limited-text">访客统计</p>
            <h2 class="stats-title">最近 7 天访问表现</h2>
            <p class="stats-range" v-if="statsRange">{{ statsRange }}</p>
          </div>
          <div class="stats-actions">
            <button class="refresh-btn" :disabled="statsLoading" @click="refreshStats">
              {{ statsLoading ? '刷新中...' : '刷新数据' }}
            </button>
            <span class="stats-updated" v-if="lastUpdatedText">最近更新：{{ lastUpdatedText }}</span>
          </div>
        </div>

        <div v-if="statsLoading" class="stats-message">正在加载访客数据...</div>
        <div v-else-if="statsError" class="stats-message error">加载失败：{{ statsError }}</div>

        <div v-else-if="stats" class="stats-grid">
          <div class="stat-card">
            <p class="stat-label">总访问量</p>
            <p class="stat-value">{{ formatNumber(stats.totalVisits) }}</p>
          </div>
          <div class="stat-card">
            <p class="stat-label">独立访客</p>
            <p class="stat-value">{{ formatNumber(stats.uniqueVisitors) }}</p>
          </div>
          <div class="stat-card">
            <p class="stat-label">平均停留时长</p>
            <p class="stat-value">{{ formatDuration(stats.averageDurationSeconds) }}</p>
          </div>
        </div>

        <div class="stats-sublists" v-if="stats && (recentDailyStats.length || stats.topPages?.length)">
          <div class="daily-panel" v-if="recentDailyStats.length">
            <h3>最近趋势</h3>
            <ul>
              <li v-for="day in recentDailyStats" :key="day.date">
                <span>{{ formatDayLabel(day.date) }}</span>
                <strong>{{ formatNumber(day.visits) }} 次访问 / {{ formatNumber(day.uniqueVisitors) }} 独立</strong>
              </li>
            </ul>
          </div>
          <div class="daily-panel" v-if="stats.topPages?.length">
            <h3>热门页面</h3>
            <ul>
              <li v-for="page in stats.topPages.slice(0, 5)" :key="page.pagePath">
                <span>{{ page.pagePath }}</span>
                <strong>{{ formatNumber(page.visits) }} 次访问</strong>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'

const showVideo3 = ref(false)
const { stats, loading: statsLoading, error: statsError, lastFetched, refresh } = useVisitStats()

const formatNumber = (value?: number | null) => {
  if (typeof value === 'number' && Number.isFinite(value)) {
    return value.toLocaleString('zh-CN')
  }
  return '--'
}

const formatDuration = (seconds?: number | null) => {
  if (!seconds || !Number.isFinite(seconds)) {
    return '--'
  }
  if (seconds < 60) {
    return `${Math.round(seconds)} 秒`
  }
  const minutes = Math.floor(seconds / 60)
  const remaining = Math.round(seconds % 60)
  if (remaining === 0) {
    return `${minutes} 分钟`
  }
  return `${minutes} 分 ${remaining} 秒`
}

const formatDayLabel = (value: string) => {
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) {
    return value
  }
  return date.toLocaleDateString('zh-CN', { month: 'short', day: 'numeric' })
}

const formatDateTime = (value: string | number) => {
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) {
    return ''
  }
  return date.toLocaleString('zh-CN', { hour12: false })
}

const statsRange = computed(() => {
  if (!stats.value) {
    return ''
  }
  return `${formatDateTime(stats.value.rangeStart)} - ${formatDateTime(stats.value.rangeEnd)}`
})

const recentDailyStats = computed(() => {
  if (!stats.value?.dailyStats?.length) {
    return []
  }
  const days = stats.value.dailyStats
  return days.slice(Math.max(days.length - 5, 0))
})

const lastUpdatedText = computed(() => {
  if (!lastFetched.value) {
    return ''
  }
  return formatDateTime(lastFetched.value)
})

const refreshStats = () => refresh()

onMounted(() => {
  if (!stats.value) {
    refreshStats()
  }
})

useHead({
  title: 'Escaping Ordinary - 最佳书籍和思想的视觉总结'
})
</script>

<style scoped>
.home-page {
  min-height: 100vh;
  background: #0a1929;
  color: white;
}


/* Hero Section */
.hero {
  padding: 4rem 2rem;
  background: linear-gradient(135deg, #0a1929 0%, #1a2332 100%);
}

.hero-container {
  max-width: 1400px;
  margin: 0 auto;
}

.hero-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.hero-text {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.sub-headline {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.7);
  text-transform: uppercase;
  letter-spacing: 2px;
}

.main-headline {
  font-size: 3.5rem;
  font-weight: 800;
  line-height: 1.2;
  color: white;
}

.description {
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.6;
}

.description strong {
  color: white;
  font-weight: 700;
}

.cta-btn {
  background: #1976d2;
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  width: fit-content;
  transition: background 0.3s;
  text-decoration: none;
  display: inline-block;
}

.cta-btn:hover {
  background: #1565c0;
}

.hero-illustration {
  position: relative;
  height: 500px;
}

.illustration-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.illustration-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}


/* Product Section */
.product-section {
  padding: 4rem 2rem;
  background: #ffeb3b;
}

.product-container {
  max-width: 1400px;
  margin: 0 auto;
}

.product-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.product-text {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.limited-text {
  font-size: 12px;
  color: rgba(0, 0, 0, 0.6);
  text-transform: uppercase;
  letter-spacing: 2px;
}

.product-headline {
  font-size: 2.5rem;
  font-weight: 800;
  color: #000;
  line-height: 1.2;
}

.product-btn {
  background: #1976d2;
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  width: fit-content;
  transition: background 0.3s;
  text-decoration: none;
  display: inline-block;
}

.product-btn:hover {
  background: #1565c0;
}

.limited-note {
  font-size: 12px;
  color: rgba(0, 0, 0, 0.6);
}

.product-box {
  perspective: 1000px;
}

.flashcard-box {
  transform: rotateY(-5deg) rotateX(5deg);
  background: linear-gradient(135deg, #9c27b0, #7b1fa2);
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  border: 3px solid rgba(255, 255, 255, 0.3);
}

.box-front h3 {
  font-size: 2rem;
  font-weight: 900;
  color: white;
  margin-bottom: 0.5rem;
  text-align: center;
}

.box-subtitle {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.9);
  text-align: center;
  margin-bottom: 1rem;
}

.box-features {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
  margin-bottom: 1rem;
}

.box-features span {
  background: rgba(255, 255, 255, 0.2);
  padding: 0.3rem 0.8rem;
  border-radius: 4px;
  font-size: 0.8rem;
  color: white;
}

.box-description {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.9);
  text-align: center;
  margin-bottom: 1rem;
}

.box-tagline {
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.8);
  text-align: center;
}

/* Videos Section */
.videos-section {
  padding: 4rem 2rem;
  background: white;
}

.videos-container {
  max-width: 800px;
  margin: 0 auto;
}

.videos-title {
  font-size: 3rem;
  font-weight: 300;
  color: #9c27b0;
  text-align: center;
  margin-bottom: 3rem;
}

.videos-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

.video-card {
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
}

.video-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
}

.video-card.atomic-habits .video-thumbnail {
  background: linear-gradient(135deg, #ffeb3b, #ffc107);
}

.video-iframe-wrapper {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%; /* 16:9 宽高比 */
  height: 0;
  overflow: hidden;
}

.video-iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
}

.video-cover {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%; /* 16:9 宽高比 */
  height: 0;
  overflow: hidden;
  cursor: pointer;
}

.video-cover img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.play-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.3);
  transition: background 0.3s;
}

.video-cover:hover .play-overlay {
  background: rgba(0, 0, 0, 0.5);
}

.video-card.mind-traps .video-thumbnail {
  background: linear-gradient(135deg, #d32f2f, #c62828);
}

.video-card.human-nature .video-thumbnail {
  background: linear-gradient(135deg, #d32f2f 0%, #d32f2f 50%, #1565c0 50%, #1565c0 100%);
}

.video-thumbnail {
  position: relative;
  padding: 2rem;
  min-height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.video-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.1);
}

.play-icon {
  width: 80px;
  height: 80px;
  background: #ff0000;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  transition: transform 0.3s;
}

.play-icon:hover {
  transform: scale(1.1);
}

.video-info {
  position: relative;
  z-index: 2;
  text-align: center;
  width: 100%;
}

.video-subtitle {
  font-size: 0.9rem;
  color: rgba(0, 0, 0, 0.7);
  margin-bottom: 1rem;
}

.video-title {
  font-size: 3rem;
  font-weight: 900;
  color: #000;
  text-transform: uppercase;
}

.video-card.mind-traps .video-title {
  color: #ffeb3b;
}

.video-card.human-nature .video-title {
  color: white;
}

.video-footer {
  padding: 1.5rem 2rem;
  background: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.brand-logo-small {
  font-size: 0.9rem;
  font-weight: 600;
  color: #333;
}

.youtube-btn {
  background: #000;
  color: white;
  border: none;
  padding: 0.6rem 1.2rem;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: background 0.3s;
}

.youtube-btn:hover {
  background: #333;
}

.stats-section {
  background: #081526;
  padding: 4rem 2rem;
}

.stats-container {
  max-width: 1400px;
  margin: 0 auto;
}

.stats-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 2rem;
}

.stats-title {
  font-size: 2rem;
  font-weight: 700;
  color: white;
  margin-bottom: 0.3rem;
}

.stats-range {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.95rem;
}

.stats-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.refresh-btn {
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: white;
  padding: 0.6rem 1.5rem;
  border-radius: 999px;
  cursor: pointer;
  transition: background 0.3s, border-color 0.3s;
}

.refresh-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.refresh-btn:not(:disabled):hover {
  background: rgba(25, 118, 210, 0.2);
  border-color: #1976d2;
}

.stats-updated {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.6);
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
}

.stat-card {
  background: rgba(255, 255, 255, 0.05);
  padding: 1.5rem;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.stat-label {
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.7);
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-bottom: 0.8rem;
}

.stat-value {
  font-size: 2rem;
  font-weight: 700;
  color: white;
}

.stats-message {
  background: rgba(255, 255, 255, 0.05);
  border: 1px dashed rgba(255, 255, 255, 0.2);
  padding: 1.25rem;
  border-radius: 16px;
  color: rgba(255, 255, 255, 0.85);
}

.stats-message.error {
  border-color: rgba(244, 67, 54, 0.6);
  color: #ff8a80;
}

.stats-sublists {
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.5rem;
}

.daily-panel {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  padding: 1.5rem;
}

.daily-panel h3 {
  font-size: 1.2rem;
  font-weight: 600;
  color: white;
  margin-bottom: 1rem;
}

.daily-panel ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.daily-panel li {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  color: rgba(255, 255, 255, 0.85);
  font-size: 0.95rem;
}

.daily-panel li strong {
  color: white;
  font-weight: 600;
}


/* Responsive Design */
@media (max-width: 1024px) {
  .hero-content,
  .product-content {
    grid-template-columns: 1fr;
  }

  .main-headline {
    font-size: 2.5rem;
  }

}

@media (max-width: 768px) {
  .main-headline {
    font-size: 2rem;
  }

  .videos-title {
    font-size: 2rem;
  }

  .video-title {
    font-size: 2rem;
  }

  .stats-header {
    flex-direction: column;
    align-items: flex-start;
  }

  .stats-grid {
    grid-template-columns: 1fr;
  }
}
</style>
