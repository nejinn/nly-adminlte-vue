import Vue from "../../utils/vue";
import { textVariantOptions } from "../../utils/nly-config";
import { nlyGetOptionsByKeyEqual } from "../../utils/get-options";
const name = "NlyCardText";

export const NlyCardText = Vue.extend({
  name: name,
  props: {
    cardTextClass: {
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
        cardTextClass: this.cardTextClass,
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
        class: [this.customProps.cardTextClass, this.customProps.cardTextClass]
      },
      this.$slots.default
    );
  }
});
