import Vue from "../../utils/vue";
import { nlyGetOptionsByKeyEqual } from "../../utils/get-options";

const name = "NlyNavbar";

const variantOpitons = {
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

export const NlyNavbar = Vue.extend({
  name: name,
  props: {
    //头部菜单
    header: {
      type: Boolean,
      default: false
    },
    expand: {
      type: String
    },
    variant: {
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
    },
    navbarClass: {
      type: String
    }
  },
  computed: {
    customNavbarHeader: function() {
      return this.header ? "main-header" : "";
    },
    customNavbarExpand: function() {
      return this.expand == "xl"
        ? "navbar-expand-xl"
        : this.expand == "lg"
        ? "navbar-expand-lg"
        : this.expand == "md"
        ? "navbar-expand-md"
        : this.expand == "sm"
        ? "navbar-expand-sm"
        : this.expand == "no"
        ? "navbar-no-expand"
        : "navbar-expand";
    },
    customnNvbarVariant: function() {
      return nlyGetOptionsByKeyEqual(variantOpitons, this.variant);
    },
    customNavbarFontSize: function() {
      return this.size == "sm" ? "text-sm" : this.size == "lg" ? "text-lg" : "";
    },
    customNavbarBorder: function() {
      return this.border ? "" : "border-bottom-0";
    },
    customNavbarClass: function() {
      return this.navbarClass;
    }
  },
  render(h) {
    return h(
      "nav",
      {
        staticClass: "navbar",
        class: [
          this.customNavbarHeader,
          this.customNavbarExpand,
          this.customnNvbarVariant,
          this.customNavbarFontSize,
          this.customNavbarBorder,
          this.customNavbarClass
        ]
      },
      this.$slots.default
    );
  }
});
