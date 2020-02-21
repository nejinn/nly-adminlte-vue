import Vue from "../utils/vue";
import { getOptionsByKeyEqual } from "../utils/get-options";
import { NlyButtonMixins } from "../mixins/button-mixins";
{
  /* <div class="btn-group">
  <button type="button" class="btn btn-warning">
    Action
  </button>
  <button
    type="button"
    class="btn btn-warning dropdown-toggle dropdown-icon"
    data-toggle="dropdown"
    aria-expanded="false"
  >
    <span class="sr-only">Toggle Dropdown</span>
  </button>
  <div
    class="dropdown-menu"
    role="menu"
    x-placement="bottom-start"
    style="position: absolute; will-change: transform; top: 0px; left: 0px; transform: translate3d(68px, 38px, 0px);"
  >
    <header class="dropdown-header">Action</header>
    <div class="dropdown-divider"></div>
    <a class="dropdown-item" href="#">
      Another action
    </a>
    <a class="dropdown-item" href="#">
      Something else here
    </a>
    <div class="dropdown-divider"></div>
    <footer class="dropdown-footer">Separated link</footer>
  </div>
</div>; */
}

const sizeOptions = {
  sm: "btn-group-sm",
  lg: "btn-group-lg"
};

export var NlyDropdown = Vue.extend({
  name: "NlyDropdown",
  mixins: [NlyButtonMixins],
  props: {
    vertical: {
      type: Boolean
    },
    dropdownSize: {
      type: String
    },
    dropdownTag: {
      type: String,
      default: "div"
    },
    dropdownToggle: {
      type: Boolean
    },
    dropdownHover: {
      type: Boolean
    },
    dropdownIcon: {
      type: Boolean
    },
    text: {
      type: String
    },
    dropdownClass: {
      type: String
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
      return getOptionsByKeyEqual(sizeOptions, this.dropdownSize);
    },
    customDropdownToggle: function() {
      return this.dropdownToggle ? "dropdown-toggle" : "";
    },
    customDropdownHover: function() {
      if (this.dropdownToggle) {
        return this.dropdownHover ? "dropdown-hover" : "";
      } else {
        return "";
      }
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
    customDropdownClass: function() {
      return this.dropdownClass;
    }
  },
  mounted() {
    const pos = this.$el.getBoundingClientRect();
    console.log("pos", pos);
    console.log(this.$children[0]);
    if (this.$children[0]) {
      console.log(this.$children[0].domSize.clientHeight);
    } else {
      console.log("no");
    }
  },
  render(h) {
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
          this.customDropdownHover,
          this.customDropdownIcon
        ],
        attrs: {
          type: this.customType
        }
      },
      [this.customText, this.$slots.default]
    );

    const noHoverArray = h(
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
          this.customDropdownHover,
          this.customDropdownIcon
        ],
        attrs: {
          type: this.customType
        }
      },
      this.customText
    );

    let dropdownArray = [];

    if (this.customDropdownHover) {
      dropdownArray.push(hoverArray);
    } else {
      dropdownArray.push(noHoverArray);
      dropdownArray.push(this.$slots.default);
    }

    return h(
      this.customDropdownTag,
      {
        class: [
          this.customVertical,
          this.customDropdownSize,
          this.customDropdownClass
        ]
      },
      [dropdownArray]
    );
  }
});
