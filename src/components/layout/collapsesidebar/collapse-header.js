import Vue from "../../utils/vue";
import { getOptionsByKeyEqual } from "../../utils/getOptions";
const variantsOpitons = {
  orange: "navbar-light navbar-orange",
  warning: "navbar-light navbar-warning",
  lightlight: "navbar-light",
  graygray: "navbar-dark navbar-gray",
  graydark: "navbar-dark navbar-gray-dark",
  darkdark: "navbar-dark",
  cyan: "navbar-dark navbar-cyan",
  teal: "navbar-dark navbar-teal",
  lightblue: "navbar-dark navbar-lightblue",
  navy: "navbar-dark navbar-navy",
  pink: "navbar-dark navbar-pink",
  purple: "navbar-dark navbar-purple",
  indigo: "navbar-dark navbar-indigo",
  danger: "navbar-dark navbar-danger",
  success: "navbar-dark navbar-success",
  info: "navbar-dark navbar-info",
  secondary: "navbar-dark navbar-secondary",
  primary: "navbar-dark navbar-primary",
  white: "navbar-light navbar-white"
};

export var NlyCollapseHeader = Vue.extend({
  name: "NlyCollapseHeader",
  props: {
    variants: {
      type: String,
      default: "white"
    },
    size: {
      type: String,
      default: ""
    },
    border: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    navbarVariantsClass: function() {
      return getOptionsByKeyEqual(variantsOpitons, this.variants);
    },
    navbarFontSizeClass: function() {
      return this.size == "sm" ? "text-sm" : this.size == "lg" ? "text-lg" : "";
    },
    navbarBorderClass: function() {
      return this.border ? "" : "border-bottom-0";
    }
  },
  render(h) {
    return h(
      "nav",
      {
        staticClass: "main-header navbar navbar-expand",
        class: [
          this.navbarVariantsClass,
          this.navbarFontSizeClass,
          this.navbarBorderClass
        ]
      },
      this.$slots.default
    );
  }
});
