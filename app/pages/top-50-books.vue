<template>
  <div class="books-page">
    <!-- 顶部导航 -->
    <AppHeader />

    <!-- 主要内容 -->
    <main class="main-content">
      <div class="content-container">
        <!-- 页面标题 -->
        <h1 class="page-title">50本推荐书籍</h1>

        <!-- 介绍文本 -->
        <div class="intro-section">
          <p class="intro-text">
            这些书籍没有特定的顺序，它们是对我在生活、商业、心理学和哲学方面的思维方式影响最大的书籍。
          </p>
          <p class="intro-text">
            我不会使用编号系统（比如1代表最好等），因为对我来说"最好"的书不一定对你来说也是最好的，这真的取决于你的情况、你的好奇心以及你试图解决的问题。
          </p>
          <p class="intro-text">
            不过，这些是我发现自己最常推荐给别人的书籍，如果你点击一本你感兴趣的书，我已经尝试包含了我认为应该阅读每本书的人群。
          </p>
          <p class="intro-text">
            我希望这些书中的一本能在你的旅程中帮助你！
          </p>
        </div>

        <!-- 书籍网格 -->
        <div class="books-grid">
          <div v-for="book in books" :key="book.id" class="book-card">
            <div class="book-cover">
              <img :src="book.coverImage" :alt="book.title" />
            </div>
            <div class="book-info">
              <h3 class="book-title">{{ book.title }}</h3>
              <p class="book-author">{{ book.author }}</p>
              <a :href="book.amazonUrl" target="_blank" class="amazon-btn">在当当网购买</a>
            </div>
          </div>
        </div>
      </div>
    </main>

    <!-- 页脚 -->
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// 书籍数据 - 根据图片描述整理的50本书
const books = ref([
  { "id": 1, "title": "思考快与慢", "author": "丹尼尔·卡尼曼", "coverImage": "/images/sikaokuaiyuman.png", "amazonUrl": "#" },
  { "id": 2, "title": "人类简史", "author": "尤瓦尔·赫拉利", "coverImage": "/images/renzhitianxing.jpg", "amazonUrl": "#" },
  { "id": 3, "title": "原子习惯", "author": "詹姆斯·克利尔", "coverImage": "/images/yuanzixiguan.jpg", "amazonUrl": "#" },
  { "id": 4, "title": "活出生命的意义", "author": "维克多·弗兰克尔", "coverImage": "/images/huochushengmingdeyiyi.jpg", "amazonUrl": "#" },
//   { "id": 5, "title": "人性的法则", "author": "罗伯特·格林", "coverImage": "/images/renzhitianxing.jpg", "amazonUrl": "#" },
  { "id": 6, "title": "富爸爸穷爸爸", "author": "罗伯特·清崎", "coverImage": "/images/qiongbabafubaba.jpg", "amazonUrl": "#" },
//   { "id": 7, "title": "心理控制学", "author": "麦克斯威尔·马尔茨", "coverImage": "/images/renzhitianxing.jpg", "amazonUrl": "#" },
  { "id": 8, "title": "百万富翁快车道", "author": "MJ·德马科", "coverImage": "/images/baiwanfuwengkuaichedao.jpg", "amazonUrl": "#" },
  { "id": 9, "title": "高效能人士的七个习惯", "author": "史蒂芬·柯维", "coverImage": "/images/gaoxiaonengrenshideqigexiguan.jpg", "amazonUrl": "#" },
//   { "id": 10, "title": "思考致富", "author": "詹姆斯·艾伦", "coverImage": "/images/renzhitianxing.jpg", "amazonUrl": "#" },
  { "id": 11, "title": "一九八四", "author": "乔治·奥威尔", "coverImage": "/images/1984.jpg", "amazonUrl": "#" },
//   { "id": 12, "title": "少走弯路", "author": "基思·J·坎宁安", "coverImage": "/images/renzhitianxing.jpg", "amazonUrl": "#" },
  { "id": 13, "title": "人性的法则", "author": "罗伯特·格林", "coverImage": "/images/renxingdefaze.jpg", "amazonUrl": "#" },
//   { "id": 14, "title": "电子神话", "author": "迈克尔·E·格伯", "coverImage": "/images/renzhitianxing.jpg", "amazonUrl": "#" },
  { "id": 15, "title": "每周工作4小时", "author": "蒂莫西·费里斯", "coverImage": "/images/meizhougongzuosixiaoshi.jpg", "amazonUrl": "#" },
  { "id": 16, "title": "费曼的物理学讲义", "author": "理查德·P·费曼", "coverImage": "/images/feimanwulixuejiangyi.jpg", "amazonUrl": "#" },
  { "id": 17, "title": "原则", "author": "雷·达利欧", "coverImage": "/images/renxingderuodian.jpg", "amazonUrl": "#" },
  { "id": 18, "title": "穷查理宝典", "author": "查尔斯·T·芒格", "coverImage": "/images/qiongchalibaodian.jpg", "amazonUrl": "#" },
//   { "id": 19, "title": "基地", "author": "艾萨克·阿西莫夫", "coverImage": "/images/renzhitianxing.jpg", "amazonUrl": "#" },
  { "id": 20, "title": "纳瓦尔宝典", "author": "埃里克·乔根森", "coverImage": "/images/nawaerbaodian.jpg", "amazonUrl": "#" },
//   { "id": 21, "title": "回忆录", "author": "阿诺德·施瓦辛格", "coverImage": "/images/renzhitianxing.jpg", "amazonUrl": "#" },
//   { "id": 22, "title": "每日斯多卡", "author": "瑞安·霍利迪", "coverImage": "/images/renzhitianxing.jpg", "amazonUrl": "#" },
//   { "id": 23, "title": "超级成功商业蓝图", "author": "基思·J·坎宁安", "coverImage": "/images/renzhitianxing.jpg", "amazonUrl": "#" },
//   { "id": 24, "title": "创新与流浪", "author": "沃尔特·艾萨克森", "coverImage": "/images/renzhitianxing.jpg", "amazonUrl": "#" },
  { "id": 25, "title": "如何赢得朋友与影响他人", "author": "戴尔·卡耐基", "coverImage": "/images/renzhitianxing.jpg", "amazonUrl": "#" },
//   { "id": 26, "title": "Dotcom秘密", "author": "拉塞尔·布伦森", "coverImage": "/images/renzhitianxing.jpg", "amazonUrl": "#" },
//   { "id": 27, "title": "现实变换术", "author": "瓦迪姆·泽兰", "coverImage": "/images/renzhitianxing.jpg", "amazonUrl": "#" },
//   { "id": 28, "title": "五步半品牌塑造", "author": "迈克尔·约翰逊", "coverImage": "/images/renzhitianxing.jpg", "amazonUrl": "#" },
  { "id": 29, "title": "美丽新世界", "author": "阿尔多斯·赫胥黎", "coverImage": "/images/meilixinshijie.jpg", "amazonUrl": "#" },
  { "id": 30, "title": "增长黑客", "author": "肖恩·埃利斯和摩根·布朗", "coverImage": "/images/zengzhangheike.jpg", "amazonUrl": "#" },
  { "id": 31, "title": "生命3.0", "author": "马克斯·泰格马克", "coverImage": "/images/shengming30.jpg", "amazonUrl": "#" },
//   { "id": 32, "title": "精通", "author": "罗伯特·格林", "coverImage": "/images/renzhitianxing.jpg", "amazonUrl": "#" },
//   { "id": 33, "title": "谈判力", "author": "克里斯·沃斯", "coverImage": "/images/renzhitianxing.jpg", "amazonUrl": "#" },
  { "id": 34, "title": "富甲美国", "author": "萨姆·沃尔顿、约翰·休伊", "coverImage": "/images/fujiameiguo.jpg", "amazonUrl": "#" },
  { "id": 35, "title": "鞋狗", "author": "菲尔·奈特", "coverImage": "/images/xiegou.jpg", "amazonUrl": "#" },
  { "id": 36, "title": "道德经", "author": "老子", "coverImage": "/images/daodejing.png", "amazonUrl": "#" },
  { "id": 37, "title": "超级智能", "author": "尼克·博斯特罗姆", "coverImage": "/images/chaojizhineng.jpg", "amazonUrl": "#" },
//   { "id": 38, "title": "炼金术士", "author": "保罗·柯艾略", "coverImage": "/images/renzhitianxing.jpg", "amazonUrl": "#" },
//   { "id": 39, "title": "五轮书", "author": "宫本武藏", "coverImage": "/images/renzhitianxing.jpg", "amazonUrl": "#" },
  { "id": 40, "title": "自私的基因", "author": "理查德·道金斯", "coverImage": "/images/zisidejiyin.jpg", "amazonUrl": "#" },
  { "id": 41, "title": "思考致富", "author": "拿破仑·希尔", "coverImage": "/images/sikaozhifu.jpg", "amazonUrl": "#" },
//   { "id": 42, "title": "从零到一", "author": "彼得·蒂尔与布莱克·马斯特斯", "coverImage": "/images/renzhitianxing.jpg", "amazonUrl": "#" },
//   { "id": 43, "title": "突破性广告", "author": "尤金·M·施瓦茨", "coverImage": "/images/renzhitianxing.jpg", "amazonUrl": "#" },
  { "id": 44, "title": "四个约定", "author": "唐·米格尔·鲁伊兹", "coverImage": "/images/sigeyueding.jpg", "amazonUrl": "#" },
//   { "id": 45, "title": "简单数字，直言不讳，大利润", "author": "格雷格·克拉布特", "coverImage": "/images/renzhitianxing.jpg", "amazonUrl": "#" },
  { "id": 46, "title": "我们为什么要睡觉", "author": "马修·沃克", "coverImage": "/images/womenweishenmeyaoshuijiao.jpg", "amazonUrl": "#" },
//   { "id": 47, "title": "沙丘", "author": "弗兰克·赫伯特", "coverImage": "/images/renzhitianxing.jpg", "amazonUrl": "#" },
//   { "id": 48, "title": "怀疑论者的宇宙指南", "author": "史蒂芬·诺维拉", "coverImage": "/images/renzhitianxing.jpg", "amazonUrl": "#" },
//   { "id": 49, "title": "原始品牌塑造", "author": "帕特里克·汉伦", "coverImage": "/images/renzhitianxing.jpg", "amazonUrl": "#" },
//   { "id": 50, "title": "伟大的引导", "author": "迈克尔·马斯特森", "coverImage": "/images/renzhitianxing.jpg", "amazonUrl": "#" }
])

