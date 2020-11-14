import Vue from "../../utils/vue";
import { htmlOrText } from "../../utils/html";
import formOptionsMixin from "../../mixins/form/form-options";
import normalizeSlotMixin from "../../mixins/normalize-slot";

const name = "NlyFormDatalist";
export const NlyFormDatalist = Vue.extend({
  name: name,
  mixins: [formOptionsMixin, normalizeSlotMixin],
  props: {
    id: {
      type: String,
      required: true
    }
  },
  render(h) {
    const $options = this.formOptions.map((option, index) => {
      const { value, text, html, disabled } = option;

      return h("option", {
        attrs: { value, disabled },
        domProps: htmlOrText(html, text),
        key: `option_${index}`
      });
    });

    return h("datalist", { attrs: { id: this.id } }, [
      $options,
      this.normalizeSlot("default")
    ]);
  }
});
