import Vue from "../../utils/vue";
import { textVariantOptions } from "../../utils/nly-config";
import { nlyGetOptionsByKeyEqual } from "../../utils/get-options";
import { mergeData } from "vue-functional-data-merge";

const name = "NlyCardTitle";

export const props = {
  textVariant: {
    type: String
  },
  cardTitleClass: {
    type: String
  },
  tag: {
    type: String,
    default: "h4"
  },
  left: {
    type: Boolean,
    default: false
  }
};

const customClass = props => {
  return {
    textVariant: nlyGetOptionsByKeyEqual(textVariantOptions, props.textVariant),
    cardTitleClass: props.cardTitleClass,
    left: props.left ? "card-title-left" : ""
  };
};

export const NlyCardTitle = Vue.extend({
  name: name,
  props,
  functional: true,
  render(h, { props, data, children }) {
    return h(
      props.tag,
      mergeData(data, {
        staticClass: "card-title",
        class: customClass(props)
      }),
      children
    );
  }
});
