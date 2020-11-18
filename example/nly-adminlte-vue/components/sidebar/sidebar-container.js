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
  }
};

const customVariant = props => {
  return nlyGetOptionsByKeyEqual(sidebarContainerVariantOpitons, props.variant);
};
const customHover = props => {
  return props.hover ? "" : "sidebar-no-expand";
};
const customElevation = props => {
  return nlyGetOptionsByKeyEqual(sidebarElevationOptions, props.elevation);
};

const name = "NlySidebarContainer";

export const NlySidebarContainer = Vue.extend({
  name: name,
  functional: true,
  props,
  render(h, { props, data, children }) {
    return h(
      "aside",
      mergeData(data, {
        staticClass: "main-sidebar",
        class: [
          customVariant(props),
          customElevation(props),
          customHover(props)
        ]
      }),
      children
    );
  }
});
