import Vue from "../../utils/vue";
import { NlyLink } from "../link/link";
import { mergeData } from "vue-functional-data-merge";

const name = "NlyNavbarBrand";

export const props = {
  href: {
    type: String,
    default: null
  },
  target: {
    type: String,
    default: "_self"
  },
  to: {
    type: [String, Object],
    default: null
  }
};

export const NlyNavbarBrand = Vue.extend({
  name: name,
  props,
  functional: true,
  render(h, { props, data, children }) {
    return h(
      NlyLink,
      mergeData(data, {
        staticClass: "navbar-brand",
        props: {
          to: props.customTo,
          href: props.customHref,
          target: props.customTarget
        }
      }),
      children
    );
  }
});
