import Vue from "../../utils/vue";

export var NlyWrapper = Vue.extend({
  name: "NlyWrapper",
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
