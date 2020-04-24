import Vue from "../../utils/vue";
import { nlyGetOptionsByKeyEqual } from "../../utils/get-options";
import { navbarVariantOpitons, textSizeOptions } from "../../utils/nly-config";
import { mergeData } from "vue-functional-data-merge";

export const props = {
  expand: {
    type: String
  },
  variant: {
    type: String,
    default: "white"
  },
  dark: {
    type: Boolean,
    default: false
  },
  size: {
    type: String,
    default: ""
  },
  border: {
    type: Boolean,
    default: true
  },
  wrapperHeaderClass: {
    type: String
  },
  tag: {
    type: String,
    default: "header"
  },
  nav: {
    type: Boolean,
    default: false
  }
};

const customClass = props => {
  const customNavbarExpand = () => {
    if (props.nav) {
      return props.expand == "xl"
        ? "navbar-expand-xl"
        : props.expand == "lg"
        ? "navbar-expand-lg"
        : props.expand == "md"
        ? "navbar-expand-md"
        : props.expand == "sm"
        ? "navbar-expand-sm"
        : props.expand == "no"
        ? "navbar-no-expand"
        : props.expand == "expand"
        ? "navbar-expand"
        : "";
    } else {
      return "";
    }
  };

  const customnNvbarVariant = () => {
    if (props.nav) {
      return nlyGetOptionsByKeyEqual(navbarVariantOpitons, props.variant);
    } else {
      return "";
    }
  };

  const customNavbarFontSize = () => {
    if (props.nav) {
      return nlyGetOptionsByKeyEqual(textSizeOptions, props.size);
    } else {
      return "";
    }
  };
  const customNavbarBorder = () => {
    if (props.nav) {
      return props.border ? "" : "border-bottom-0";
    } else {
      return "";
    }
  };
  const customWrapperHeaderClass = () => {
    return props.wrapperHeaderClass;
  };
  const customNavbarDark = () => {
    if (props.nav) {
      return props.dark ? "navbar-dark" : "navbar-light";
    } else {
      return "";
    }
  };

  return [
    customNavbarExpand(),
    customnNvbarVariant(),
    customNavbarFontSize(),
    customNavbarBorder(),
    customWrapperHeaderClass(),
    customNavbarDark()
  ];
};

const name = "NlyWrapperHeader";

export const NlyWrapperHeader = Vue.extend({
  name: name,
  props,
  functional: true,
  render(h, { props, data, children }) {
    return h(
      props.nav ? "nav" : props.tag,
      mergeData(data, {
        staticClass: props.nav ? "navbar" : "main-header",
        class: customClass(props)
      }),
      children
    );
  }
});
