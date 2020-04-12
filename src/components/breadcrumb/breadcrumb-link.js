import Vue from "../../utils/vue";
import { mergeData } from "vue-functional-data-merge";
import pluckProps from "../../utils/pluck-props";
import { htmlOrText } from "../../utils/html";
import { NlyLink, propsFactory as linkPropsFactory } from "../link/link";

export const props = {
  ...linkPropsFactory(),
  text: {
    type: String,
    default: null
  },
  html: {
    type: String,
    default: null
  },
  ariaCurrent: {
    type: String,
    default: "location"
  }
};

const name = "NlyBreadcrumbLink";
export const NlyBreadcrumbLink = Vue.extend({
  name: name,
  functional: true,
  props,
  render(h, { props: suppliedProps, data, children }) {
    const tag = suppliedProps.active ? "span" : NlyLink;

    const componentData = { props: pluckProps(props, suppliedProps) };
    if (suppliedProps.active) {
      componentData.attrs = { "aria-current": suppliedProps.ariaCurrent };
    }

    if (!children) {
      componentData.domProps = htmlOrText(
        suppliedProps.html,
        suppliedProps.text
      );
    }

    return h(tag, mergeData(data, componentData), children);
  }
});
