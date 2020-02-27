import Vue from "../../utils/vue";
import { nlyGetOptionsByKeyEqual } from "../../utils/get-options";
import { nlyDropdownId } from "../../utils/mixin-id";
import { isEvent } from "../../utils/inspect";

const name = "NlyNavDropdown";

const directionOptions = {
  down: "dropdown",
  left: "dropleft",
  right: "dropright",
  up: "dropup",
  none: ""
};

const sizeOptions = {
  md: "dropdown-menu-md",
  lg: "dropdown-menu-lg",
  xl: "dropdown-menu-xl"
};

const menuDirectionOptions = {
  right: "dropdown-menu-right",
  left: "dropdown-menu-left"
};

const shadowOptions = {
  shadow: "shadow",
  sm: "shadow-sm",
  lg: "shadow-lg",
  none: "shadow-none"
};

export const NlyNavDropdown = Vue.extend({
  name: name,
  data() {
    return {
      show: false,
      itemShow: "",
      menuShow: ""
    };
  },
  props: {
    /**
     * li标签
     */
    //按钮是否具有nav-item类
    itemTag: {
      type: String,
      default: "li"
    },
    navItem: {
      type: Boolean,
      default: true
    },
    // 是否悬浮显示
    hover: {
      type: Boolean,
      default: false
    },
    // 是否子菜单
    submenu: {
      type: Boolean,
      default: false
    },
    // 下拉菜单方位
    direction: {
      type: String,
      default: "down"
    },
    itemClass: {
      type: String
    },
    /**
     * a标签
     */
    //aria-haspopup
    disabled: {
      type: Boolean,
      default: false
    },
    popup: {
      type: Boolean,
      default: false
    },
    // 是否nav-link
    navLink: {
      type: Boolean,
      default: true
    },
    //是否带下拉图标
    dropdownToggle: {
      type: Boolean,
      default: false
    },
    //id aria-labelledby
    id: {
      type: String
    },
    linkClass: {
      type: String
    },
    linkTag: {
      type: String,
      default: "a"
    },
    dropdownItem: {
      type: Boolean,
      default: false
    },
    /**
     * ul标签
     * */
    menuTag: {
      type: String,
      default: "ul"
    },
    menuClass: {
      type: String
    },
    size: {
      type: String
    },
    menuDirection: {
      type: String,
      default: "left"
    },
    shadow: {
      type: String,
      default: "shadow"
    }
  },
  computed: {
    coustomItemTag: function() {
      return this.itemTag;
    },
    customLinkTag: function() {
      return this.linkTag;
    },
    customNavItem: function() {
      return this.navItem ? "nav-item" : false;
    },
    customHover: function() {
      return this.hover ? "dropdown-hover" : false;
    },
    customSubmenu: function() {
      return this.submenu ? "dropdown-submenu" : false;
    },
    customDirection: function() {
      return nlyGetOptionsByKeyEqual(directionOptions, this.direction);
    },
    customItemClass: function() {
      return this.itemClass;
    },
    customPopup: function() {
      return this.popup;
    },
    customNavLink: function() {
      return this.navLink ? "nav-link" : false;
    },
    customDropdownItem: function() {
      return this.dropdownItem ? "dropdown-item" : false;
    },
    customDropdownToggle: function() {
      return this.dropdownToggle ? "dropdown-toggle" : false;
    },
    customId: function() {
      return this.id ? nlyDropdownId(this.id) : false;
    },
    customLinkClass: function() {
      return this.linkClass;
    },
    customSize: function() {
      return nlyGetOptionsByKeyEqual(sizeOptions, this.size);
    },
    customMenuDirection: function() {
      if (this.direction == "down" || this.direction == "up") {
        return nlyGetOptionsByKeyEqual(menuDirectionOptions, this.direction);
      } else {
        return "";
      }
    },
    customShadow: function() {
      return nlyGetOptionsByKeyEqual(shadowOptions, this.shadow);
    },
    customMenuClass: function() {
      return this.menuClass;
    },
    customDisabled: function() {
      return this.disabled;
    },
    customDisabledClass: function() {
      return this.disabled ? "disabled" : "";
    }
  },
  // created() {
  //   this.itemShow = this.show ? "show" : "";
  //   this.menuShow = this.show ? "show" : "";
  // },
  methods: {
    onClick(ev) {
      const evIsEvent = isEvent(ev);
      if (evIsEvent && this.customDisabled) {
        ev.preventDefault();
        ev.stopPropagation();
        ev.stopImmediatePropagation();
      } else {
        ev.preventDefault();
        ev.stopPropagation();
        if (this.show) {
          this.show = false;
          this.itemShow = this.show ? "show" : "";
          this.menuShow = this.show ? "show" : "";
        } else {
          this.show = true;
          this.itemShow = this.show ? "show" : "";
          this.menuShow = this.show ? "show" : "";
        }
      }
    },
    click_other(e) {
      if (!this.$el.contains(e.target)) {
        this.show = false;
        this.itemShow = this.show ? "show" : "";
        this.menuShow = this.show ? "show" : "";
      }
    },
    focus() {
      if (this.$el && this.$el.focus) {
        this.$el.focus();
      }
    },
    blur() {
      if (this.$el && this.$el.blur) {
        this.$el.blur();
      }
    }
  },
  watch: {
    show(newVal) {
      if (newVal === true) {
        document.addEventListener("click", this.click_other, true);
      } else {
        document.removeEventListener("click", this.click_other, true);
      }
    }
  },
  render(h) {
    const linkArray = h(
      this.customLinkTag,
      {
        attrs: {
          id: this.customId,
          "aria-haspopup": this.customPopup,
          href: "#",
          "aria-expanded": this.show ? "true" : "false"
        },
        class: [
          this.customNavLink,
          this.customDropdownItem,
          this.customDropdownToggle,
          this.customLinkClass,
          this.customDisabledClass
        ],
        on: {
          click: this.onClick
        }
      },
      this.$slots.linkcontent
    );

    const menuArray = h(
      this.menuTag,
      {
        attrs: {
          "aria-labelledby": this.customId
        },
        staticClass: "dropdown-menu",
        class: [
          this.customMenuDirection,
          this.customShadow,
          this.customSize,
          this.customMenuClass,
          this.menuShow
        ]
      },
      this.$slots.menucontent
    );

    return h(
      this.coustomItemTag,
      {
        class: [
          this.customNavItem,
          this.customHover,
          this.customSubmenu,
          this.customDirection,
          this.customItemClass,
          this.itemShow
        ]
      },
      [linkArray, menuArray]
    );
  }
});
