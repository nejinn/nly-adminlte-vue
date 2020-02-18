import Vue from "../../utils/vue";
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
  computed: {
    navbarVariantsClass: function() {
      if (this.variants == "orange") {
        return "navbar-light navbar-orange";
      } else if (this.variants == "warning") {
        return "navbar-light navbar-warning";
      } else if (this.variants == "light") {
        return "navbar-light";
      } else if (this.variants == "gray") {
        return "navbar-dark navbar-gray";
      } else if (this.variants == "gray-dark") {
        return "navbar-dark navbar-gray-dark";
      } else if (this.variants == "dark") {
        return "navbar-dark";
      } else if (this.variants == "cyan") {
        return "navbar-dark navbar-cyan";
      } else if (this.variants == "teal") {
        return "navbar-dark navbar-teal";
      } else if (this.variants == "lightblue") {
        return "navbar-dark navbar-lightblue";
      } else if (this.variants == "navy") {
        return "navbar-dark navbar-navy";
      } else if (this.variants == "pink") {
        return "navbar-dark navbar-pink";
      } else if (this.variants == "purple") {
        return "navbar-dark navbar-purple";
      } else if (this.variants == "indigo") {
        return "navbar-dark navbar-indigo";
      } else if (this.variants == "danger") {
        return "navbar-dark navbar-danger";
      } else if (this.variants == "success") {
        return "navbar-dark navbar-success";
      } else if (this.variants == "info") {
        return "navbar-dark navbar-info";
      } else if (this.variants == "secondary") {
        return "navbar-dark navbar-secondary";
      } else if (this.variants == "primary") {
        return "navbar-dark navbar-primary";
      } else {
        return "navbar-light navbar-white";
      }
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
