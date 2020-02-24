import Vue from "../../utils/vue";

const name = "NlyContentWrapper";

export const NlyContentWrapper = Vue.extend({
  name: name,
  render(h) {
    return h(
      "div",
      {
        staticClass: "content-wrapper"
      },
      this.$slots.default
    );
  }
});
