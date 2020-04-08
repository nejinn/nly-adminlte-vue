import Vue from "../../utils/vue";
import { bgVariantOptions, bgGradientOptions } from "../../utils/nly-config";
import { nlyGetOptionsByKeyEqual } from "../../utils/get-options";

const name = "NlyTimelineLabel";

export const NlyTimelineLabel = Vue.extend({
  name: name,
  props: {
    bgVariant: {
      type: String
    },
    bgGradientVariant: {
      type: String
    },
    tag: {
      type: String,
      default: "div"
    },
    labelClass: {
      type: String
    },
    spanClass: {
      type: String
    }
  },
  computed: {
    customProps: function() {
      return {
        bgVariant: nlyGetOptionsByKeyEqual(bgVariantOptions, this.bgVariant),
        bgGradientVariant: nlyGetOptionsByKeyEqual(
          bgGradientOptions,
          this.bgGradientVariant
        ),
        tag: this.tag,
        labelClass: this.labelClass,
        spanClass: this.spanClass
      };
    }
  },
  render(h) {
    return h(
      this.customProps.tag,
      {
        staticClass: "time-label",
        class: [this.customProps.labelClass]
      },
      [
        h(
          "span",
          {
            class: [
              this.customProps.bgVariant,
              this.customProps.bgGradientVariant,
              this.customProps.spanClass
            ]
          },
          this.$slots.default
        )
      ]
    );
  }
});
