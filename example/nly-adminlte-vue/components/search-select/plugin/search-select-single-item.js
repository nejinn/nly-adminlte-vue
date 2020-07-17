import Vue from "../../../utils/vue";
import { mergeData } from "vue-functional-data-merge";

const name = "NlySearchSelectSingleItem";

export const props = {
  value: {},
  placeholder: {
    type: String,
    default: "Choice a field"
  }
};

export const NlySearchSelectSingleItem = Vue.extend({
  name: name,

  functional: true,
  props,
  render(h, { props, data }) {
    return h(
      "span",
      mergeData(data, {
        staticClass: "select2-selection__rendered",
        attrs: {
          role: "textbox",
          "aria-readonly": true,
          title: props.value
        }
      }),
      [
        props.value || props.placeholder,
        h(
          "span",
          {
            staticClass: "select2-selection__arrow",
            attrs: {
              role: "presentation"
            }
          },
          [
            h("b", {
              attrs: {
                role: "presentation"
              }
            })
          ]
        )
      ]
    );
  }
});
