import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import about2 from '@/components/pages/TopPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: '未定', // 特にここの命名は影響なし?
    component: about2
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
