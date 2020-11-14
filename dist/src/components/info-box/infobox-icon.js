import Vue from "../../utils/vue";
import { NlyIcon } from "../icons/icon";
import { bgVariantOptions, bgGradientOptions } from "../../utils/nly-config";
import { nlyGetOptionsByKeyEqual } from "../../utils/get-options";
import { mergeData } from "vue-functional-data-merge";

export const props = {
  icon: {
    type: String,
    required: true
  },
  bgVariant: {
    type: String
  },
  bgGradientVariant: {
    type: String
  },
  infoboxIconClass: {
    type: String
  },
  tag: {
    type: String,
    default: "span"
  }
};

const customClass = props => {
  const bgVariant = () =>
    nlyGetOptionsByKeyEqual(bgVariantOptions, props.bgVariant);
  const bgGradientVariant = () =>
    nlyGetOptionsByKeyEqual(bgGradientOptions, props.bgGradientVariant);
  return [bgVariant(), bgGradientVariant(), props.infoboxIconClass];
};

const name = "NlyInfoboxIcon";

export const NlyInfoboxIcon = Vue.extend({
  name: name,
  functional: true,
  props,
  render(h, { props, data }) {
    return h(
      props.tag,
      mergeData(data, {
        staticClass: "info-box-icon",
        class: customClass(props)
      }),
      [
        h(NlyIcon, {
          props: {
            icon: props.icon
          }
        })
      ]
    );
  }
});
