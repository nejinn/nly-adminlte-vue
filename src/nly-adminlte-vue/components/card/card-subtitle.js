// * **** card-title ****
// * .card-title 基础类
// * .text-light 文字颜色

import Vue from "../../utils/vue";
import { textVariantOptions } from "../../utils/nly-config";
import { nlyGetOptionsByKeyEqual } from "../../utils/get-options";

const name = "NlyCardSubtitle";

export const NlyCardSubtitle = Vue.extend({
  name: name,
  props: {
    textVariant: {
      type: String
    },
    subtitleClass: {
      type: String
    },
    tag: {
      type: String,
      default: "h6"
    }
  },
  computed: {
    customProps: function() {
      return {
        textVariant: nlyGetOptionsByKeyEqual(
          textVariantOptions,
          this.textVariant
        ),
        subtitleClass: this.subtitleClass,
        tag: this.tag
      };
    }
  },
  render(h) {
    return h(
      this.customProps.tag,
      {
        staticClass: "card-subtitle",
        class: [this.customProps.textVariant, this.customProps.subtitleClass]
      },
      this.$slots.default
    );
  }
});
