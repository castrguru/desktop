import { createRouter, createWebHistory } from 'vue-router'

import AboutView from '../screens/AboutView.vue'
import ComponentsView from '../screens/ComponentsView.vue'
import ConciergeView from '../screens/ConciergeView.vue'
import DeployView from '../screens/DeployView.vue'
import ElementsView from '../screens/ElementsView.vue'
import FrameifyView from '../screens/FrameifyView.vue'
import GuidesView from '../screens/GuidesView.vue'
import HomeView from '../screens/HomeView.vue'
import KitsView from '../screens/KitsView.vue'
import MonetizeView from '../screens/MonetizeView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    // scrollBehavior(to, from, savedPosition) {
    scrollBehavior() {
        return {
            top: 0,
            behavior: 'smooth',
        }
        // if (savedPosition) {
        //     return savedPosition
        // } else {
        //     return { top: 0 }
        // }
    },
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
        {
            path: '/components',
            name: 'components',
            component: ComponentsView,
        },
        {
            path: '/concierge',
            name: 'concierge',
            component: ConciergeView,
        },
        {
            path: '/deploy',
            name: 'deploy',
            component: DeployView,
        },
        {
            path: '/elements',
            name: 'elements',
            component: ElementsView,
        },
        {
            path: '/frameify',
            name: 'frameify',
            component: FrameifyView,
        },
        {
            path: '/guides',
            name: 'guides',
            component: GuidesView,
        },
        {
            path: '/kits',
            name: 'kits',
            component: KitsView,
        },
        {
            path: '/monetize',
            name: 'monetize',
            component: MonetizeView,
        },
    ],
})

export default router
