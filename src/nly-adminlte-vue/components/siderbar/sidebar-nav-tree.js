import Vue from "../../utils/vue";
import listenOnRootMixin from "../mixins/listen-on-root";
import { NlyLink } from "../link/link";
import { NlyCollapse } from "../collapse/collapse";

const EVENT_TOGGLE = "nly::toggle::collapse";

const EVENT_STATE = "nly::collapse::state";

const EVENT_STATE_SYNC = "nly::collapse::sync::state";

const name = "NlySidebarNavTree";

export const NlySidebarNavTree = Vue.extend({
  name: name,
  mixins: [listenOnRootMixin],
  data() {
    return {
      toggleState: false
    };
  },
  props: {
    label: {
      type: String,
      default: "nly sidebar navigation"
    },
    target: {
      type: String,
      required: true
    },
    linkClass: {
      type: String
    },
    // nly-link props
    href: {
      type: String,
      default: null
    },
    linkTarget: {
      type: String,
      default: "_self"
    },
    active: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    to: {
      type: [String, Object],
      default: null
    },
    append: {
      type: Boolean,
      default: false
    },
    exact: {
      type: Boolean,
      default: false
    },
    exactActiveClass: {
      type: String
    },
    //icon
    icon: {
      type: String
    },
    // menu props
    accordion: {
      type: String,
      default: "nly-accordion"
    },
    visible: {
      type: Boolean,
      default: false
    },
    tag: {
      type: String,
      default: "ul"
    },
    appear: {
      type: Boolean,
      default: false
    },
    menuClass: {
      type: String
    }
  },
  computed: {
    customLabel: function() {
      return this.label;
    },
    customTarget: function() {
      return this.target;
    },
    customLinkClass: function() {
      return this.linkClass;
    },
    customLinkProps: function() {
      return {
        href: this.href,
        linkTarget: this.linkTarget,
        active: this.active,
        disabled: this.disabled,
        to: this.to,
        append: this.append,
        exact: this.exact,
        exactActiveClass: "active"
      };
    },
    customMenuProps: function() {
      return {
        accordion: this.accordion,
        visible: this.visible,
        tag: "ul",
        appear: this.appear,
        collapseClass: this.menuClass
      };
    },
    customIcon: function() {
      return this.icon;
    }
  },
  created() {
    // 监听root 事件，获取初始toggleState值
    this.listenOnRoot(EVENT_STATE, this.handleStateEvt);
    this.listenOnRoot(EVENT_STATE_SYNC, this.handleStateEvt);
  },
  methods: {
    onClick(evt) {
      this.$emit("click", evt);
      if (!evt.defaultPrevented) {
        this.$root.$emit(EVENT_TOGGLE, this.customTarget);
      }
    },
    handleStateEvt(id, state) {
      if (id === this.customTarget) {
        this.toggleState = state;
      }
    }
  },
  render(h) {
    const menuArray = h(
      NlyCollapse,
      {
        props: this.customMenuProps,
        attrs: {
          id: this.customTarget
        },
        staticClass: "nav nav-treeview"
      },
      this.$slots.default
    );
    const linkArray = h(
      NlyLink,
      {
        staticClass: "nav-link",
        class: [this.customLinkClass],
        attrs: {
          "aria-label": this.customLabel,
          "aria-controls": this.customTarget,
          "aria-expanded": this.toggleState ? "true" : "false",
          "data-target": `#${this.customTarget}`
        },
        props: this.customLinkProps,
        on: {
          click: this.onClick
        }
      },
      [
        h("i", {
          class: this.customIcon
        }),
        h("p", [
          this.$slots.link,
          h("i", {
            class: "right fas fa-angle-left"
          }),
          this.$slots.linktool
        ])
      ]
    );
    return h(
      "li",
      {
        staticClass: "nav-item has-treeview",
        class: this.toggleState ? "menu-open" : ""
      },
      [linkArray, menuArray]
    );
  }
});
