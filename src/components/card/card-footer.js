import Vue from "../../utils/vue";

import {
  textVariantOptions,
  bgVariantOptions,
  bgGradientOptions
} from "../../utils/nly-config";

import { nlyGetOptionsByKeyEqual } from "../../utils/get-options";

import { mergeData } from "vue-functional-data-merge";

export const props = {
  bgVariant: {
    type: String
  },
  bgGradientVariant: {
    type: String
  },
  imgOverlay: {
    type: Boolean,
    default: false
  },
  textVariant: {
    type: String
  },
  cardFooterClass: {
    type: String
  },
  tag: {
    type: String,
    default: "div"
  }
};

const customClass = props => {
  const bgVariant = () =>
    nlyGetOptionsByKeyEqual(bgVariantOptions, props.bgVariant);
  const bgGradientVariant = () =>
    nlyGetOptionsByKeyEqual(bgGradientOptions, props.bgGradientVariant);
  const textVariant = () =>
    nlyGetOptionsByKeyEqual(textVariantOptions, props.textVariant);
  const imgOverlay = props.imgOverlay ? "card-img-overlay" : "";
  const cardFooterClass = props.cardFooterClass;

  return [
    bgVariant(),
    bgGradientVariant(),
    textVariant(),
    imgOverlay,
    cardFooterClass
  ];
};

const name = "NlyCardFooter";

export const NlyCardFooter = Vue.extend({
  name: name,
  props,
  functional: true,
  render(h, { props, data, children }) {
    return h(
      props.tag,
      mergeData(data, {
        staticClass: "card-footer",
        class: customClass(props)
      }),
      children
    );
  }
});
