import Vue from "../../utils/vue";
import {
  nlyGetOptionsByKeyEqual,
  nlyGetOptionsByItem
} from "../../utils/get-options";
import { NlyButtonMixins } from "../mixins/button-mixins";
import { createPopper } from "@popperjs/core";
import {
  nlyDropdownParentId,
  nlyDropdownId,
  nlyDropdownMenuId
} from "../../utils/mixin-id";

const name = "NlyDropdown";
const sizeOptions = {
  sm: "btn-group-sm",
  lg: "btn-group-lg"
};

const placementOptions = [
  "auto",
  "auto-start",
  "auto-end",
  "top",
  "top-start",
  "top-end",
  "bottom",
  "bottom-start",
  "bottom-end",
  "right",
  "right-start",
  "right-end",
  "left",
  "left-start",
  "left-end"
];

export const NlyDropdown = Vue.extend({
  name: name,
  mixins: [NlyButtonMixins],
  data() {
    return {
      show: false,
      dropdown: "",
      dropdownMenu: "",
      dropdownInstance: null,
      dropdownBoundary: ""
    };
  },
  props: {
    vertical: {
      type: Boolean,
      default: false
    },
    dropdownSize: {
      type: String
    },
    dropdownTag: {
      type: String,
      default: "div"
    },
    dropdownToggle: {
      type: Boolean,
      default: false
    },
    dropdownIcon: {
      type: Boolean,
      default: false
    },
    text: {
      type: String
    },
    toggleText: {
      type: String
    },
    dropdownClass: {
      type: String
    },
    dataShow: {
      type: String,
      required: true
    },
    placement: {
      type: String,
      default: "auto"
    }
  },
  computed: {
    customDropdownTag: function() {
      return this.dropdownTag;
    },
    customVertical: function() {
      return this.vertical ? "btn-group-vertical" : "btn-group";
    },
    customDropdownSize: function() {
      return nlyGetOptionsByKeyEqual(sizeOptions, this.dropdownSize);
    },
    customDropdownToggle: function() {
      return this.dropdownToggle ? "dropdown-toggle" : "";
    },
    customDropdownIcon: function() {
      if (this.dropdownToggle) {
        return this.dropdownIcon ? "dropdown-icon" : "";
      } else {
        return "";
      }
    },
    customText: function() {
      return this.text;
    },
    customToggleText: function() {
      return this.toggleText;
    },
    customDropdownClass: function() {
      return this.dropdownClass;
    },
    customDataShow: function() {
      return this.dataShow;
    },
    customDropdownId: function() {
      return nlyDropdownId(this.dataShow);
    },
    customDropdownParentId: function() {
      return nlyDropdownParentId(this.dataShow);
    },
    customDropDownMenuId: function() {
      return nlyDropdownMenuId(this.dataShow);
    },
    customPlacement: function() {
      return nlyGetOptionsByItem(placementOptions, this.placement);
    }
  },
  methods: {
    dropdownCreate() {
      this.dropdownInstance = createPopper(this.dropdown, this.dropdownMenu, {
        placement: this.customPlacement,
        modifiers: [
          {
            name: "flip",
            options: {
              fallbackPlacements: ["auto"]
            },
            enabled: true
          },
          {
            name: "preventOverflow",
            options: {
              boundary: this.dropdownBoundary
            }
          }
        ]
      });
    },
    dropdownDestroy() {
      if (this.dropdownInstance) {
        this.dropdownInstance.destroy();
        this.dropdownInstance = null;
      }
    },
    dropdownShow() {
      if (this.show == false) {
        this.dropdownMenu.classList.add("show");
        this.dropdown.setAttribute("aria-expanded", true);
        this.dropdownCreate(
          this.dropdownInstance,
          this.dropdown,
          this.dropdownMenu
        );
        this.show = true;
      } else {
        this.dropdownMenu.classList.remove("show");
        this.dropdown.setAttribute("aria-expanded", false);
        this.dropdownDestroy(this.dropdownInstance);
        this.show = false;
      }
    },
    dropdownHide() {
      this.dropdownInstance = null;
      this.dropdownMenu.classList.remove("show");
      this.dropdown.setAttribute("aria-expanded", false);
      this.dropdownDestroy(this.dropdownInstance);
    },
    click_out_side(e) {
      if (!this.$el.contains(e.target)) {
        this.show = false;
        this.dropdownInstance = null;
        this.dropdownMenu.classList.remove("show");
        this.dropdown.setAttribute("aria-expanded", false);
        this.dropdownDestroy(this.dropdownInstance);
      }
    }
  },
  mounted() {
    this.dropdown = document.querySelector(`#${this.customDropdownId}`);
    this.dropdownMenu = document.querySelector(`#${this.customDropDownMenuId}`);
    this.dropdownBoundary = document.querySelector(
      `#${this.customDropdownParentId}`
    );

    this.dropdownInstance = null;

    this.dropdown.addEventListener("click", this.dropdownShow);
  },
  watch: {
    show(newVal) {
      if (newVal == true) {
        document.addEventListener("click", this.click_out_side);
      } else {
        document.removeEventListener("click", this.click_out_side);
      }
    }
  },

  render(h) {
    let toggleDropdownArray = "";
    if (this.customToggleText) {
      toggleDropdownArray = h(
        "span",
        {
          staticClass: "sr-only"
        },
        this.customToggleText
      );
    } else {
      toggleDropdownArray = "";
    }
    const hoverArray = h(
      "button",
      {
        staticClass: "btn",
        class: [
          this.customBlock,
          this.customVariant,
          this.customGradient,
          this.customShape,
          this.customSize,
          this.customDisabled,
          this.customPressed,
          this.customButtonClass,
          this.customDropdownToggle,
          this.customDropdownIcon
        ],
        attrs: {
          type: this.customType,
          id: this.customDropdownId
        }
      },
      [this.customText, toggleDropdownArray]
    );

    return h(
      this.customDropdownTag,
      {
        class: [
          this.customVertical,
          this.customDropdownSize,
          this.customDropdownClass
        ],
        attrs: {
          id: this.customDropdownParentId
        }
      },
      [hoverArray, this.$slots.default]
    );
  }
});
