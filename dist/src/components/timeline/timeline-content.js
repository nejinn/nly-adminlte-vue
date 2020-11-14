import Vue from "../../utils/vue";
import { bgVariantOptions, bgGradientOptions } from "../../utils/nly-config";
import { nlyGetOptionsByKeyEqual } from "../../utils/get-options";

const name = "NlyTimelineContent";

export const NlyTimelineContent = Vue.extend({
  name: name,
  inheritAttrs: false,
  props: {
    icon: {
      type: String
    },
    bgVariant: {
      type: String
    },
    bgGradientVariant: {
      type: String
    },
    iconClass: {
      type: String
    },
    timelineContentClass: {
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
        icon: this.icon,
        iconClass: this.iconClass
      };
    }
  },
  render(h) {
    const timelineContentArray = () => {
      if (this.icon) {
        return h("div", [
          h("i", {
            class: [
              this.customProps.icon,
              this.customProps.bgVariant,
              this.customProps.bgGradientVariant,
              this.customProps.iconClass
            ]
          }),
          this.$slots.default
        ]);
      } else {
        return h("div", this.$slots.default);
      }
    };
    return timelineContentArray();
  }
});
