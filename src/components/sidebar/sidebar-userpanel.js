import Vue from "../../utils/vue";
import { mergeData } from "vue-functional-data-merge";

const name = "NlySidebarUserpanel";

export const NlySidebarUserpanel = Vue.extend({
  name: name,
  functional: true,
  render(h, { data, children }) {
    return h(
      "div",
      mergeData(data, {
        staticClass: "user-panel"
      }),
      children
    );
  }
});
