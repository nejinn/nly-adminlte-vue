import Vue from "../utils/vue";
import { NlyButtonGroupMixins } from "../mixins/button-group-mixins";

export var NlyButtonGroup = Vue.extend({
  name: "NlyButtonGroup",
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
