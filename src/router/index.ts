import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '@/pages/main.vue'
import AnimalPage from '@/pages/animal.vue'
import PaymentPage from '@/pages/payment.vue'
import GalleryPage from '@/pages/gallery-page.vue'
import PageNotFound from '@/pages/page404.vue'

const router = createRouter( {
  history: createWebHistory( import.meta.env.BASE_URL ),
  routes: [
    {
      path:'/',
      name: 'main',
      component: MainPage
    },
    {
      path:'/animal/:id',
      name: 'animal',
      component: AnimalPage,
      props: true
    },
    {
      path: '/payment',
      name: 'payment',
      component: PaymentPage
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: GalleryPage
    },
    {
      path:'/404',
      name: '404',
      component:PageNotFound
    },
    {
      path: '/:catchAll(.*)',
      redirect: { name: '404' }
    }
  ]
} )

export default router
