import Vue from "../../utils/vue";
import { textVariantOptions } from "../../utils/nly-config";
import { nlyGetOptionsByKeyEqual } from "../../utils/get-options";
import { mergeData } from "vue-functional-data-merge";

const name = "NlyCardText";

export const props = {
  cardTextClass: {
    type: String
  },
  tag: {
    type: String,
    default: "p"
  },
  textVariant: {
    type: String
  }
};

const customClass = props => {
  const cardTextClass = props.cardTextClass;
  const textVariant = () =>
    nlyGetOptionsByKeyEqual(textVariantOptions, props.textVariant);

  return [textVariant(), cardTextClass];
};

export const NlyCardText = Vue.extend({
  name: name,
  props,
  functional: true,

  render(h, { props, data, children }) {
    return h(
      props.tag,
      mergeData(data, {
        staticClass: "card-text",
        class: customClass(props)
      }),
      children
    );
  }
});
