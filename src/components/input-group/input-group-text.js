import Vue from "../../utils/vue";

import { mergeData } from "vue-functional-data-merge";

const name = "NlyInputGroupText";

export const props = {
  tag: {
    type: String,
    default: "span"
  },
  textClass: {
    type: String,
    default: null
  }
};

export const NlyInputGroupText = Vue.extend({
  name: name,
  functional: true,
  props,
  render(h, { props, data, children }) {
    return h(
      props.tag,
      mergeData(data, {
        staticClass: "input-group-text",
        class: [props.textClass]
      }),
      children
    );
  }
});
