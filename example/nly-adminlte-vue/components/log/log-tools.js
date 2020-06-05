import Vue from "../../utils/vue";
import { mergeData } from "vue-functional-data-merge";

const name = "NlyLogTools";

export const props = {
  tag: {
    type: String,
    default: "div"
  },
  logToolsClass: {
    type: String
  }
};

export const NlyLogTools = Vue.extend({
  name: name,
  props,
  functional: true,
  render(h, { props, data, children }) {
    return h(
      props.tag,
      mergeData(data, {
        staticClass: "nly-log-tools",
        class: [props.logToolsClass]
      }),
      children
    );
  }
});
