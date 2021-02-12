import { createRouter, createWebHashHistory } from 'vue-router'
import RecetteDay from '../views/RecetteDay.vue'
import Recettes from "@/views/Recettes";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: RecetteDay
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
