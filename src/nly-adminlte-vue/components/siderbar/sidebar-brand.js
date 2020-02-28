import Vue from "../../utils/vue";
import { nlyGetOptionsByKeyEqual } from "../../utils/get-options";
import { NlyLink, propsFactory as linkPropsFactory } from "../link/link";

export const props = linkPropsFactory();

const name = NlySidebarBrand;

const sizeOptions = {
  sm: "text-sm",
  lg: "text-lg"
};

const variantOptions = {
  primary: "navbar-primary",
  secondary: "navbar-secondary",
  info: "navbar-info",
  success: "navbar-success",
  danger: "navbar-danger",
  indigo: "navbar-indigo",
  purple: "navbar-purple",
  pink: "navbar-pink",
  navy: "navbar-navy",
  light: "navbar-light",
  warning: "navbar-warning",
  lightblue: "navbar-lightblue",
  olive: "navbar-olive",
  lime: "navbar-lime",
  fuchsia: "navbar-fuchsia",
  maroon: "navbar-maroon",
  blue: "navbar-blue",
  orange: "navbar-orange",
  teal: "navbar-teal",
  white: "navbar-white",
  gray: "navbar-gray",
  dark: "navbary-dark"
};

const elevationOptions = {
  sm: "elevation-1",
  md: "elevation-2",
  lg: "elevation-3",
  xl: "elevation-4"
};

export const NlySidebarBrand = Vue.extend({
  name: name,
  props: {
    size: {
      type: String
    },
    variant: {
      type: String
    },
    elevation: {
      type: String
    },
    ...props
  },
  computed: {
    customSize: function() {
      const fontSize = nlyGetOptionsByKeyEqual(sizeOptions, this.size);
      return fontSize;
    },
    customVariant: function() {
      return nlyGetOptionsByKeyEqual(variantOptions, this.variant);
    },
    customElevation: function() {
      return nlyGetOptionsByKeyEqual(elevationOptions, this.elevation);
    },
    computedProps() {
      return { ...this.$props };
    }
  },
  render(h) {
    return h(
      NlyLink,
      {
        staticClass: "brand-link",
        class: [this.customSize, this.customVariant, this.customElevation],
        props: this.computedProps
      },
      this.$slots.default
    );
  }
});
