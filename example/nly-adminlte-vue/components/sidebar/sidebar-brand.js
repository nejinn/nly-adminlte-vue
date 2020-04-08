import Vue from "../../utils/vue";
import { nlyGetOptionsByKeyEqual } from "../../utils/get-options";
import { NlyLink, propsFactory as linkPropsFactory } from "../link/link";
import {
  textSizeOptions,
  sidebarBrandVariantOptions,
  sidebarElevationOptions
} from "../../utils/nly-config";

export const props = linkPropsFactory();

const name = "NlySidebarBrand";

export const NlySidebarBrand = Vue.extend({
  name: name,
  props: {
    size: {
      type: String
    },
    variant: {
      type: String
    },
    elevation: {
      type: String
    },
    ...props
  },
  computed: {
    customSize: function() {
      const fontSize = nlyGetOptionsByKeyEqual(textSizeOptions, this.size);
      return fontSize;
    },
    customVariant: function() {
      return nlyGetOptionsByKeyEqual(sidebarBrandVariantOptions, this.variant);
    },
    customElevation: function() {
      return nlyGetOptionsByKeyEqual(sidebarElevationOptions, this.elevation);
    },
    computedProps() {
      return { ...this.$props };
    }
  },
  render(h) {
    return h(
      NlyLink,
      {
        staticClass: "brand-link",
        class: [this.customSize, this.customVariant, this.customElevation],
        props: this.computedProps
      },
      this.$slots.default
    );
  }
});
