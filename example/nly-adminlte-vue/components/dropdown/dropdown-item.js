import Vue from "../../utils/vue";
import { requestAF } from "../../utils/dom";
import normalizeSlotMixin from "../../mixins/normalize-slot";
import { NlyLink, propsFactory as linkPropsFactory } from "../link/link";

export const props = linkPropsFactory();

export const NlyDropdownItem = Vue.extend({
  name: "NlyDropdownItem",
  mixins: [normalizeSlotMixin],
  inheritAttrs: false,
  inject: {
    nlyaDropdown: {
      default: null
    }
  },
  props: {
    ...props,
    linkClass: {
      type: [String, Array, Object],
      default: null
    },
    variant: {
      type: String,
      default: null
    }
  },
  methods: {
    closeDropdown() {
      requestAF(() => {
        if (this.nlyaDropdown) {
          this.nlyaDropdown.hide(true);
        }
      });
    },
    onClick(evt) {
      this.$emit("click", evt);
      this.closeDropdown();
    }
  },
  render(h) {
    return h("li", { attrs: { role: "presentation" } }, [
      h(
        NlyLink,
        {
          props: this.$props,
          staticClass: "dropdown-item",
          class: [
            this.linkClass,
            {
              [`text-${this.variant}`]:
                this.variant && !(this.active || this.disabled)
            }
          ],
          attrs: { ...this.$attrs, role: "menuitem" },
          on: { click: this.onClick },
          ref: "item"
        },
        this.normalizeSlot("default")
      )
    ]);
  }
});
