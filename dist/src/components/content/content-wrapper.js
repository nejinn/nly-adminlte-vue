import Vue from "../../utils/vue";
import { mergeData } from "vue-functional-data-merge";

export const props = {
  tag: {
    type: String,
    default: "section"
  }
};

const name = "NlyContentWrapper";

export const NlyContentWrapper = Vue.extend({
  name: name,
  props,
  functional: true,
  render(h, { props, data, children }) {
    return h(
      props.tag,
      mergeData(data, {
        staticClass: "content-wrapper"
      }),
      children
    );
  }
});
