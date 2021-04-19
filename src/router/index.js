import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Photo from '../views/Photo.vue'
import Favorite from '../views/Favorite.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/photo',
    name: 'Photo',
    component: Photo
  },
  { 
    path:'/favorite',
    name:'Favorite',
    component: Favorite
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
