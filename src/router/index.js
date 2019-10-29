import Vue from "vue";
import VueRouter from "vue-router";
import List from "../views/List.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "list",
    component: List
  },
  {
    path: "/cart",
    name: "cart",
    component: () => import(/* webpackChunkName: "about" */ "../views/ShopCart.vue")
  },
  {
    path: "/user",
    name: "user",
    component: () => import(/* webpackChunkName: "about" */ "../views/User.vue")
  },
  {
    path: "/detail/:id",
    name: "detail",
    component: () => import(/* webpackChunkName: "about" */ "../views/Detail.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
