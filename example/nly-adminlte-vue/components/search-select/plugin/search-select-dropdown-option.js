import Vue from "../../../utils/vue";
// import { mergeData } from "vue-functional-data-merge";

const NAME = "NlySearchSelectDropdownOption";

export const props = {
  value: {
    required: true
  },
  disabled: {
    type: Boolean,
    default: false
  },
  selected: {
    type: Boolean,
    default: false
  }
};

export const NlySearchSelectDropdownOption = Vue.extend({
  name: NAME,
  functional: true,
  props,
  render(h) {
    return h(
      "li",
      {
        staticClass: "select2-results__option",
        attrs: {
          role: "option",
          "aria-selected": this.selected,
          "aria-disabled": this.disabled
        }
      },
      this.value
    );
  }
});
