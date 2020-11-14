import Vue from "../../utils/vue";
import {
  bgVariantOptions,
  textSizeOptions,
  badgeVariantOptions,
  bgGradientOptions
} from "../../utils/nly-config";
import { nlyGetOptionsByKeyEqual } from "../../utils/get-options";
import { mergeData } from "vue-functional-data-merge";

const name = "NlyBadge";

export const props = {
  size: {
    type: String
  },
  variant: {
    type: String
  },
  bgVariant: {
    type: String
  },
  bgGradientVariant: {
    type: String
  },
  badgeClass: {
    type: String
  },
  tag: {
    type: String,
    default: "span"
  },
  pill: {
    type: Boolean,
    default: false
  }
};

const customClass = props => {
  const bgVariant = () =>
    nlyGetOptionsByKeyEqual(bgVariantOptions, props.bgVariant);
  const size = () => nlyGetOptionsByKeyEqual(textSizeOptions, props.size);
  const pill = props.pill ? "badge-pill" : "";
  const variant = () =>
    nlyGetOptionsByKeyEqual(badgeVariantOptions, props.variant);
  const bgGradientVariant = () =>
    nlyGetOptionsByKeyEqual(bgGradientOptions, props.bgGradientVariant);

  const badgeClass = props.badgeClass;

  return [
    bgVariant(),
    size(),
    badgeClass,
    pill,
    variant(),
    bgGradientVariant()
  ];
};

export const NlyBadge = Vue.extend({
  name: name,
  functional: true,
  props,
  render(h, { props, data, children }) {
    return h(
      props.tag,
      mergeData(data, {
        staticClass: "badge",
        class: customClass(props)
      }),
      children
    );
  }
});
