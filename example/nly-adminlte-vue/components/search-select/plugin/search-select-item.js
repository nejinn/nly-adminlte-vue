import Vue from "../../../utils/vue";
import { isArray } from "../../../utils/array";
import { htmlOrText } from "../../../utils/html";
import idMixin from "../../../mixins/id";
import normalizeSlotMixin from "../../../mixins/normalize-slot";
import optionsMixin from "./mixin-options";
import { NlySelectOption } from "./select-option";
import { NlySelectOptionGroup } from "./select-option-group";

const name = "NlySearchSelectItem";

export const NlySearchSelectItem = Vue.extend({
  name: name,
  mixins: [idMixin, normalizeSlotMixin, optionsMixin],
  model: {
    prop: "value",
    event: "input"
  },
  props: {
    variant: {
      type: String,
      default: null
    },
    multiple: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    customVriant() {
      return this.variant ? `select2-${this.variant}` : null;
    },
    customMultiple() {
      return this.multiple ? null : "form-control";
    }
  },
  render(h) {
    const $options = this.formOptions.map((option, index) => {
      const { value, label, options, disabled } = option;
      const key = `option_${index}`;

      return isArray(options)
        ? h(NlySelectOptionGroup, { props: { label, options }, key })
        : h(NlySelectOption, {
            props: { value, disabled },
            domProps: htmlOrText(option.html, option.text),
            key
          });
    });

    return h(
      "select",
      {
        staticClass: "select2 select2-hidden-accessible",
        class: [this.customMultiple, this.customVriant],
        attrs: {
          id: this.safeId("_select2_"),
          multiple: this.multiple || null,
          "aria-hidden": "true",
          tabindex: "-1"
        },
        style: { width: "100%" }
      },
      [this.normalizeSlot("first"), $options, this.normalizeSlot("default")]
    );
  }
});
