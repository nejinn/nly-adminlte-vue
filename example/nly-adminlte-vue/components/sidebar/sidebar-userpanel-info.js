import Vue from "../../utils/vue";
import { NlyLink, propsFactory as linkPropsFactory } from "../link/link";
import { mergeData } from "vue-functional-data-merge";

export const linkProps = linkPropsFactory();

export const props = {
  infoClass: {
    type: String
  },
  ...linkProps
};

const name = "NlySidebarUserpanelInfo";

export const NlySidebarUserpanelInfo = Vue.extend({
  name: name,
  functional: true,
  props,
  render(h, { props, data, children }) {
    return h(
      "div",
      mergeData(data, {
        staticClass: "info"
      }),
      [
        h(
          NlyLink,
          {
            staticClass: "d-block",
            class: props.infoClass,
            props: props
          },
          children
        )
      ]
    );
  }
});
