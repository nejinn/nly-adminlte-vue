import Vue from "../../../utils/vue";

const name = "NlySearchSelectMultipleItem";

export const props = {
  value: {
    type: Array,
    default: undefined
  },
  placeholder: {
    type: String,
    default: "Choice a field"
  }
};

export const NlySearchSelectMultipleItem = Vue.extend({
  name: name,
  props,
  computed: {
    inputValue() {
      return this.value;
    }
  },
  render(h) {
    const $multipleOptions = this.inputValue
      ? this.inputValue.map((item, index) => {
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
                      this.value.splice(index, 1);
                      this.$forceUpdate();
                      console.log(this.value);
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
      this.inputValue === undefined || this.inputValue.length == []
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
                placeholder: this.placeholder
              },
              style: { width: "100%" }
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
              style: { width: "100%" }
            })
          ]);

    return h("ul", { staticClass: "select2-selection__rendered" }, [
      $multipleOptions,
      $multipleInput
    ]);
  }
});
