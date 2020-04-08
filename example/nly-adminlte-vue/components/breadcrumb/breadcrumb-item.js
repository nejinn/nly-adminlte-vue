import Vue from "../../utils/vue";
import { NlyLink } from "../link/link";
import { NlyIcon } from "../icon";
const name = "NlyBreadcrumbItem";

export const NlyBreadcrumbItem = Vue.extend({
  name: name,
  props: {
    icon: {
      type: String
    },
    text: {
      type: String
    },
    href: {
      type: String,
      default: null
    },
    to: {
      type: [String, Object],
      default: null
    },
    append: {
      type: Boolean,
      default: false
    },
    replace: {
      type: Boolean,
      default: false
    },
    active: {
      type: Boolean,
      default: false
    },
    target: {
      type: String,
      default: "_self"
    },
    itemClass: {
      type: String
    },
    linkClass: {
      type: String
    }
  },
  computed: {
    customProps: function() {
      return {
        icon: this.icon,
        text: this.text,
        href: this.href,
        to: this.to,
        append: this.append,
        replace: this.replace,
        target: this.target,
        active: this.active,
        itemClass: this.itemClass,
        linkClass: this.linkClass
      };
    }
  },
  render(h) {
    const itemArray = () => {
      if (this.customProps.active) {
        if (this.customProps.icon) {
          return [
            h(NlyIcon, {
              props: {
                icon: this.customProps.icon
              }
            }),
            this.customProps.text
          ];
        } else {
          return [this.customProps.text];
        }
      } else {
        if (this.customProps.icon) {
          return [
            h(
              NlyLink,
              {
                props: {
                  href: this.customProps.href,
                  to: this.customProps.to,
                  append: this.customProps.append,
                  replace: this.customProps.replace,
                  target: this.customProps.target
                },
                class: [this.customProps.linkClass]
              },
              [
                h(NlyIcon, {
                  props: {
                    icon: this.customProps.icon
                  }
                }),
                this.customProps.text
              ]
            )
          ];
        } else {
          return [
            h(
              NlyLink,
              {
                props: {
                  href: this.customProps.href,
                  to: this.customProps.to,
                  append: this.customProps.append,
                  replace: this.customProps.replace,
                  target: this.customProps.target
                },
                class: [this.customProps.linkClass]
              },
              this.customProps.text
            )
          ];
        }
      }
    };

    return h(
      "li",
      {
        staticClass: ["breadcrumb-item"],
        class: [this.customProps.itemClass]
      },
      itemArray()
    );
  }
});
