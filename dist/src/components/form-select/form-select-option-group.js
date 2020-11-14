import Vue from "../../utils/vue";
import { htmlOrText } from "../../utils/html";
import formOptionsMixin from "../../mixins/form/form-options";
import normalizeSlotMixin from "../../mixins/normalize-slot";
import { NlyFormSelectOption } from "./form-select-option";

// @vue/component
const NlyFormSelectOptionGroup = /*#__PURE__*/ Vue.extend({
  name: "NlyFormSelectOptionGroup",
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

      return h(NlyFormSelectOption, {
        attrs: { value, disabled },
        domProps: htmlOrText(html, text),
        key: `option_${index}`
      });
    });

    return h("optgroup", { attrs: { label: this.label } }, [
      this.normalizeSlot("first"),
      $options,
      this.normalizeSlot("default")
    ]);
  }
});

export { NlyFormSelectOptionGroup };
