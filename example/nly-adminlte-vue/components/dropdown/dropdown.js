import Vue from "../../utils/vue";
import { arrayIncludes } from "../../utils/array";
import { stripTags } from "../../utils/html";
import { getComponentConfig } from "../../utils/config";
import idMixin from "../../mixins/id";
import dropdownMixin from "../../mixins/dropdown";
import normalizeSlotMixin from "../../mixins/normalize-slot";
import { NlyButton } from "../button/button";

const NAME = "NlyDropdown";

export const props = {
  text: {
    // Button label
    type: String,
    default: ""
  },
  html: {
    // Button label
    type: String
    // default: undefined
  },
  size: {
    type: String,
    default: () => getComponentConfig(NAME, "size")
  },
  variant: {
    type: String,
    default: () => getComponentConfig(NAME, "variant")
  },
  block: {
    type: Boolean,
    default: false
  },
  menuClass: {
    type: [String, Array, Object]
    // default: null
  },
  toggleTag: {
    type: String,
    default: "button"
  },
  toggleText: {
    // This really should be toggleLabel
    type: String,
    default: () => getComponentConfig(NAME, "toggleText")
  },
  toggleClass: {
    type: [String, Array, Object]
    // default: null
  },
  noCaret: {
    type: Boolean,
    default: false
  },
  split: {
    type: Boolean,
    default: false
  },
  splitHref: {
    type: String
    // default: undefined
  },
  splitTo: {
    type: [String, Object]
    // default: undefined
  },
  splitVariant: {
    type: String,
    default: () => getComponentConfig(NAME, "splitVariant")
  },
  splitClass: {
    type: [String, Array, Object]
    // default: null
  },
  splitButtonType: {
    type: String,
    default: "button",
    validator: value => arrayIncludes(["button", "submit", "reset"], value)
  },
  lazy: {
    // If true, only render menu contents when open
    type: Boolean,
    default: false
  },
  role: {
    type: String,
    default: "menu"
  }
};

export const NlyDropdown = Vue.extend({
  name: NAME,
  mixins: [idMixin, dropdownMixin, normalizeSlotMixin],
  props,
  computed: {
    dropdownClasses() {
      return [
        this.directionClass,
        {
          show: this.visible,
          "btn-group": this.split || !this.block,
          "d-flex": this.block && this.split,
          "position-static": this.boundary !== "scrollParent" || !this.boundary
        }
      ];
    },
    menuClasses() {
      return [
        this.menuClass,
        {
          "dropdown-menu-right": this.right,
          show: this.visible
        }
      ];
    },
    toggleClasses() {
      return [
        this.toggleClass,
        {
          "dropdown-toggle-split": this.split,
          "dropdown-toggle-no-caret": this.noCaret && !this.split
        }
      ];
    }
  },
  render(h) {
    let split = h();
    const buttonContent =
      this.normalizeSlot("button-content") || this.html || stripTags(this.text);
    if (this.split) {
      const btnProps = {
        variant: this.splitVariant || this.variant,
        size: this.size,
        block: this.block,
        disabled: this.disabled
      };
      // We add these as needed due to router-link issues with defined property with undefined/null values
      if (this.splitTo) {
        btnProps.to = this.splitTo;
      } else if (this.splitHref) {
        btnProps.href = this.splitHref;
      } else if (this.splitButtonType) {
        btnProps.type = this.splitButtonType;
      }
      split = h(
        NlyButton,
        {
          ref: "button",
          props: btnProps,
          class: this.splitClass,
          attrs: {
            id: this.safeId("_NLY_button_")
          },
          on: {
            click: this.onSplitClick
          }
        },
        [buttonContent]
      );
    }
    const toggle = h(
      NlyButton,
      {
        ref: "toggle",
        staticClass: "dropdown-toggle",
        class: this.toggleClasses,
        props: {
          tag: this.toggleTag,
          variant: this.variant,
          size: this.size,
          block: this.block && !this.split,
          disabled: this.disabled
        },
        attrs: {
          id: this.safeId("_NLY_toggle_"),
          "aria-haspopup": "true",
          "aria-expanded": this.visible ? "true" : "false"
        },
        on: {
          mousedown: this.onMousedown,
          click: this.toggle,
          keydown: this.toggle
        }
      },
      [
        this.split
          ? h("span", { class: ["sr-only"] }, [this.toggleText])
          : buttonContent
      ]
    );
    const menu = h(
      "ul",
      {
        ref: "menu",
        staticClass: "dropdown-menu",
        class: this.menuClasses,
        attrs: {
          role: this.role,
          tabindex: "-1",
          "aria-labelledby": this.safeId(
            this.split ? "_NLY_button_" : "_NLY_toggle_"
          )
        },
        on: {
          keydown: this.onKeydown
        }
      },
      !this.lazy || this.visible
        ? this.normalizeSlot("default", { hide: this.hide })
        : [h()]
    );
    return h(
      "div",
      {
        staticClass: "dropdown nly-dropdown",
        class: this.dropdownClasses,
        attrs: { id: this.safeId() }
      },
      [split, toggle, menu]
    );
  }
});
