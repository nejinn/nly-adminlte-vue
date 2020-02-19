import Vue from "../utils/vue";

export var NlyNavbarNav = Vue.extend({
  name: "NlyNavbarNav",
  render(h) {
    return h(
      "ul",
      {
        staticClass: "navbar-nav"
      },
      this.$slots.default
    );
  }
});
