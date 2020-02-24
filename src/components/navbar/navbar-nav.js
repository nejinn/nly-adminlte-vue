import Vue from "../utils/vue";

const name = "NlyNavbarNav";

export const NlyNavbarNav = Vue.extend({
  name: name,
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
