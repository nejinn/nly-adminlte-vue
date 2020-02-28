import Vue from "../../utils/vue";

const name = "NlySidebarOverlay";

export const NlySidebarOverlay = Vue.extend({
  name: name,
  render(h) {
    return h("div", {
      attrs: {
        id: "sidebar-overlay"
      }
    });
  }
});
