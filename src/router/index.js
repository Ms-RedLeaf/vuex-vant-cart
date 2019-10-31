import Vue from 'vue';
import VueRouter from 'vue-router';
import List from '../views/List.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'list',
    component: List,
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('../views/ShopCart.vue'),
  },
  {
    path: '/user',
    name: 'user',
    component: () => import('../views/User.vue'),
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: () => import('../views/Detail.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
