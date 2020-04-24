import Vue from "../../utils/vue";
import { mergeData } from "vue-functional-data-merge";
import { bgVariantOptions, bgGradientOptions } from "../../utils/nly-config";
import { nlyGetOptionsByKeyEqual } from "../../utils/get-options";

export const props = {
  size: {
    type: String
  },
  bgVariant: {
    type: String
  },
  bgGradientVariant: {
    type: String
  },
  mainFooterClass: {
    type: String
  },
  tag: {
    type: String,
    default: "footer"
  }
};

const customClass = props => {
  const size =
    props.size == "sm" ? "text-sm" : props.size == "lg" ? "text-lg" : "";
  const bgVariant = () =>
    nlyGetOptionsByKeyEqual(bgVariantOptions, props.bgVariant);
  const bgGradientVariant = () =>
    nlyGetOptionsByKeyEqual(bgGradientOptions, props.bgGradientVariant);
  const mainFooterClass = props.mainFooterClass;

  return [size, bgVariant(), bgGradientVariant(), mainFooterClass];
};

const name = "NlyWrapperFooter";

export const NlyWrapperFooter = Vue.extend({
  name: name,
  props,
  functional: true,
  render(h, { props, data, children }) {
    return h(
      props.tag,
      mergeData(data, {
        staticClass: "main-footer",
        class: customClass(props)
      }),
      children
    );
  }
});
