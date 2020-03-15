import Vue from "../../utils/vue";
import { mergeData } from "vue-functional-data-merge";

export const props = {
  tag: {
    type: String,
    default: "div"
  }
};

const name = "NlyFormRow";
export const NlyFormRow = Vue.extend({
  name: name,
  functional: true,
  props,
  render(h, { props, data, children }) {
    return h(
      props.tag,
      mergeData(data, {
        staticClass: "form-row"
      }),
      children
    );
  }
});
