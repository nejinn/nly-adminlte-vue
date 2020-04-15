import Vue from "../../utils/vue";

import { nlyGetOptionsByKeyEqual } from "../../utils/get-options";

import {
  sidebarElevationOptions,
  sidebarContainerVariantOpitons
} from "../../utils/nly-config";

const name = "NlyWrapperSidebar";

export const NlyWrapperSidebar = Vue.extend({
  name: name,
  props: {
    variant: {
      type: String,
      default: "darkPrimary"
    },
    hover: {
      type: Boolean,
      default: true
    },
    elevation: {
      type: String,
      default: "xl"
    },
    tag: {
      type: String,
      default: "aside"
    }
  },
  computed: {
    customVariant: function() {
      return nlyGetOptionsByKeyEqual(
        sidebarContainerVariantOpitons,
        this.variant
      );
    },
    customHover: function() {
      return this.hover ? "" : "sidebar-no-expand";
    },
    customElevation: function() {
      return nlyGetOptionsByKeyEqual(sidebarElevationOptions, this.elevation);
    },
    customTag: function() {
      return this.tag;
    }
  },
  render(h) {
    return h(
      this.customTag,
      {
        staticClass: "main-sidebar",
        class: [this.customVariant, this.customElevation, this.customHover]
      },
      this.$slots.default
    );
  }
});
