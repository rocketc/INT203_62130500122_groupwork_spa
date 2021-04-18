import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Photo from '../views/Photo.vue'
//  1. import PhotoList from "../vies/PhotoList.vue "

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
  // { 2.
  //   path:'/photolist',
  //   name:'PhotoList',
  //   components:PhotoList
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
