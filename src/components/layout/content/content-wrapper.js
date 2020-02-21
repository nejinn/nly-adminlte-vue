import Vue from "../../utils/vue";

export var NlyContentWrapper = Vue.extend({
  name: "NlyContentWrapper",
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
