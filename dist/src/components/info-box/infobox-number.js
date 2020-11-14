import Vue from "../../utils/vue";
import { toCurrency } from "../../utils/number";
import { mergeData } from "vue-functional-data-merge";

export const props = {
  number: {
    type: [String, Number]
  },
  numberClass: {
    type: String
  },
  tag: {
    type: String,
    default: "span"
  }
};

const name = "NlyInfoboxNumber";

export const NlyInfoboxNumber = Vue.extend({
  name: name,
  functional: true,
  props,
  render(h, { props, data, children }) {
    return h(
      props.tag,
      mergeData(data, {
        staticClass: "info-box-number",
        class: [props.numberClass]
      }),
      [props.number ? toCurrency(props.number) : null, children]
    );
  }
});
