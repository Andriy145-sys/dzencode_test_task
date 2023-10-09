import Vue from 'vue'
import Router from 'vue-router'
import PageTransition from '@/components/PageTransition'
Vue.use(Router)

const routes = [

  {
    path: '/',
    component: PageTransition,
    children: [
      {
        path: '/',
        redirect: '/orders'
      },
      {
        path: '/orders',
        component: () => import('@/components/Orders/ordersComponent.vue'),
      },
      {
        path: '/products',
        component: () => import('@/components/Products/productsComponent.vue'),
      },
    ],
  },
]

const router = new Router({
  mode: 'history',
  routes,
});

export default router;
