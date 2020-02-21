import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const index = () => import("../views/index");
const indextest = () => import("../views/indextest.vue");

const button = () => import("../components/button/button.vue");

const routes = [
  {
    path: "/",
    name: "Home",
    component: index
  },
  {
    path: "/test",
    name: "indextest",
    component: indextest
  },
  {
    path: "/button",
    name: "button",
    component: button
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
