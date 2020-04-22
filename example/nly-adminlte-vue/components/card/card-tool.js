import Vue from "../../utils/vue";
import { mergeData } from "vue-functional-data-merge";

const name = "NlyCardTool";

export const props = {
  cardToolClass: {
    type: String
  },
  tag: {
    type: String,
    default: "div"
  }
};

export const NlyCardTool = Vue.extend({
  name: name,
  props,
  functional: true,
  render(h, { props, data, children }) {
    return h(
      props.tag,
      mergeData(data, {
        staticClass: "card-tools",
        class: [props.cardToolClass]
      }),
      children
    );
  }
});
