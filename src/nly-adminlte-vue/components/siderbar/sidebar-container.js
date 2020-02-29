import Vue from "../../utils/vue";

import {
  nlyGetOptionsByValueInclusion,
  nlyGetOptionsByKeyEqual
} from "../../utils/get-options";

import {
  sidebarElevationOptions,
  sidebarContainerVariantOpitons
} from "../../utils/nly-config";

const name = "NlySidebarContainer";

export const NlySidebarContainer = Vue.extend({
  name: name,
  props: {
    variant: {
      type: String,
      default: "dark-primary"
    },
    hover: {
      type: Boolean,
      default: true
    },
    elevation: {
      type: String,
      default: "xl"
    }
  },
  computed: {
    customVariant: function() {
      return nlyGetOptionsByValueInclusion(
        sidebarContainerVariantOpitons,
        this.variant
      );
    },
    customHover: function() {
      return this.hover ? "" : "sidebar-no-expand";
    },
    customElevation: function() {
      return nlyGetOptionsByKeyEqual(sidebarElevationOptions, this.elevation);
    }
  },
  render(h) {
    return h(
      "aside",
      {
        staticClass: "main-sidebar",
        class: [this.customVariant, this.customElevation, this.customHover]
      },
      this.$slots.default
    );
  }
});
