import Vue from "../../utils/vue";
import { nlyGetOptionsByKeyEqual } from "../../utils/get-options";
import { sidebarElevationOptions } from "../../utils/nly-config";
import { mergeData } from "vue-functional-data-merge";

export const props = {
  src: {
    type: String,
    required: true
  },
  circle: {
    type: Boolean,
    default: true
  },
  elevation: {
    type: String,
    default: "md"
  },
  alt: {
    type: String
  },
  imgClass: {
    type: String
  }
};

export const customElevation = props => {
  return nlyGetOptionsByKeyEqual(sidebarElevationOptions, props.elevation);
};

const name = "NlySidebarUserpanelImg";

export const NlySidebarUserpanelImg = Vue.extend({
  name: name,
  props,
  functional: true,
  render(h, { props, data }) {
    const $inner = h("img", {
      attrs: {
        src: props.src,
        alt: props.alt
      },
      class: [
        props.circle ? "img-circle" : "",
        customElevation(props),
        props.imgClass
      ]
    });
    return h(
      "div",
      mergeData(data, {
        staticClass: "image"
      }),
      [$inner]
    );
  }
});
