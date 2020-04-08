import Vue from "../../utils/vue";
import {
  bgVariantOptions,
  textSizeOptions,
  badgeVariantOptions,
  bgGradientOptions
} from "../../utils/nly-config";
import { nlyGetOptionsByKeyEqual } from "../../utils/get-options";

const name = "NlyBadge";

export const NlyBadge = Vue.extend({
  name: name,
  props: {
    size: {
      type: String
    },
    variant: {
      type: String
    },
    bgVariant: {
      type: String
    },
    bgGradientVariant: {
      type: String
    },
    badgeClass: {
      type: String
    },
    tag: {
      type: String,
      default: "span"
    },
    pill: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    customProps: function() {
      return {
        size: nlyGetOptionsByKeyEqual(textSizeOptions, this.size),
        bgVariant: nlyGetOptionsByKeyEqual(bgVariantOptions, this.bgVariant),
        tag: this.tag,
        badgeClass: this.badgeClass,
        pill: this.pill ? "badge-pill" : "",
        variant: nlyGetOptionsByKeyEqual(badgeVariantOptions, this.variant),
        bgGradientVariant: nlyGetOptionsByKeyEqual(
          bgGradientOptions,
          this.bgGradientVariant
        )
      };
    }
  },
  render(h) {
    return h(
      this.customProps.tag,
      {
        staticClass: "badge",
        class: [
          this.customProps.bgVariant,
          this.customProps.size,
          this.customProps.badgeClass,
          this.customProps.pill,
          this.customProps.variant,
          this.customProps.bgGradientVariant
        ]
      },
      this.$slots.default
    );
  }
});
