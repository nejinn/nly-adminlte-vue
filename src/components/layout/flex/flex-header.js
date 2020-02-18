import Vue from "../../utils/vue";
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

export var NlyFlexHeader = Vue.extend({
  name: "NlyFlexHeader",
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
    navbarVariantsClass: function() {
      return this.getVariants();
    },
    navbarFontSizeClass: function() {
      if (this.size == "sm") {
        return "text-sm";
      } else if (this.size == "lg") {
        return "text-lg";
      } else {
        return "";
      }
    },
    navbarBorderClass: function() {
      if (this.border == false) {
        return "border-bottom-0";
      } else {
        return "";
      }
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
