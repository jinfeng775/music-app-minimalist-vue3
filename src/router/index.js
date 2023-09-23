import { createRouter, createWebHistory } from "vue-router";
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'login',
            component: () => import('../views/login.vue')
        },
        {
            path: '/home',
            name: 'home',
            component: () => import('../views/home.vue')
        }
    ]
})
// 导出
export default router