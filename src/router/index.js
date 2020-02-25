import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const index = () => import("../views/index");

const container = () => import("../views/example/container.vue");
const grid = () => import("../views/example/grid.vue");
const navbar = () => import("../views/example/navbar.vue");
const collapse = () => import("../views/example/collapse.vue");

const routes = [
  {
    path: "/",
    name: "Home",
    component: index
  },
  {
    path: "/container",
    name: "container",
    component: container
  },
  {
    path: "/grid",
    name: "grid",
    component: grid
  },
  {
    path: "/navbar",
    name: "navbar",
    component: navbar
  },
  {
    path: "/collapse",
    name: "collapse",
    component: collapse
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
