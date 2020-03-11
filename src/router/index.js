import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const testcomponent = () => import("../views/example/testcomponent.vue");

const index = () => import("../views/index");

const container = () => import("../views/example/container.vue");
const grid = () => import("../views/example/grid.vue");
const nav = () => import("../views/example/nav.vue");
const navbar = () => import("../views/example/navbar.vue");
const collapse = () => import("../views/example/collapse.vue");
const link = () => import("../views/example/link.vue");
const button = () => import("../views/example/button.vue");
const switchBox = () => import("../views/example/switch.vue");
const card = () => import("../views/example/card.vue");
const badge = () => import("../views/example/badge.vue");
const table = () => import("../views/example/table.vue");
const toast = () => import("../views/example/toast.vue");
const spinner = () => import("../views/example/spinner.vue");
const progress = () => import("../views/example/progress.vue");
const timeline = () => import("../views/example/timeline.vue");

const routes = [
  {
    path: "/",
    name: "Home",
    component: index,
    children: [
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
        path: "/nav",
        name: "nav",
        component: nav
      },
      {
        path: "/collapse",
        name: "collapse",
        component: collapse
      },
      {
        path: "/link",
        name: "link",
        component: link
      },
      {
        path: "/button",
        name: "button",
        component: button
      },
      {
        path: "/switch",
        name: "switch",
        component: switchBox
      },
      {
        path: "/card",
        name: "card",
        component: card
      },
      {
        path: "/badge",
        name: "badge",
        component: badge
      },
      {
        path: "/table",
        name: "table",
        component: table
      },
      {
        path: "/test",
        name: "test",
        component: testcomponent
      },
      {
        path: "/toast",
        name: "toast",
        component: toast
      },
      {
        path: "/spinner",
        name: "spinner",
        component: spinner
      },
      {
        path: "/progress",
        name: "progress",
        component: progress
      },
      {
        path: "/timeline",
        name: "timeline",
        component: timeline
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
