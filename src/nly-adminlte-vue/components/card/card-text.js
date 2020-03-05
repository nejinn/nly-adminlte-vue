import Vue from "../../utils/vue";
import { textVariantOptions } from "../../utils/nly-config";
import { nlyGetOptionsByKeyEqual } from "../../utils/get-options";
const name = "NlyCardTool";

export const NlyCardTool = Vue.extend({
  name: name,
  props: {
    textClass: {
      type: String
    },
    tag: {
      type: String,
      default: "p"
    },
    textVariant: {
      type: String
    }
  },
  computed: {
    customProps() {
      return {
        textClass: this.textClass,
        tag: this.tag,
        textVariant: nlyGetOptionsByKeyEqual(
          textVariantOptions,
          this.textVariant
        )
      };
    }
  },
  render(h) {
    return h(
      this.customProps.tag,
      {
        staticClass: "card-text",
        class: [this.customProps.textClass, this.customProps.textVariant]
      },
      this.$slots.default
    );
  }
});
