import Vue from "../../utils/vue";
import { mergeData } from "vue-functional-data-merge";
import { NlyLink, propsFactory as linkPropsFactory } from "../link/link";

export const props = linkPropsFactory();

const name = "NlyNavItem";
export const NlyNavItem = Vue.extend({
  name: name,
  functional: true,
  props: {
    navItem: {
      type: Boolean,
      default: true
    },
    dropdownItem: {
      type: Boolean,
      default: false
    },
    ...props,
    linkAttrs: {
      type: Object,
      default: () => {}
    },
    linkClasses: {
      type: [String, Object, Array],
      default: null
    }
  },
  render(h, { props, data, listeners, children }) {
    delete data.on;
    return h(
      "li",
      mergeData(data, {
        staticClass: props.navItem ? "nav-item" : ""
      }),
      [
        h(
          NlyLink,
          {
            staticClass: props.dropdownItem ? "dropdown-item" : "nav-link",
            class: props.linkClasses,
            attrs: props.linkAttrs,
            props,
            on: listeners
          },
          children
        )
      ]
    );
  }
});
