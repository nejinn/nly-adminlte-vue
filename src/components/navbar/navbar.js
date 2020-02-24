import Vue from "../utils/vue";

const name = "NlyNavbar";

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
    },
    sidebarClass: {
      type: String
    }
  },
  methods: {
    getVariants() {
      for (const variant in variantsOpitons) {
        if (variant == this.variants) {
          return variantsOpitons[variant];
        }
      }
    }
  },
  computed: {
    navbarHeaderClass: function() {
      return this.header ? "main-header" : "";
    },
    navbarExpandClass: function() {
      return this.expand == "xl"
        ? "navbar-expand-xl"
        : this.expand == "lg"
        ? "navbar-expand-lg"
        : this.expand == "md"
        ? "navbar-expand-lg"
        : this.expand == "sm"
        ? "navbar-expand-sm"
        : "navbar-expand";
    },
    navbarVariantsClass: function() {
      return this.getVariants();
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
        staticClass: "navbar",
        class: [
          this.navbarHeaderClass,
          this.navbarExpandClass,
          this.navbarVariantsClass,
          this.navbarFontSizeClass,
          this.navbarBorderClass
        ]
      },
      this.$slots.default
    );
  }
});
