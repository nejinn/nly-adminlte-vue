import Vue from "../../utils/vue";
import { mergeData } from "vue-functional-data-merge";

const name = "NlyNavbarBrandtext";

export const props = {
  textClass: {
    type: String,
    default: null
  },
  tag: {
    type: String,
    default: "span"
  },
  weight: {
    type: Boolean,
    default: true
  }
};

export const NlyNavbarBrandtext = Vue.extend({
  name: name,
  props,
  functional: true,
  render(h, { props, data, children }) {
    return h(
      props.tag,
      mergeData(data, {
        staticClass: "brand-text",
        class: [props.weight ? "font-weight-light" : null, props.textClass]
      }),
      children
    );
  }
});
