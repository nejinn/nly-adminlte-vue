// * **** card-title ****
// * .card-title 基础类
// * .text-light 文字颜色

import Vue from "../../utils/vue";
import { textVariantOptions } from "../../utils/nly-config";
import { nlyGetOptionsByKeyEqual } from "../../utils/get-options";
import { mergeData } from "vue-functional-data-merge";

const name = "NlyCardSubtitle";

export const props = {
  textVariant: {
    type: String
  },
  cardSubtitleClass: {
    type: String
  },
  tag: {
    type: String,
    default: "h6"
  }
};

const customClass = props => {
  const textVariant = () =>
    nlyGetOptionsByKeyEqual(textVariantOptions, props.textVariant);

  const cardSubtitleClass = props.cardSubtitleClass;

  return [textVariant(), cardSubtitleClass];
};

export const NlyCardSubtitle = Vue.extend({
  name: name,
  props,
  functional: true,
  render(h, { props, data, children }) {
    return h(
      props.tag,
      mergeData(data, {
        staticClass: "card-subtitle",
        class: customClass(props)
      }),
      children
    );
  }
});
