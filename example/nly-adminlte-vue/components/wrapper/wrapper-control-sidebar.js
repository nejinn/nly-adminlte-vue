import Vue from "../../utils/vue";
import { nlyGetOptionsByKeyEqual } from "../../utils/get-options";
import { bgVariantOptions, bgGradientOptions } from "../../utils/nly-config";
import { textSizeOptions } from "../../utils/nly-config";
import { mergeData } from "vue-functional-data-merge";

export const props = {
  light: {
    type: Boolean,
    default: false
  },
  bgVariant: {
    type: String
  },
  bgGradientVariant: {
    type: String
  },
  size: {
    type: String
  },
  wrapperControlSidebarClass: {
    type: String
  },
  tag: {
    type: String,
    default: "aside"
  }
};

const customClass = props => {
  const light = () => {
    if (!props.bgVariant && !props.bgGradientVariant) {
      return props.light ? "control-sidebar-light" : "control-sidebar-dark";
    } else {
      return null;
    }
  };
  const bgVariant = () =>
    !props.bgGradientVariant
      ? nlyGetOptionsByKeyEqual(bgVariantOptions, props.bgVariant)
      : null;

  const bgGradientVariant = () =>
    nlyGetOptionsByKeyEqual(bgGradientOptions, props.bgGradientVariant);
  const size = () =>
    props.size ? nlyGetOptionsByKeyEqual(textSizeOptions, props.size) : "";

  return [
    light(),
    bgVariant(),
    bgGradientVariant(),
    size(),
    props.controlSidebarContainerClass
  ];
};

const name = "NlyWrapperControlSidebar";

export const NlyWrapperControlSidebar = Vue.extend({
  name: name,
  props,
  functional: true,
  render(h, { props, data, children }) {
    return h(
      props.tag,
      mergeData(data, {
        staticClass: "control-sidebar",
        class: customClass(props)
      }),
      children
    );
  }
});
