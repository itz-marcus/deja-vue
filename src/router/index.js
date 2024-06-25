import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CarsView from '../views/CarsView.vue'
import GamingConsolesView from '../views/GamingConsolesView.vue'
import FriendsView from '../views/FriendsView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/cars',
    name: 'cars',
    component: CarsView
  },
  {
    path: '/gamingConsoles',
    name: 'gamingConsoles',
    component: GamingConsolesView
  },
  {
    path: '/friends',
    name: 'friends',
    component: FriendsView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
