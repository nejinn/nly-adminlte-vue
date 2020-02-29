import Vue from "../../utils/vue";

import { NlyLink, propsFactory as linkPropsFactory } from "../link/link";

export const props = linkPropsFactory();

const name = "NlySidebarNavItem";

export const NlySidebarNavItem = Vue.extend({
  name: name,
  props: {
    ...props,
    linkClass: {
      type: String
    },
    icon: {
      type: String
    }
  },
  computed: {
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
    customLinkClass: function() {
      return this.linkClass;
    },
    customIcon: function() {
      return this.icon;
    }
  },
  render(h) {
    return h(
      "li",
      {
        staticClass: "nav-item"
      },
      [
        h(
          NlyLink,
          {
            staticClass: "nav-link",
            props: this.customLinkProps,
            class: this.customLinkClass
          },
          [
            h("i", {
              class: this.icon
            }),
            h("p", this.$slots.default)
          ]
        )
      ]
    );
  }
});
