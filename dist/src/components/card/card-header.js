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
  cardHeaderClass: {
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
  const cardHeaderClass = props.cardHeaderClass;

  return [
    bgVariant(),
    bgGradientVariant(),
    textVariant(),
    imgOverlay,
    cardHeaderClass
  ];
};

const name = "NlyCardHeader";

export const NlyCardHeader = Vue.extend({
  name: name,
  props,
  functional: true,
  render(h, { props, data, children }) {
    return h(
      props.tag,
      mergeData(data, {
        staticClass: "card-header",
        class: customClass(props)
      }),
      children
    );
  }
});
