import Vue from "../../utils/vue";
import { textVariantOptions } from "../../utils/nly-config";
import { nlyGetOptionsByKeyEqual } from "../../utils/get-options";

const name = "NlyCardTitle";

export const NlyCardTitle = Vue.extend({
  name: name,
  props: {
    textVariant: {
      type: String
    },
    cardTitleClass: {
      type: String
    },
    tag: {
      type: String,
      default: "h4"
    },
    left: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    customProps: function() {
      return {
        textVariant: nlyGetOptionsByKeyEqual(
          textVariantOptions,
          this.textVariant
        ),
        cardTitleClass: this.cardTitleClass,
        tag: this.tag,
        left: this.left ? "card-title-left" : ""
      };
    }
  },
  render(h) {
    return h(
      this.customProps.tag,
      {
        staticClass: "card-title",
        class: [
          this.customProps.textVariant,
          this.customProps.cardTitleClass,
          this.customProps.left
        ]
      },
      this.$slots.default
    );
  }
});
