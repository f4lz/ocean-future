import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '@/pages/main.vue'
import AnimalPage from '@/pages/animal.vue'
import TicketsPage from '@/pages/tickets.vue'
import GalleryPage from '@/pages/gallery-page.vue'
import PageNotFound from '@/pages/page-not-found.vue'

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
      path: '/tickets',
      name: 'tickets',
      component: TicketsPage
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: GalleryPage
    },
    {
      path: '/:catchAll(.*)',
      component: PageNotFound
    }
  ]
} )

router.afterEach( ( to, from ) => {
  const toDepth = to.path.split( '/' ).length
  const fromDepth = from.path.split( '/ ' ).length
  to.meta.transition = toDepth < fromDepth ? 'slide-right' : 'slide-left'
} )

export default router
