// Import Vue and Vue Router
import { createRouter, createWebHistory } from 'vue-router'

// Import components for each page
import HomePage from '@/components/HomePage.vue'
import GamePage from '@/components/GamePage.vue'
import BankPage from '@/components/BankPage.vue'
import MarketPage from '@/components/MarketPage.vue'
import PromotePage from '@/components/PromotePage.vue'
import TestPage from '@/components/TestPage.vue'

const routes = [
    { path: '/', component: HomePage },
    { path: '/game', component: GamePage },
    { path: '/bank', component: BankPage },
    { path: '/market', component: MarketPage },
    { path: '/promote', component: PromotePage },
    { path: '/test', component: TestPage }
]
// Create the router instance
const router = createRouter({
  history: createWebHistory(),
    routes
})

export default router
