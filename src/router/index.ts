import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '@/pages/main.vue'
import AnimalPage from '@/pages/animal.vue'

const router = createRouter( {
  history: createWebHistory( import.meta.env.BASE_URL ),
  routes: [
    {
      path:'/',
      name: 'main',
      component: MainPage
    },
    {
      path:'/:id',
      name: 'animal',
      component: AnimalPage,
      props: true
    }
  ]
} )

export default router
