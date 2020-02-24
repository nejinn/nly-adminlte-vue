import Vue from "../../utils/vue";

const name = "NlyWrapper";

export const NlyWrapper = Vue.extend({
  name: name,
  render(h) {
    return h(
      "div",
      {
        staticClass: "wrapper"
      },
      this.$slots.default
    );
  }
});
