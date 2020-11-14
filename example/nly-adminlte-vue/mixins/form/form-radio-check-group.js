import looseEqual from "../../utils/loose-equal";
import normalizeSlotMixin from "../normalize-slot";
import { htmlOrText } from "../../utils/html";
import { NlyFormCheckbox } from "../../components/form-checkbox/form-checkbox";
import { NlyFormRadio } from "../../components/form-radio/form-radio";

export default {
  mixins: [normalizeSlotMixin],
  model: {
    prop: "checked",
    event: "input"
  },
  props: {
    validated: {
      type: Boolean,
      default: false
    },
    ariaInvalid: {
      type: [Boolean, String],
      default: false
    },
    stacked: {
      type: Boolean,
      default: false
    },
    plain: {
      type: Boolean,
      default: false
    },
    buttons: {
      // Render as button style
      type: Boolean,
      default: false
    },
    buttonVariant: {
      // Only applicable when rendered with button style
      type: String,
      default: "secondary"
    }
  },
  computed: {
    inline() {
      return !this.stacked;
    },
    groupName() {
      // Checks/Radios tied to the same model must have the same name,
      // especially for ARIA accessibility.
      return this.name || this.safeId();
    },
    groupClasses() {
      if (this.buttons) {
        return [
          "btn-group-toggle",
          this.inline ? "btn-group" : "btn-group-vertical",
          this.size ? `btn-group-${this.size}` : "",
          this.validated ? `was-validated` : ""
        ];
      }
      return [this.validated ? `was-validated` : ""];
    },
    computedAriaInvalid() {
      const ariaInvalid = this.ariaInvalid;
      if (
        ariaInvalid === true ||
        ariaInvalid === "true" ||
        ariaInvalid === ""
      ) {
        return "true";
      }
      return this.computedValid !== "novalid" ? "true" : null;
    }
  },
  watch: {
    checked(newVal) {
      if (!looseEqual(newVal, this.localChecked)) {
        this.localChecked = newVal;
      }
    },
    localChecked(newValue, oldValue) {
      if (!looseEqual(newValue, oldValue)) {
        this.$emit("input", newValue);
      }
    }
  },
  render(h) {
    const $inputs = this.formOptions.map((option, index) => {
      const key = `NLYA_option_${index}`;

      return h(
        this.isRadioGroup ? NlyFormRadio : NlyFormCheckbox,
        {
          props: {
            id: this.safeId(key),
            value: option.value,
            disabled: option.disabled || false
          },
          key
        },
        [h("span", { domProps: htmlOrText(option.html, option.text) })]
      );
    });

    return h(
      "div",
      {
        class: [this.groupClasses, "nly-no-focus-ring"],
        attrs: {
          id: this.safeId(),
          role: this.isRadioGroup ? "radiogroup" : "group",
          // Add `tabindex="-1"` to allow group to be focused if needed by screen readers
          tabindex: "-1",
          "aria-required": this.required ? "true" : null,
          "aria-invalid": this.computedAriaInvalid
        }
      },
      [this.normalizeSlot("first"), $inputs, this.normalizeSlot("default")]
    );
  }
};
