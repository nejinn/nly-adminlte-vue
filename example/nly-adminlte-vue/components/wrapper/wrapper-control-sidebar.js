import Vue from "../../utils/vue";
import { nlyGetOptionsByKeyEqual } from "../../utils/get-options";
import { textSizeOptions } from "../../utils/nly-config";
import { mergeData } from "vue-functional-data-merge";

export const props = {
  variant: {
    type: Boolean,
    default: true
  },
  size: {
    type: String
  },
  tag: {
    type: String,
    default: "aside"
  },
  controlSidebarClass: {
    type: String
  }
};

const customClass = props => {
  const variant = props.variant
    ? "control-sidebar-dark"
    : "control-sidebar-light";

  const size = () =>
    props.size ? nlyGetOptionsByKeyEqual(textSizeOptions, props.size) : "";

  const controlSidebarClass = props.controlSidebarClass;

  return [variant, size(), controlSidebarClass];
};

const name = "NlyWrapperControlSidebar";

export const NlyWrapperControlSidebar = Vue.extend({
  name: name,
  functional: true,
  props,
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
