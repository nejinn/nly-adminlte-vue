import Vue from "../../utils/vue";
import { NlyIcon } from "../icons/icon";
import { bgVariantOptions, bgGradientOptions } from "../../utils/nly-config";
import { nlyGetOptionsByKeyEqual } from "../../utils/get-options";

const name = "NlyInfoboxIcon";

export const NlyInfoboxIcon = Vue.extend({
  name: name,
  props: {
    icon: {
      type: String,
      required: true
    },
    bgVariant: {
      type: String
    },
    bgGradientVariant: {
      type: String
    },
    infoboxIconClass: {
      type: String
    }
  },
  computed: {
    customProps: function() {
      return {
        icon: this.icon,
        bgVariant: nlyGetOptionsByKeyEqual(bgVariantOptions, this.bgVariant),
        bgGradientVariant: nlyGetOptionsByKeyEqual(
          bgGradientOptions,
          this.bgGradientVariant
        ),
        infoboxIconClass: this.infoboxIconClass
      };
    }
  },
  render(h) {
    return h(
      "span",
      {
        staticClass: "info-box-icon",
        class: [
          this.customProps.infoboxIconClass,
          this.customProps.bgVariant,
          this.customProps.bgGradientVariant
        ]
      },
      [
        h(NlyIcon, {
          props: {
            icon: this.customProps.icon
          }
        })
      ]
    );
  }
});
