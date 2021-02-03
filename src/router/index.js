import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About'
import Test from '../components/Test'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/about',
    name:'About',
    component: About, Test
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
