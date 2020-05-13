import Vue from "../../utils/vue";
import { mergeData } from "vue-functional-data-merge";

export const props = {
  tag: {
    type: String,
    default: "hr"
  }
};

export const NlyDropdownDivider = Vue.extend({
  name: "NlyDropdownDivider",
  functional: true,
  props,
  render(h, { props, data }) {
    const $attrs = data.attrs || {};
    data.attrs = {};
    return h("li", mergeData(data, { attrs: { role: "presentation" } }), [
      h(props.tag, {
        staticClass: "dropdown-divider",
        attrs: {
          ...$attrs,
          role: "separator",
          "aria-orientation": "horizontal"
        },
        ref: "divider"
      })
    ]);
  }
});
