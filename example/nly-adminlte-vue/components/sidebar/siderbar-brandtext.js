import Vue from "../../utils/vue";
import {
  NlyNavbarBrandtext,
  props as textProps
} from "../navbar/navbar-brandtext";
import { mergeData } from "vue-functional-data-merge";

const name = "NlySidebarBrandtext";

export const NlySidebarBrandtext = Vue.extend({
  name: name,
  functional: true,
  props: {
    ...textProps
  },
  render(h, { props, data, children }) {
    return h(
      NlyNavbarBrandtext,
      mergeData(data, {
        props: props
      }),
      children
    );
  }
});
