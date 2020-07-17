import Vue from "../../../utils/vue";
import { isFunction } from "../../../utils/inspect";

const name = "NlySearchSelectMultipleItem";

export const props = {
  value: {
    type: Array,
    default: undefined
  },
  placeholder: {
    type: String,
    default: "Choice a field"
  },
  inputFunction: {
    type: Function
  }
};

export const NlySearchSelectMultipleItem = Vue.extend({
  name: name,
  model: {
    prop: "value",
    event: "change"
  },
  props,
  computed: {
    inputValue() {
      return this.value;
    },
    isInputFunction() {
      return isFunction(this.inputFunction);
    }
  },
  render(h) {
    var that = this;
    const $multipleOptions = that.inputValue
      ? that.inputValue.map((item, index) => {
          return h(
            "li",
            {
              staticClass: "select2-selection__choice",
              attrs: { title: item }
            },
            [
              h(
                "span",
                {
                  staticClass: "select2-selection__choice__remove",
                  attrs: { role: "presentation" },
                  title: `${index}_tags`,
                  on: {
                    click: evt => {
                      evt.stopPropagation();
                      that.value.splice(index, 1);
                      that.$emit("change", that.value);
                    }
                  }
                },
                "×"
              ),
              item
            ]
          );
        })
      : null;

    const $multipleInput =
      that.inputValue === undefined || that.inputValue.length == []
        ? h("li", { staticClass: "select2-search select2-search--inline" }, [
            h("input", {
              staticClass: "select2-search__field",
              attrs: {
                type: "search",
                tabindex: "0",
                autocomplete: "off",
                autocapitalize: "none",
                spellcheck: false,
                role: "searchbox",
                "aria-autocomplete": "list",
                placeholder: that.placeholder
              },
              style: { width: "100%" },
              on: {
                input(evt) {
                  if (evt.target.composing) {
                    return;
                  }
                  if (that.isInputFunction) {
                    console.log(evt.target.value);
                  }
                }
              }
            })
          ])
        : h("li", { staticClass: "select2-search select2-search--inline" }, [
            h("input", {
              staticClass: "select2-search__field",
              attrs: {
                type: "search",
                tabindex: "0",
                autocomplete: "off",
                autocapitalize: "none",
                spellcheck: false,
                role: "searchbox",
                "aria-autocomplete": "list",
                placeholder: ""
              },
              style: { width: "100%" },
              on: {
                input(evt) {
                  if (evt.target.composing) {
                    return;
                  }
                  if (that.isInputFunction) {
                    console.log(evt.target.value);
                    that.inputFunction(evt.target.value);
                  }
                }
              }
            })
          ]);

    return h("ul", { staticClass: "select2-selection__rendered" }, [
      $multipleOptions,
      $multipleInput
    ]);
  }
});
