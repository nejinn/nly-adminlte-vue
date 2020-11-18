import Vue from "../../utils/vue";
import { nlyGetOptionsByKeyEqual } from "../../utils/get-options";
import { textSizeOptions } from "../../utils/nly-config";
import { mergeData } from "vue-functional-data-merge";

export const props = {
  pill: {
    type: Boolean,
    default: false
  },
  flat: {
    type: Boolean,
    default: false
  },
  legacy: {
    type: Boolean,
    default: false
  },
  compact: {
    type: Boolean,
    default: false
  },
  childIndent: {
    type: Boolean,
    default: false
  },
  size: {
    String
  },
  sidebarNavClass: {
    type: String
  },
  role: {
    type: String,
    default: "menu"
  }
};

export const customShape = props => {
  return {
    flat: props.flat ? "nav-flat" : "",
    pill: props.pill ? "nav-pills" : "",
    legacy: props.legacy ? "nav-legacy" : "",
    compact: props.compact ? "nav-compact" : ""
  };
};
export const customChildIndent = props => {
  return props.childIndent ? "nav-child-indent" : "";
};
export const customSize = props => {
  return nlyGetOptionsByKeyEqual(textSizeOptions, props.size);
};

const name = "NlySidebarNav";

export const NlySidebarNav = Vue.extend({
  name: name,
  props,
  functional: true,
  render(h, { props, data, children }) {
    const $childrenVnodes = h(
      "ul",
      {
        staticClass: "nav nav-sidebar flex-column",
        class: [
          customShape(props).flat,
          customShape(props).pill,
          customShape(props).legacy,
          customShape(props).compact,
          customSize(props),
          customChildIndent(props),
          props.sidebarNavClass
        ],
        attrs: {
          role: props.role
        }
      },
      children
    );
    return h("nav", mergeData(data, {}), [$childrenVnodes]);
  }
});
