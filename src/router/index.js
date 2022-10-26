import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
  {
    path: '/orders',
    name: 'Orders',
    component: () => import('@/components/Orders/ordersComponent.vue')
  },
  {
    path: '/products',
    name: 'Products',
    component: () => import('@/components/Products/productsComponent.vue')
  }
]

const router = new Router({
  mode: 'history',
  routes,
});

export default router;
