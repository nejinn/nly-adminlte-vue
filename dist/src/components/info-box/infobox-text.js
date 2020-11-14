import Vue from "../../utils/vue";
import { mergeData } from "vue-functional-data-merge";

export const props = {
  textClass: {
    type: String
  },
  text: {
    type: String
  },
  tag: {
    type: String,
    default: "span"
  }
};

const name = "NlyInfoboxText";

export const NlyInfoboxText = Vue.extend({
  name: name,
  functional: true,
  props,
  render(h, { props, data, children }) {
    return h(
      props.tag,
      mergeData(data, {
        staticClass: "info-box-text",
        class: [props.textClass]
      }),
      [props.text, children]
    );
  }
});
