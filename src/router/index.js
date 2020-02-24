import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const index = () => import("../views/index");

const button = () => import("../components/button/button.vue");

const container = () => import("../views/example/container.vue");
const grid = () => import("../views/example/grid.vue");

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
