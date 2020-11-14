import Vue from "../../utils/vue";
import { mergeData } from "vue-functional-data-merge";

const name = "NlyLog";

export const props = {
  tag: {
    type: String,
    default: "div"
  },
  logClass: {
    type: String
  },
  containerClass: {
    type: String
  },
  containerTag: {
    type: String,
    default: "div"
  }
};

export const NlyLog = Vue.extend({
  name: name,
  props,
  functional: true,
  render(h, { props, data, children }) {
    return h(
      props.tag,
      mergeData(data, {
        staticClass: "nly-log",
        class: [props.logClass]
      }),
      [
        h(
          props.containerTag,
          {
            staticClass: "nly-log-container",
            class: [props.containerClass]
          },
          children
        )
      ]
    );
  }
});
