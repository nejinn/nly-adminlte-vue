import Vue from "../../utils/vue";
import { mergeData } from "vue-functional-data-merge";

export const props = {};

export const NlyNavText = Vue.extend({
  name: "NlyNavText",
  functional: true,
  props,
  // eslint-disable-next-line no-unused-vars
  render(h, { props, data, children }) {
    return h("li", mergeData(data, { staticClass: "navbar-text" }), children);
  }
});
