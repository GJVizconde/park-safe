import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../shared/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/counter',
      name: 'counter',
      component: () => import('../counter/views/CounterView.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../parkSafe/pages/UserRegister.vue')
    },
    {
      path: '/ticket-control',
      name: 'ticket-control',
      component: () => import('../parkSafe/pages/TicketControl.vue')
    },
    {
      path: '/ticket',
      name: 'ticket',
      component: () => import('../parkSafe/pages/UserTicket.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../parkSafe/pages/UserLogin.vue')
    },
    {
      path: '/register-vehicle',
      name: 'register-vehicle',
      component: () => import('../parkSafe/pages/VehicleRegister.vue')
    },
    {
      path: '/enter-vehicle',
      name: 'enter-vehicle',
      component: () => import('../parkSafe/pages/VehicleEnter.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: () => {
        console.log('Ruta no existe')

        return { name: 'home' }
      }
    }
  ]
})

export default router
