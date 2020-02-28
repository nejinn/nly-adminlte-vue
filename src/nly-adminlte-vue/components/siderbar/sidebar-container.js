import Vue from "../../utils/vue";

import {
  nlyGetOptionsByValueInclusion,
  nlyGetOptionsByKeyEqual
} from "../../utils/get-options";

const name = "NlySidebarContainer";

const variantOpitons = {
  darkPrimary: "sidebar-dark-primary",
  darkWarning: "sidebar-dark-warning",
  darkInfo: "sidebar-dark-info",
  darkDanger: "sidebar-dark-danger",
  darkSuccess: "sidebar-dark-success",
  darkindigo: "sidebar-dark-indigo",
  darkLightblue: "sidebar-dark-lightblue",
  darkNavy: "sidebar-dark-navy",
  darkPurple: "sidebar-dark-purple",
  darkFuchsia: "sidebar-dark-fuchsia",
  darkPink: "sidebar-dark-pink",
  darkMaroon: "sidebar-dark-maroon",
  darkOrange: "sidebar-dark-orange",
  darkLime: "sidebar-dark-lime",
  darkTeal: "sidebar-dark-teal",
  darkOlive: "sidebar-dark-olive",
  lightPrimary: "sidebar-light-primary",
  lightWarning: "sidebar-light-warning",
  lightInfo: "sidebar-light-info",
  lightDanger: "sidebar-light-danger",
  lightSuccess: "sidebar-light-success",
  lightindigo: "sidebar-light-indigo",
  lightLightblue: "sidebar-light-lightblue",
  lightNavy: "sidebar-light-navy",
  lightPurple: "sidebar-light-purple",
  lightFuchsia: "sidebar-light-fuchsia",
  lightPink: "sidebar-light-pink",
  lightMaroon: "sidebar-light-maroon",
  lightOrange: "sidebar-light-orange",
  lightLime: "sidebar-light-lime",
  lightTeal: "sidebar-light-teal",
  lightOlive: "sidebar-light-olive"
};

const elevationOptions = {
  sm: "elevation-1",
  md: "elevation-2",
  lg: "elevation-3",
  xl: "elevation-4"
};

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
      return nlyGetOptionsByValueInclusion(variantOpitons, this.variant);
    },
    customHover: function() {
      return this.hover ? "" : "sidebar-no-expand";
    },
    customElevation: function() {
      return nlyGetOptionsByKeyEqual(elevationOptions, this.elevation);
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
