import Vue from "../../utils/vue";
import { mergeData } from "vue-functional-data-merge";
import { NlyBreadcrumbLink, props as itemProps } from "./breadcrumb-link";
import { NlyIcon } from "../icon";

export const props = {
  ...itemProps,
  icon: {
    type: String
  },
  itemClass: {
    type: String
  },
  linkClass: {
    type: String
  }
};

export const NlyBreadcrumbItem = Vue.extend({
  name: "NlyBreadcrumbItem",
  functional: true,
  props,
  render(h, { props, data, children }) {
    if (props.icon) {
      return h(
        "li",
        mergeData(data, {
          staticClass: "breadcrumb-item",
          class: { active: props.active }
        }),
        [
          h(NlyIcon, { staticClass: "mr-1", props: { icon: props.icon } }),
          h(NlyBreadcrumbLink, { class: [props.linkClass], props }, children)
        ]
      );
    } else {
      return h(
        "li",
        mergeData(data, {
          staticClass: "breadcrumb-item",
          class: [props.active ? "active" : "", props.itemClass]
        }),
        [h(NlyBreadcrumbLink, { class: [props.linkClass], props }, children)]
      );
    }
  }
});
