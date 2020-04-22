import Vue from "../../utils/vue";

import {
  textVariantOptions,
  bgVariantOptions,
  bgGradientOptions
} from "../../utils/nly-config";

import { nlyGetOptionsByKeyEqual } from "../../utils/get-options";

import {} from 

const name = "NlyCardBody";

export const NlyCardBody = Vue.extend({
  name: name,
  props: {
    bgVariant: {
      type: String
    },
    bgGradientVariant: {
      type: String
    },
    imgOverlay: {
      type: Boolean,
      default: false
    },
    textVariant: {
      type: String
    },
    cardBodyClass: {
      type: String
    },
    tag: {
      type: String,
      default: "div"
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
        textVariant: nlyGetOptionsByKeyEqual(
          textVariantOptions,
          this.textVariant
        ),
        imgOverlay: this.imgOverlay ? "card-img-overlay" : "",
        cardBodyClass: this.cardBodyClass,
        tag: this.tag
      };
    }
  },
  render(h) {
    return h(
      this.customProps.tag,
      {
        staticClass: "card-body",
        class: [
          this.customProps.bgVariant,
          this.customProps.bgGradientVariant,
          this.customProps.textVariant,
          this.customProps.imgOverlay,
          this.customProps.cardBodyClass
        ]
      },
      this.$slots.default
    );
  }
});
