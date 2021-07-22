import { createRouter, createWebHistory } from 'vue-router'
import test from './../components/pages/test.vue'
import test2 from './../components/pages/test2.vue'

const routes = [
    {
        path: '/',
        name: 'teat',
        component: test,
    },
    {
        path: '/test2',
        name: 'teat2',
        component: test2,
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router