import Vue from "../../utils/vue";
import { mergeData } from "vue-functional-data-merge";
import { NlyInputGroupText } from "./input-group-text";

const name = "NlyInputGroupPrepend";

export const props = {
  tag: {
    type: String,
    default: "div"
  },
  id: {
    type: String,
    default: null
  },
  isText: {
    type: Boolean,
    default: false
  },
  prependClass: {
    type: String,
    default: null
  },
  textTag: {
    type: String,
    default: "span"
  },
  textClass: {
    type: String,
    default: null
  }
};

export const NlyInputGroupPrepend = Vue.extend({
  name: name,
  props,
  functional: true,
  render(h, { props, data, children }) {
    if (props.isText) {
      return h(
        props.tag,
        mergeData(data, {
          staticClass: "input-group-prepend",
          class: [props.prependClass]
        }),
        [
          h(
            NlyInputGroupText,
            {
              props: {
                tag: props.textTag,
                textClass: props.textClass
              }
            },
            children
          )
        ]
      );
    } else {
      return h(
        props.tag,
        mergeData(data, {
          staticClass: "input-group-prepend",
          class: [props.prependClass]
        }),
        children
      );
    }
  }
});
