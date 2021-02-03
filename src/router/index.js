import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Recettes from "@/views/Recettes";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/recettes',
    name: 'Recettes',
    component: Recettes,
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
