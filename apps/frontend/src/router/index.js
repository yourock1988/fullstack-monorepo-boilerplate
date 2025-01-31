import { createWebHistory, createRouter } from 'vue-router'

import HomeView from '@/pages/PageHome.vue'
import StudentsView from '@/pages/PageStudents.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/students', component: StudentsView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