useHead({
  title: '50本推荐书籍 - Escaping Ordinary'
})
</script>

<style scoped>
.books-page {
  min-height: 100vh;
  background: white;
  color: #333;
}


/* 主要内容 */
.main-content {
  padding: 3rem 2rem;
  margin-top: 0;
}

.content-container {
  max-width: 1400px;
  margin: 0 auto;
}

.page-title {
  font-size: 3rem;
  font-weight: 700;
  color: #1976d2;
  text-align: center;
  margin-bottom: 2rem;
}

.intro-section {
  max-width: 900px;
  margin: 0 auto 4rem;
  text-align: center;
}

.intro-text {
  font-size: 1rem;
  line-height: 1.8;
  color: #666;
  margin-bottom: 1rem;
}

/* 书籍网格 */
.books-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.book-card {
  display: flex;
  flex-direction: column;
  background: white;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s, box-shadow 0.3s;
}

.book-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}


.book-cover {
  width: 100%;
  aspect-ratio: 2/3;
  background: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 1rem;
  box-sizing: border-box;
}

.book-cover img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  background: #e0e0e0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #999;
  font-size: 14px;
}

.book-info {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.book-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: #333;
  margin: 0;
  line-height: 1.4;
}

.book-author {
  font-size: 0.9rem;
  color: #666;
  margin: 0;
}

.amazon-btn {
  background: #000;
  color: white;
  text-decoration: none;
  padding: 0.6rem 1rem;
  font-size: 12px;
  font-weight: 600;
  text-align: center;
  border-radius: 4px;
  margin-top: 0.5rem;
  transition: background 0.3s;
  display: block;
}

.amazon-btn:hover {
  background: #333;
}


/* 响应式设计 */
@media (max-width: 1024px) {
  .books-grid {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1.5rem;
  }
}

@media (max-width: 768px) {
  .page-title {
    font-size: 2rem;
  }

  .books-grid {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 1rem;
  }

  .main-content {
    padding: 2rem 1rem;
  }
}
</style>

