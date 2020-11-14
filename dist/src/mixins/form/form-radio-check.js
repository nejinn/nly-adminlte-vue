import looseEqual from "../../utils/loose-equal";
import { attemptBlur, attemptFocus } from "../../utils/dom";
import attrsMixin from "../attrs";
import normalizeSlotMixin from "../normalize-slot";

export default {
  mixins: [attrsMixin, normalizeSlotMixin],
  inheritAttrs: false,
  model: {
    prop: "checked",
    event: "input"
  },
  props: {
    value: {
      // Value when checked
      // type: Object,
      // default: undefined
    },
    checked: {
      // This is the v-model
      // type: Object,
      // default: undefined
    },
    inline: {
      type: Boolean,
      default: false
    },
    plain: {
      type: Boolean,
      default: false
    },
    button: {
      type: Boolean,
      default: false
    },
    buttonVariant: {
      type: String
      // default: null
    },
    ariaLabel: {
      type: String
      // default: null
    },
    ariaLabelledby: {
      type: String
      // default: null
    }
  },
  data() {
    return {
      localChecked: this.isGroup ? this.nlyaGroup.checked : this.checked,
      hasFocus: false
    };
  },
  computed: {
    computedLocalChecked: {
      get() {
        return this.isGroup ? this.nlyaGroup.localChecked : this.localChecked;
      },
      set(val) {
        if (this.isGroup) {
          this.nlyaGroup.localChecked = val;
        } else {
          this.localChecked = val;
        }
      }
    },
    isGroup() {
      return Boolean(this.nlyaGroup);
    },
    isBtnMode() {
      return this.isGroup ? this.nlyaGroup.buttons : this.button;
    },
    isPlain() {
      return this.isBtnMode
        ? false
        : this.isGroup
        ? this.nlyaGroup.plain
        : this.plain;
    },
    isCustom() {
      return this.isBtnMode ? false : !this.isPlain;
    },
    isSwitch() {
      return this.isBtnMode || this.isRadio || this.isPlain
        ? false
        : this.isGroup
        ? this.nlyaGroup.switches
        : this.switch;
    },
    isInline() {
      return this.isGroup ? this.nlyaGroup.inline : this.inline;
    },
    isDisabled() {
      return this.isGroup
        ? this.nlyaGroup.disabled || this.disabled
        : this.disabled;
    },
    isRequired() {
      return (
        this.getName && (this.isGroup ? this.nlyaGroup.required : this.required)
      );
    },
    getName() {
      return (this.isGroup ? this.nlyaGroup.groupName : this.name) || null;
    },
    getForm() {
      return (this.isGroup ? this.nlyaGroup.form : this.form) || null;
    },
    getSize() {
      return (this.isGroup ? this.nlyaGroup.size : this.size) || "";
    },
    getState() {
      return this.isGroup ? this.nlyaGroup.computedValid : this.computedValid;
    },
    getButtonVariant() {
      if (this.buttonVariant) {
        return this.buttonVariant;
      } else if (this.isGroup && this.nlyaGroup.buttonVariant) {
        return this.nlyaGroup.buttonVariant;
      }
      return "secondary";
    },
    buttonClasses() {
      return [
        "btn",
        `btn-${this.getButtonVariant}`,
        {
          [`btn-${this.getSize}`]: this.getSize,
          disabled: this.isDisabled,
          active: this.isChecked,
          focus: this.hasFocus
        }
      ];
    },
    computedAttrs() {
      return {
        ...this.nlyaAttrs,
        id: this.safeId(),
        type: this.isRadio ? "radio" : "checkbox",
        name: this.getName,
        form: this.getForm,
        disabled: this.isDisabled,
        required: this.isRequired,
        "aria-required": this.isRequired || null,
        "aria-label": this.ariaLabel || null,
        "aria-labelledby": this.ariaLabelledby || null
      };
    }
  },
  watch: {
    checked(newValue) {
      if (!looseEqual(newValue, this.computedLocalChecked)) {
        this.computedLocalChecked = newValue;
      }
    }
  },
  methods: {
    handleFocus(evt) {
      if (evt.target) {
        if (evt.type === "focus") {
          this.hasFocus = true;
        } else if (evt.type === "blur") {
          this.hasFocus = false;
        }
      }
    },
    focus() {
      if (!this.isDisabled) {
        attemptFocus(this.$refs.input);
      }
    },
    blur() {
      if (!this.isDisabled) {
        attemptBlur(this.$refs.input);
      }
    }
  },
  render(h) {
    const defaultSlot = this.normalizeSlot("default");

    const on = { change: this.handleChange };
    if (this.isBtnMode) {
      on.focus = on.blur = this.handleFocus;
    }
    const input = h("input", {
      ref: "input",
      key: "input",
      on,
      class: {
        "form-check-input": this.isPlain,
        "custom-control-input": this.isCustom,
        "is-valid": this.getState === "valid" && !this.isBtnMode,
        "is-invalid": this.getState === "invalid" && !this.isBtnMode,
        "is-warning": this.getState === "warning" && !this.isBtnMode,
        "position-static": this.isPlain && !defaultSlot
      },
      directives: [
        {
          name: "model",
          rawName: "v-model",
          value: this.computedLocalChecked,
          expression: "computedLocalChecked"
        }
      ],
      attrs: this.computedAttrs,
      domProps: {
        value: this.value,
        checked: this.isChecked
      }
    });

    if (this.isBtnMode) {
      let button = h("label", { class: this.buttonClasses }, [
        input,
        defaultSlot
      ]);
      if (!this.isGroup) {
        button = h("div", { class: ["btn-group-toggle", "d-inline-block"] }, [
          button
        ]);
      }
      return button;
    } else {
      let label = h();
      if (!(this.isPlain && !defaultSlot)) {
        label = h(
          "label",
          {
            class: {
              "form-check-label": this.isPlain,
              "custom-control-label": this.isCustom
            },
            attrs: { for: this.safeId() }
          },
          defaultSlot
        );
      }
      return h(
        "div",
        {
          class: {
            "form-check": this.isPlain,
            "form-check-inline": this.isPlain && this.isInline,
            "custom-control": this.isCustom,
            "custom-control-inline": this.isCustom && this.isInline,
            "custom-checkbox": this.isCustom && this.isCheck && !this.isSwitch,
            "custom-switch": this.isSwitch,
            "custom-radio": this.isCustom && this.isRadio,
            [`nly-custom-control-${this.getSize}`]: Boolean(
              this.getSize && !this.isBtnMode
            )
          }
        },
        [input, label]
      );
    }
  }
};
