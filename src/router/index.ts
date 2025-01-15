import { createRouter, createWebHistory } from 'vue-router'

import AboutView from '../screens/AboutView.vue'
import HomeView from '../screens/HomeView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
        },
        {
            path: '/about',
            name: 'about',
            component: AboutView,
        },
    ],
})

export default router
