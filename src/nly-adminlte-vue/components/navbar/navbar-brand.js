import Vue from "../../utils/vue";
import { NlyLink } from "../link/link";

const name = "NlyNavbarBrand";

export const NlyNavbarBrand = Vue.extend({
  name: name,
  render(h) {
    return h(
      NlyLink,
      {
        staticClass: "navbar-brand"
      },
      this.$slots.default
    );
  }
});
