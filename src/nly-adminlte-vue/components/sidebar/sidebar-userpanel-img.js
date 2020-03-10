import Vue from "../../utils/vue";
import { nlyGetOptionsByKeyEqual } from "../../utils/get-options";
import { sidebarElevationOptions } from "../../utils/nly-config";

const name = "NlySidebarUserpanelImg";

export const NlySidebarUserpanelImg = Vue.extend({
  name: name,
  props: {
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
  },
  computed: {
    customSrc: function() {
      return this.src;
    },
    customCircle: function() {
      return this.circle ? "img-circle" : "";
    },
    customElevation: function() {
      return nlyGetOptionsByKeyEqual(sidebarElevationOptions, this.elevation);
    },
    customAlt: function() {
      return this.alt;
    },
    customImgClass: function() {
      return this.imgClass;
    }
  },
  render(h) {
    const inner = h("img", {
      attrs: {
        src: this.customSrc,
        alt: this.customAlt
      },
      class: [this.customCircle, this.customElevation, this.customImgClass]
    });
    return h(
      "div",
      {
        staticClass: "image"
      },
      [inner]
    );
  }
});
