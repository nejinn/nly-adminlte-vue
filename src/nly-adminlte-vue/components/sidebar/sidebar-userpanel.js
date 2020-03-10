import Vue from "../../utils/vue";

const name = "NlySidebarUserpanel";

export const NlySidebarUserpanel = Vue.extend({
  name: name,
  render(h) {
    return h(
      "div",
      {
        staticClass: "user-panel"
      },
      this.$slots.default
    );
  }
});
