import Vue from "../../utils/vue";

const name = "NlySidebarBrandimg";

export const NlySidebarBrandimg = Vue.extend({
  name: name,
  props: {
    src: {
      type: String,
      required: true
    },
    sidebarBrandimgClass: {
      type: String
    },
    alt: {
      type: String
    },
    circle: {
      type: Boolean,
      default: false
    },
    elevation: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    customSrc: function() {
      return this.src;
    },
    customSidebarBrandimgClass: function() {
      return this.sidebarBrandimgClass;
    },
    customCircle: function() {
      return this.circle ? "img-circle" : "";
    },
    customAlt: function() {
      return this.alt;
    },
    customElevation: function() {
      return this.elevation ? "elevation-3" : "";
    }
  },
  render(h) {
    return h(
      "img",
      {
        attrs: {
          alt: this.customAlt,
          src: this.customSrc
        },
        style: {
          opacity: 0.8
        },
        staticClass: "brand-image",
        class: [
          this.customCircle,
          this.customElevation,
          this.customSidebarBrandimgClass
        ]
      },
      this.$slots.default
    );
  }
});
