import Vue from "../../utils/vue";
import { nlyGetOptionsByKeyEqual } from "../../utils/get-options";
import { navbarVariantOpitons, textSizeOptions } from "../../utils/nly-config";

const name = "NlyWrapperHeader";

export const NlyWrapperHeader = Vue.extend({
  name: name,
  props: {
    expand: {
      type: String
    },
    variant: {
      type: String,
      default: "white"
    },
    dark: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: ""
    },
    border: {
      type: Boolean,
      default: true
    },
    wrapperHeaderClass: {
      type: String
    },
    tag: {
      type: String,
      default: "header"
    },
    nav: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    customTag() {
      return this.tag;
    },
    customNav() {
      return this.nav ? "navbar" : "";
    },
    customNavbarExpand: function() {
      if (this.nav) {
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
          : this.expand == "expand"
          ? "navbar-expand"
          : "";
      } else {
        return "";
      }
    },
    customnNvbarVariant: function() {
      if (this.nav) {
        return nlyGetOptionsByKeyEqual(navbarVariantOpitons, this.variant);
      } else {
        return "";
      }
    },
    customNavbarFontSize: function() {
      if (this.nav) {
        return nlyGetOptionsByKeyEqual(textSizeOptions, this.size);
      } else {
        return "";
      }
    },
    customNavbarBorder: function() {
      if (this.nav) {
        return this.border ? "" : "border-bottom-0";
      } else {
        return "";
      }
    },
    customWrapperHeaderClass: function() {
      return this.wrapperHeaderClass;
    },
    customNavbarDark() {
      if (this.nav) {
        return this.dark ? "navbar-dark" : "navbar-light";
      } else {
        return "";
      }
    }
  },
  render(h) {
    return h(
      this.customTag,
      {
        staticClass: "main-header",
        class: [
          this.customNavbarExpand,
          this.customNavbarDark,
          this.customnNvbarVariant,
          this.customNavbarFontSize,
          this.customNavbarBorder,
          this.customWrapperHeaderClass
        ]
      },
      this.$slots.default
    );
  }
});
