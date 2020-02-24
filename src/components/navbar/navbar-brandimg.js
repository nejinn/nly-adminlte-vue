import Vue from "../utils/vue";

const name = "NlyNavbarBrandimg";

export const NlyNavbarBrandimg = Vue.extend({
  name: name,
  props: {
    src: {
      type: String,
      required: true
    },
    navbarBrandimgClass: {
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
    customNavbarBrandimgClass: function() {
      return this.navbarBrandimgClass;
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
          opacity: 0.8,
          height: "33px"
        },
        staticClass: "brand-image",
        class: [
          this.customCircle,
          this.customElevation,
          this.navbarBrandimgClass
        ]
      },
      this.$slots.default
    );
  }
});
