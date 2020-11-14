import Vue from "../../utils/vue";
import { mergeData } from "vue-functional-data-merge";

const name = "NlyNavbarNav";

const props = {
  tag: {
    type: String,
    default: "ul"
  },
  fill: {
    type: Boolean,
    default: false
  },
  justified: {
    type: Boolean,
    default: false
  },
  align: {
    type: String,
    default: null
  },
  small: {
    type: Boolean,
    default: false
  }
};

const computeJustifyContent = value => {
  value = value === "left" ? "start" : value === "right" ? "end" : value;
  return `justify-content-${value}`;
};

export const NlyNavbarNav = Vue.extend({
  name: name,
  props,
  functional: true,
  render(h, { props, data, children }) {
    return h(
      props.tag,
      mergeData(data, {
        staticClass: "navbar-nav",
        class: {
          "nav-fill": !props.vertical && props.fill,
          "nav-justified": !props.vertical && props.justified,
          [computeJustifyContent(props.align)]: !props.vertical && props.align,
          small: props.small
        }
      }),
      children
    );
  }
});
