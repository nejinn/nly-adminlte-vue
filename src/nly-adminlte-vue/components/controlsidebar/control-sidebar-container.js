import Vue from "../../utils/vue";

const name = "NlyControlSidebarContainer";

export const NlyControlSidebarContainer = Vue.extend({
  name: name,
  props: {
    variant: {
      type: String,
      default: "control-sidebar-dark"
    }
  },
  render(h) {
    return h(
      "aside",
      {
        staticClass: "control-sidebar",
        class: this.variant
      },
      this.$slots.default
    );
  }
});
