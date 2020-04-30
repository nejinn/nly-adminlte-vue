import Vue from "../../utils/vue";
import { bgVariantOptions, bgGradientOptions } from "../../utils/nly-config";
import { nlyGetOptionsByKeyEqual } from "../../utils/get-options";
import { NlyIcon } from "../icons/icon";
import { NlyOverlay } from "../overlay/overlay";

const name = "NlyInfobox";

export const NlyInfobox = Vue.extend({
  name: name,
  props: {
    bgVariant: {
      type: String
    },
    bgGradientVariant: {
      type: String
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
  },
  computed: {
    customProps: function() {
      return {
        bgVariant: nlyGetOptionsByKeyEqual(bgVariantOptions, this.bgVariant),
        bgGradientVariant: nlyGetOptionsByKeyEqual(
          bgGradientOptions,
          this.bgGradientVariant
        ),
        loading: this.loading,
        loadingContent: this.loadingContent,
        loadingContentTag: this.loadingContentTag,
        loadingContentClass: this.loadingContentClass,
        loadingIcon: this.loadingIcon,
        loadingImgSrc: this.loadingImgSrc,
        loadingImgClass: this.loadingImgClass,
        dark: this.dark
      };
    }
  },
  render(h) {
    const overlayArray = () => {
      if (this.customProps.loadingContent) {
        return h(
          NlyOverlay,
          {
            props: {
              dark: this.customProps.dark
            }
          },
          [loadingContentArray()]
        );
      } else {
        return h(
          NlyOverlay,
          {
            props: {
              dark: this.customProps.dark
            }
          },
          [loadingIcon()]
        );
      }
    };

    const loadingContentArray = () => {
      return h(
        this.customProps.loadingContentTag,
        {
          class: [this.customProps.loadingContentClass]
        },
        this.customProps.loadingContent
      );
    };

    const loadingIcon = () => {
      return h(NlyIcon, {
        props: {
          icon: this.customProps.loadingIcon
        }
      });
    };

    const loadingImgArray = () => {
      return h("img", {
        attrs: {
          alt: "loading-img",
          src: this.customProps.loadingImgSrc
        },
        staticClass: "loading-img",
        class: [this.customProps.loadingImgClass]
      });
    };

    const loadingArray = () => {
      if (this.customProps.loading && !this.customProps.loadingImgSrc) {
        return [this.$slots.default, overlayArray()];
      } else if (this.customProps.loading && this.customProps.loadingImgSrc) {
        return [this.$slots.default, loadingImgArray()];
      } else {
        return [this.$slots.default];
      }
    };
    return h(
      "div",
      {
        staticClass: "info-box",
        class: [this.customProps.bgVariant, this.customProps.bgGradientVariant]
      },
      [loadingArray()]
    );
  }
});
