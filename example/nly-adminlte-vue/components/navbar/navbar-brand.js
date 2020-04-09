import Vue from "../../utils/vue";
import { NlyLink } from "../link/link";

const name = "NlyNavbarBrand";

export const NlyNavbarBrand = Vue.extend({
  name: name,
  props: {
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
  },
  computed: {
    customHref() {
      return this.href;
    },
    customTo() {
      return this.to;
    },
    customTarget() {
      return this.target;
    }
  },
  render(h) {
    return h(
      NlyLink,
      {
        staticClass: "navbar-brand",
        props: {
          to: this.customTo,
          href: this.customHref,
          target: this.customTarget
        }
      },
      this.$slots.default
    );
  }
});
