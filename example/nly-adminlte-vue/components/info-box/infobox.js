import Vue from "../../utils/vue";
import { bgVariantOptions, bgGradientOptions } from "../../utils/nly-config";
import { nlyGetOptionsByKeyEqual } from "../../utils/get-options";
import { NlyIcon } from "../icons/icon";
import { NlyOverlay } from "../overlay/overlay";
import { mergeData } from "vue-functional-data-merge";

export const props = {
  bgVariant: {
    type: String
  },
  bgGradientVariant: {
    type: String
  },
  tag: {
    type: String,
    default: "div"
  },
  loading: {
    type: Boolean,
    default: false
  },
  loadingContent: {
    type: String
  },
  loadingContentTag: {
    type: String,
    default: "p"
  },
  loadingContentClass: {
    type: String
  },
  loadingIcon: {
    type: String,
    default: "fas fa-2x fa-sync-alt fa-spin"
  },
  loadingImgSrc: {
    type: String
  },
  loadingImgClass: {
    type: String
  },
  dark: {
    type: Boolean,
    default: false
  }
};

const customBgVariant = props =>
  nlyGetOptionsByKeyEqual(bgVariantOptions, props.bgVariant);

const customBgGradientVariant = props =>
  nlyGetOptionsByKeyEqual(bgGradientOptions, props.bgGradientVariant);

const name = "NlyInfobox";

export const NlyInfobox = Vue.extend({
  name: name,
  functional: true,
  props,
  render(h, { props, data, children }) {
    const overlayArray = () => {
      if (props.loadingContent) {
        return h(
          NlyOverlay,
          {
            props: {
              dark: props.dark
            }
          },
          [loadingContentArray()]
        );
      } else {
        return h(
          NlyOverlay,
          {
            props: {
              dark: props.dark
            }
          },
          [loadingIcon()]
        );
      }
    };

    const loadingContentArray = () => {
      return h(
        props.loadingContentTag,
        {
          class: [props.loadingContentClass]
        },
        props.loadingContent
      );
    };

    const loadingIcon = () => {
      return h(NlyIcon, {
        props: {
          icon: props.loadingIcon
        }
      });
    };

    const loadingImgArray = () => {
      return h("img", {
        attrs: {
          alt: "loading-img",
          src: props.loadingImgSrc
        },
        staticClass: "loading-img",
        class: [props.loadingImgClass]
      });
    };

    const loadingArray = () => {
      if (props.loading && !props.loadingImgSrc) {
        return [children, overlayArray()];
      } else if (props.loading && props.loadingImgSrc) {
        return [children, loadingImgArray()];
      } else {
        return children;
      }
    };
    return h(
      props.tag,
      mergeData(data, {
        staticClass: "info-box",
        class: [customBgVariant(props), customBgGradientVariant(props)]
      }),
      loadingArray()
    );
  }
});
