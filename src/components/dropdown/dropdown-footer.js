import Vue from "../../utils/vue";
import { mergeData } from "vue-functional-data-merge";

export const props = {
  id: {
    type: String
    // default: null
  },
  tag: {
    type: String,
    default: "header"
  },
  variant: {
    type: String
    // default: null
  }
};

export const NlyDropdownFooter = Vue.extend({
  name: "NlyDropdownFooter",
  functional: true,
  props,
  render(h, { props, data, children }) {
    const $attrs = data.attrs || {};
    data.attrs = {};
    return h("li", mergeData(data, { attrs: { role: "presentation" } }), [
      h(
        props.tag,
        {
          staticClass: "dropdown-footer",
          class: {
            [`text-${props.variant}`]: props.variant
          },
          attrs: {
            ...$attrs,
            id: props.id || null,
            role: "footer"
          },
          ref: "footer"
        },
        children
      )
    ]);
  }
});
