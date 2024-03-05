import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Profissionais from '../views/Profissionais.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/profissionais',
      name: 'profissionais',
      component: () => import('../views/Profissionais.vue')
    },
    {
      path: '/times',
      name: 'times',
      component: () => import('../views/Times.vue')
    }
  ]
})

export default router
