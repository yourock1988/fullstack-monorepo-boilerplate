import { createWebHistory, createRouter } from 'vue-router'

import PageProducts from '@/pages/PageProducts.vue'
import PageFaceMain from '../pages/PageFaceMain.vue'
import PageProduct from '../pages/PageProduct.vue'

const routes = [
  {
    path: '/',
    component: PageFaceMain,
    children: [
      {
        path: 'products',
        component: PageProducts,
      },
      {
        path: 'product/:id',
        component: PageProduct,
        props: true,
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
