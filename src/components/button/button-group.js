import Vue from "../utils/vue";
import { NlyButtonGroupMixins } from "../mixins/button-group-mixins";

const name = "NlyButtonGroup";

export const NlyButtonGroup = Vue.extend({
  name: name,
  mixins: [NlyButtonGroupMixins],
  render(h) {
    return h(
      this.customTag,
      {
        class: [this.customVertical, this.customSize]
      },
      this.$slots.default
    );
  }
});
