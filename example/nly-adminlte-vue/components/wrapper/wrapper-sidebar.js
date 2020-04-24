import Vue from "../../utils/vue";

import { nlyGetOptionsByKeyEqual } from "../../utils/get-options";

import {
  sidebarElevationOptions,
  sidebarContainerVariantOpitons
} from "../../utils/nly-config";

import { mergeData } from "vue-functional-data-merge";

export const props = {
  variant: {
    type: String,
    default: "darkPrimary"
  },
  hover: {
    type: Boolean,
    default: true
  },
  elevation: {
    type: String,
    default: "xl"
  },
  tag: {
    type: String,
    default: "aside"
  },
  wrapperSidebarClass: {
    type: String
  }
};

const customClass = props => {
  const customVariant = () =>
    nlyGetOptionsByKeyEqual(sidebarContainerVariantOpitons, props.variant);
  const customHover = props.hover ? "" : "sidebar-no-expand";
  const customElevation = () =>
    nlyGetOptionsByKeyEqual(sidebarElevationOptions, props.elevation);

  return [
    customVariant(),
    customHover,
    customElevation(),
    props.wrapperSidebarClass
  ];
};

const name = "NlyWrapperSidebar";

export const NlyWrapperSidebar = Vue.extend({
  name: name,
  props,
  functional: true,
  render(h, { props, data, children }) {
    return h(
      props.tag,
      mergeData(data, {
        staticClass: "main-sidebar",
        class: customClass(props)
      }),
      children
    );
  }
});
