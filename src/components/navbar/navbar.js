import Vue from "../../utils/vue";
import { nlyGetOptionsByKeyEqual } from "../../utils/get-options";
import { navbarVariantOpitons, textSizeOptions } from "../../utils/nly-config";
import { mergeData } from "vue-functional-data-merge";

const name = "NlyNavbar";

export const props = {
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
  navbarClass: {
    type: String
  },
  fixed: {
    type: String
  },
  sticky: {
    type: Boolean,
    default: false
  },
  tag: {
    type: String,
    default: "nav"
  }
};

const customClass = props => {
  const customStickyClass = props.sticky === true ? "sticky-top" : null;
  const customFixedClass = props.fixed ? `fixed-${props.fixed}` : null;
  const customNavbarHeader = props.header ? "main-header" : "";
  const customNavbarExpand =
    props.expand == "xl"
      ? "navbar-expand-xl"
      : props.expand == "lg"
      ? "navbar-expand-lg"
      : props.expand == "md"
      ? "navbar-expand-md"
      : props.expand == "sm"
      ? "navbar-expand-sm"
      : props.expand == "no"
      ? "navbar-no-expand"
      : "navbar-expand";
  const customnNvbarVariant = () =>
    nlyGetOptionsByKeyEqual(navbarVariantOpitons, props.variant);
  const customNavbarFontSize = () =>
    nlyGetOptionsByKeyEqual(textSizeOptions, props.size);
  const customNavbarBorder = props.border ? "" : "border-bottom-0";
  const customNavbarClass = props.navbarClass;
  const customNavbarDark = props.dark ? "navbar-dark" : "navbar-light";

  return [
    customStickyClass,
    customFixedClass,
    customNavbarHeader,
    customNavbarExpand,
    customnNvbarVariant(),
    customNavbarFontSize(),
    customNavbarBorder,
    customNavbarClass,
    customNavbarDark
  ];
};

export const NlyNavbar = Vue.extend({
  name: name,
  functional: true,
  props,
  render(h, { props, data, children }) {
    return h(
      props.tag,
      mergeData(data, {
        staticClass: "navbar",
        class: customClass(props)
      }),
      children
    );
  }
});
