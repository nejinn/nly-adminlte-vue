import Vue from "../../../utils/vue";
import { htmlOrText } from "../../../utils/html";
import formOptionsMixin from "../../../mixins/form-options";
import normalizeSlotMixin from "../../../mixins/normalize-slot";
import { NlySelectOption } from "./select-option";

const NlySearchSelectDropdownGroup = Vue.extend({
  name: "NlySearchSelectDropdownGroup",
  mixins: [normalizeSlotMixin, formOptionsMixin],
  props: {
    label: {
      type: String,
      required: true
    }
  },
  render(h) {
    const $options = this.formOptions.map((option, index) => {
      const { value, text, html, disabled } = option;

      return h(NlySelectOption, {
        attrs: { value, disabled },
        domProps: htmlOrText(html, text),
        key: `option_${index}`
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
