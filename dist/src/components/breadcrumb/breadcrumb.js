import Vue from "../../utils/vue";
import { NlyBreadcrumbItem } from "./breadcrumb-item";
import { mergeData } from "vue-functional-data-merge";
import { isArray, isObject } from "../../utils/inspect";
import { toString } from "../../utils/string";

const name = "NlyBreadcrumb";

export const props = {
  item: {
    type: Array,
    default: null
  },
  breadcrumbClass: {
    type: String
  }
};

export const NlyBreadcrumb = Vue.extend({
  name: name,
  functional: true,
  props,
  render(h, { props, data, children }) {
    let childNodes = children;
    if (isArray(props.item)) {
      let activeDefined = false;
      childNodes = props.item.map((item, idx) => {
        if (!isObject(item)) {
          item = { text: toString(item) };
        }
        let active = item.active;
        if (active) {
          activeDefined = true;
        }
        if (!active && !activeDefined) {
          active = idx + 1 === props.item.length;
        }
        return h(NlyBreadcrumbItem, { props: { ...item, active } });
      });
    }

    return h(
      "ol",
      mergeData(data, {
        staticClass: "breadcrumb",
        class: [props.breadcrumbClass]
      }),
      childNodes
    );
  }
});
