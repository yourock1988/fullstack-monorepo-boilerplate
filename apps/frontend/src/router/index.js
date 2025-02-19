import { createWebHistory, createRouter } from 'vue-router'

import PageProducts from '@/pages/PageProducts.vue'

const routes = [
  // { path: '/', component: HomeView },
  { path: '/products', component: PageProducts },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
