import Vue from "../../../utils/vue";
import { htmlOrText } from "../../../utils/html";
import formOptionsMixin from "../../../mixins/form/search-select-options";
import { NlySearchSelectDropdownOption } from "./search-select-dropdown-option";

const NlySearchSelectDropdownGroup = Vue.extend({
  name: "NlySearchSelectDropdownGroup",
  mixins: [formOptionsMixin],
  props: {
    label: {
      type: String,
      required: true
    },
    addCheckedValue: {
      type: Function
    }
  },
  render(h) {
    var self = this;
    const $options = self.formOptions.map((option, index) => {
      const { value, text, html, disabled, selected } = option;
      return h(NlySearchSelectDropdownOption, {
        props: {
          value: value,
          disabled: disabled,
          selected: selected
        },
        domProps: htmlOrText(html, text),
        key: `search_select_group_option_${index}`,
        on: {
          click() {
            if (!disabled) {
              self.addCheckedValue(option);
            }
          }
        }
      });
    });

    return h(
      "li",
      {
        staticClass: "select2-results__option select2-results__option--group",
        attrs: { role: "group", "aria-label": self.label }
      },
      [
        h("strong", { staticClass: "select2-results__group" }, self.label),
        h(
          "ul",
          {
            staticClass:
              "select2-results__options select2-results__options--nested"
          },
          [$options]
        )
      ]
    );
  }
});

export { NlySearchSelectDropdownGroup };
