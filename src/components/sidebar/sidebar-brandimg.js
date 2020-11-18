import Vue from "../../utils/vue";
import { mergeData } from "vue-functional-data-merge";

export const props = {
  src: {
    type: String,
    required: true
  },
  sidebarBrandimgClass: {
    type: String
  },
  alt: {
    type: String
  },
  circle: {
    type: Boolean,
    default: false
  },
  elevation: {
    type: Boolean,
    default: false
  }
};

const name = "NlySidebarBrandimg";

export const NlySidebarBrandimg = Vue.extend({
  name: name,
  props,
  functional: true,
  render(h, { props, data, children }) {
    return h(
      "img",
      mergeData(data, {
        attrs: {
          alt: props.alt,
          src: props.src
        },
        style: {
          opacity: 0.8
        },
        staticClass: "brand-image",
        class: [
          props.circle ? "img-circle" : "",
          props.elevation ? "elevation-3" : "",
          props.customSidebarBrandimgClass
        ]
      }),
      children
    );
  }
});
