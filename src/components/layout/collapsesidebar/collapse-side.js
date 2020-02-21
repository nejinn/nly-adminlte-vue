import Vue from "../../utils/vue";

import { getOptionsByValueInclusion } from "../../utils/getOptions";

const variantsOpitons = {
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

export var NlyCollapseSide = Vue.extend({
  name: "NlyCollapseSide",
  props: {
    variants: {
      type: String,
      default: "dark-primary"
    }
  },
  computed: {
    siderbarVariantsClass: function() {
      return getOptionsByValueInclusion(variantsOpitons, this.variants);
    }
  },
  render(h) {
    return h(
      "aside",
      {
        staticClass: "main-sidebar elevation-4",
        class: [this.siderbarVariantsClass]
      },
      this.$slots.default
    );
  }
});
