import Vue from "../../utils/vue";

const name = "NlyLog";

export const NlyLog = Vue.extend({
  name: name,
  render(h) {
    return h(
      "div",
      {
        staticClass: "nly-log"
      },
      [
        h(
          "div",
          {
            staticClass: "nly-log-container"
          },
          this.$slots.default
        )
      ]
    );
  }
});
