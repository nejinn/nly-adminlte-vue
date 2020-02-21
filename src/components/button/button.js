import Vue from "../utils/vue";
import { NlyButtonMixins } from "../mixins/button-mixins";
export var NlyButton = Vue.extend({
  name: "NlyButton",
  mixins: [NlyButtonMixins],
  render(h) {
    return h(
      "button",
      {
        staticClass: "btn",
        class: [
          this.customBlock,
          this.customVariant,
          this.customGradient,
          this.customShape,
          this.customSize,
          this.customDisabled,
          this.customPressed,
          this.customButtonClass
        ],
        attrs: {
          type: this.customType
        }
      },
      this.$slots.default
    );
  }
});
