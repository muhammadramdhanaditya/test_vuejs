import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginView from '../views/LoginView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'loginview',
    component: LoginView
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('../views/home/IndexView.vue')
  },
  // kemitraan
  {
    path: '/principal',
    name: 'principal',
    component: () => import('../views/kemitraan/PrincipalView.vue')
  },
  {
    path: '/agen',
    name: 'agen',
    component: () => import('../views/kemitraan/AgenView.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
