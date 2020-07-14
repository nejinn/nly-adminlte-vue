import Vue from "../../utils/vue";
import { mergeData } from "vue-functional-data-merge";
import { NlyInputGroupText } from "./input-group-text";

const name = "NlyInputGroupAdd";

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
  addClass: {
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
  },
  append: {
    type: Boolean,
    default: false
  }
};

export const NlyInputGroupAdd = Vue.extend({
  name: name,
  props,
  functional: true,
  render(h, { props, data, children }) {
    if (props.isText) {
      return h(
        props.tag,
        mergeData(data, {
          staticClass: props.append
            ? "input-group-append"
            : "input-group-prepend",
          class: [props.addClass],
          attrs: {
            id: props.id
          }
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
          staticClass: props.append
            ? "input-group-append"
            : "input-group-prepend",
          class: [props.addClass],
          attrs: {
            id: props.id
          }
        }),
        children
      );
    }
  }
});
