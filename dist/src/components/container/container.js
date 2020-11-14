import Vue from "../../utils/vue";
import { mergeData } from "vue-functional-data-merge";

export const props = {
  fluid: {
    type: Boolean,
    default: false
  },
  containerClass: {
    type: String
  },
  tag: {
    type: String,
    default: "div"
  }
};

const name = "NlyContainer";

export const NlyContainer = Vue.extend({
  name: name,
  props,
  functional: true,
  render(h, { props, data, children }) {
    return h(
      props.tag,
      mergeData(data, {
        class: [
          props.fluid ? "container-fluid" : "container",
          props.containerClass
        ]
      }),
      children
    );
  }
});
