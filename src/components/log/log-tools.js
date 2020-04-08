import Vue from "../../utils/vue";

const name = "NlyLogTools";

export const NlyLogTools = Vue.extend({
  name: name,
  render(h) {
    return h(
      "div",
      {
        staticClass: "nly-log-tools"
      },
      this.$slots.default
    );
  }
});
