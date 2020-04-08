import Vue from "../../utils/vue";
import { NlyNavbarBrandtext } from "../navbar/navbar-brandtext";

const name = "NlySidebarBrandtext";

export const NlySidebarBrandtext = Vue.extend({
  name: name,
  render(h) {
    return h(NlyNavbarBrandtext, this.$slots.default);
  }
});
