import Vue from "../../utils/vue";
import { nlyGetOptionsByKeyEqual } from "../../utils/get-options";
import { NlyLink, propsFactory as linkPropsFactory } from "../link/link";
import {
  textSizeOptions,
  sidebarBrandVariantOptions,
  sidebarElevationOptions
} from "../../utils/nly-config";
import { mergeData } from "vue-functional-data-merge";

export const linkProps = linkPropsFactory();

export const props = {
  size: {
    type: String
  },
  variant: {
    type: String
  },
  elevation: {
    type: String
  },
  ...linkProps
};

const customSize = props => {
  const fontSize = nlyGetOptionsByKeyEqual(textSizeOptions, props.size);
  return fontSize;
};
const customVariant = props => {
  return nlyGetOptionsByKeyEqual(sidebarBrandVariantOptions, props.variant);
};
const customElevation = props => {
  return nlyGetOptionsByKeyEqual(sidebarElevationOptions, props.elevation);
};

const name = "NlySidebarBrand";

export const NlySidebarBrand = Vue.extend({
  name: name,
  functional: true,
  props,
  render(h, { props, data, children }) {
    return h(
      NlyLink,
      mergeData(data, {
        staticClass: "brand-link",
        class: [
          customSize(props),
          customVariant(props),
          customElevation(props)
        ],
        props: props
      }),
      children
    );
  }
});
