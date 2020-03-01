import Vue from "../../utils/vue";
import { bgVariantOptions, sizeOptions } from "../../utils/nly-config";
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
    badgeClass: {
      type: String
    },
    tag: {
      type: String,
      default: "span"
    }
  },
  computed: {
    customProps: function() {
      return {
        size: nlyGetOptionsByKeyEqual(sizeOptions, this.size),
        variant: nlyGetOptionsByKeyEqual(bgVariantOptions, this.variant),
        tag: this.tag,
        badgeClass: this.badgeClass
      };
    }
  },
  render(h) {
    return h(
      this.customProps.tag,
      {
        staticClass: "badge",
        class: [
          this.customProps.variant,
          this.customProps.size,
          this.customProps.badgeClass
        ]
      },
      this.$slots.default
    );
  }
});
