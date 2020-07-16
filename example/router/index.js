import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const index = () => import("../views/index");
const test = () => import("../views/example/test.vue");
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
const breadcrumb = () => import("../views/example/breadcrumb.vue");
const infobox = () => import("../views/example/infobox.vue");
const tooltip = () => import("../views/example/tooltip.vue");
const pagination = () => import("../views/example/pagination.vue");
const forminput = () => import("../views/example/form-input.vue");
const formfeedback = () => import("../views/example/form-feedback.vue");

const listgroup = () => import("../views/example/listgroup.vue");

const modal = () => import("../views/example/modal.vue");

const log = () => import("../views/example/log.vue");

const topNav = () => import("../views/example/topNav.vue");
const boxed = () => import("../views/example/boxed.vue");
const fixedSidebar = () => import("../views/example/fixedSidebar.vue");
const fixedNavbar = () => import("../views/example/fixedNavbar.vue");

const tabs = () => import("../views/example/tab.vue");

const dropdown = () => import("../views/example/dropdown.vue");

const formGroup = () => import("../views/example/form-group.vue");
const popover = () => import("../views/example/popover.vue");
const inputgroup = () => import("../views/example/input-group.vue");

const routes = [
  {
    path: "/",
    name: "Home",
    component: index,
    children: [
      {
        path: "/tabs",
        name: "tabs",
        component: tabs
      },
      {
        path: "/inputgroup",
        name: "inputgroup",
        component: inputgroup
      },
      {
        path: "/dropdown",
        name: "dropdown",
        component: dropdown
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
      },
      {
        path: "/breadcrumb",
        name: "breadcrumb",
        component: breadcrumb
      },
      {
        path: "/infobox",
        name: "infobox",
        component: infobox
      },
      {
        path: "/tooltip",
        name: "tooltip",
        component: tooltip
      },
      {
        path: "/pagination",
        name: "pagination",
        component: pagination
      },
      {
        path: "/forminput",
        name: "forminput",
        component: forminput
      },
      {
        path: "/formfeedback",
        name: "formfeedback",
        component: formfeedback
      },
      {
        path: "/log",
        name: "log",
        component: log
      },
      {
        path: "/listgroup",
        name: "listgroup",
        component: listgroup
      },
      {
        path: "/modal",
        name: "modal",
        component: modal
      },
      {
        path: "formgroup",
        name: "formGroup",
        component: formGroup
      },
      {
        path: "popover",
        name: "popover",
        component: popover
      },
      {
        path: "/test",
        name: "test",
        component: test
      }
    ]
  },
  {
    path: "/top-nav",
    name: "topNav",
    component: topNav
  },
  {
    path: "/boxed",
    name: "boxed",
    component: boxed
  },
  {
    path: "/fixed-sidebar",
    name: "fixedSidebar",
    component: fixedSidebar
  },
  {
    path: "/fixed-navbar",
    name: "fixedNavbar",
    component: fixedNavbar
  }
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes
});

export default router;
