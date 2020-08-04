import Vue from "../../../utils/vue";
// import { mergeData } from "vue-functional-data-merge";
import itemOption from "./search-select-item-option";

const name = "NlySearchSelectSingleItem";

export const NlySearchSelectSingleItem = Vue.extend({
  name: name,
  mixins: [itemOption],
  render(h) {
    return h(
      "span",
      {
        staticClass: "select2-selection__rendered",
        attrs: {
          role: "textbox",
          "aria-readonly": true,
          title: this.value
        }
      },
      [
        this.valueOptions[0] || this.placeholder,
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
