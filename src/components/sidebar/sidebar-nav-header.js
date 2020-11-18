import Vue from "../../utils/vue";
import { mergeData } from "vue-functional-data-merge";

export const props = {
  tag: {
    type: String,
    default: "li"
  }
};
const name = "NlySidebarNavHeader";

export const NlySidebarNavHeader = Vue.extend({
  name: name,
  functional: true,
  props,
  render(h, { props, data, children }) {
    return h(
      props.tag,
      mergeData(data, {
        staticClass: "nav-header"
      }),
      children
    );
  }
});
