/* <div class="content-wrapper" style="min-height: 268px;"></div>; */

import Vue from "../../../utils/vue";

const name = "NlyCollapseMain";

export const NlyCollapseMain = Vue.extend({
  name: name,
  created() {},
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
