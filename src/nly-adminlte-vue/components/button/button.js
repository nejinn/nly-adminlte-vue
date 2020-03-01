import Vue from "../../utils/vue";
import { NlyButtonMixins } from "../mixins/button-mixins";

const name = "NlyButton";

export const NlyButton = Vue.extend({
  name: name,
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
          this.customButtonClass,
          this.customBgVariant,
          this.customTool
        ],
        attrs: {
          type: this.customType
        }
      },
      this.$slots.default
    );
  }
});
