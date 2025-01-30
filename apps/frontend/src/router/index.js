import { createWebHistory, createRouter } from 'vue-router'

import HomeView from '@/pages/HomeView.vue'
import StudentsView from '@/pages/StudentsView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/students', component: StudentsView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
