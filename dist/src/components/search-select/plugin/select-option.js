import Vue from "../../../utils/vue";
import { mergeData } from "vue-functional-data-merge";

const NAME = "NlySelectOption";

export const props = {
  value: {
    required: true
  },
  disabled: {
    type: Boolean,
    default: false
  }
};

export const NlySelectOption = Vue.extend({
  name: NAME,
  functional: true,
  props,
  render(h, { props, data, children }) {
    const { value, disabled } = props;
    return h(
      "option",
      mergeData(data, {
        attrs: { disabled },
        domProps: { value }
      }),
      children
    );
  }
});
