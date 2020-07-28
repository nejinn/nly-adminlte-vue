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
  props,
  methods: {
    optionHover(evt) {
      if (!this.disabled) {
        if (
          evt.target.className.indexOf(
            "select2-results__option--highlighted"
          ) === -1
        ) {
          evt.target.classList.add("select2-results__option--highlighted");
        }
      }
    },
    optionUnHover(evt) {
      if (!this.disabled) {
        if (
          evt.target.className.indexOf(
            "select2-results__option--highlighted"
          ) !== -1
        ) {
          evt.target.classList.remove("select2-results__option--highlighted");
        }
      }
    }
  },
  render(h) {
    return h(
      "li",
      {
        staticClass: "select2-results__option",
        attrs: {
          role: "option",
          "aria-selected": this.disabled ? null : `${this.selected}`,
          "aria-disabled": `${this.disabled}`,
          value: this.value
        },
        on: {
          mouseenter: this.optionHover,
          mouseleave: this.optionUnHover,
          ...this.$listeners
        }
      },
      this.value
    );
  }
});
