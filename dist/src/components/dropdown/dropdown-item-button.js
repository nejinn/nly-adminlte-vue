import Vue from "../../utils/vue";
import normalizeSlotMixin from "../../mixins/normalize-slot";

export const props = {
  active: {
    type: Boolean,
    default: false
  },
  activeClass: {
    type: String,
    default: "active"
  },
  buttonClass: {
    type: [String, Array, Object]
    // default: null
  },
  disabled: {
    type: Boolean,
    default: false
  },
  variant: {
    type: String
    // default: null
  }
};

export const NlyDropdownItemButton = Vue.extend({
  name: "NlyDropdownItemButton",
  mixins: [normalizeSlotMixin],
  inheritAttrs: false,
  inject: {
    nlyaDropdown: {
      default: null
    }
  },
  props,
  methods: {
    closeDropdown() {
      if (this.nlyaDropdown) {
        this.nlyaDropdown.hide(true);
      }
    },
    onClick(evt) {
      this.$emit("click", evt);
      this.closeDropdown();
    }
  },
  render(h) {
    return h("li", { attrs: { role: "presentation" } }, [
      h(
        "button",
        {
          staticClass: "dropdown-item",
          class: [
            this.buttonClass,
            {
              [this.activeClass]: this.active,
              [`text-${this.variant}`]:
                this.variant && !(this.active || this.disabled)
            }
          ],
          attrs: {
            ...this.$attrs,
            role: "menuitem",
            type: "button",
            disabled: this.disabled
          },
          on: { click: this.onClick },
          ref: "button"
        },
        this.normalizeSlot("default")
      )
    ]);
  }
});
