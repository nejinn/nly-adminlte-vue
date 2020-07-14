import Vue from "../../utils/vue";
import { mergeData } from "vue-functional-data-merge";
import { NlyInputGroupText } from "./input-group-text";

const name = "NlyInputGroupAppend";

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
  appendClass: {
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

export const NlyInputGroupAppend = Vue.extend({
  name: name,
  props,
  functional: true,
  render(h, { props, data, children }) {
    if (props.isText) {
      return h(
        props.tag,
        mergeData(data, {
          staticClass: "input-group-append",
          class: [props.appendClass],
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
          staticClass: "input-group-append",
          class: [props.prependClass],
          attrs: {
            id: props.id
          }
        }),
        children
      );
    }
  }
});
