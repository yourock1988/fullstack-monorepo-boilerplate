import { createWebHistory, createRouter } from 'vue-router'

import HomeView from '@/pages/PageHome.vue'
import PageStudents from '@/pages/PageStudents.vue'
import PageProducts from '@/pages/PageProducts.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/students', component: PageStudents },
  { path: '/products', component: PageProducts },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
