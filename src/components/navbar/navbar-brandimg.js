import Vue from "../../utils/vue";
import { mergeData } from "vue-functional-data-merge";

const name = "NlyNavbarBrandimg";

export const props = {
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
};

const customClass = props => {
  return [
    props.circle ? "img-circle" : null,
    props.elevation ? "elevation-3" : null,
    props.navbarBrandimgClass
  ];
};

export const NlyNavbarBrandimg = Vue.extend({
  name: name,
  props,
  functional: true,
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
  render(h, { props, data, children }) {
    return h(
      "img",
      mergeData(data, {
        attrs: {
          alt: props.alt,
          src: props.src
        },
        style: {
          opacity: 0.8,
          height: "33px"
        },
        staticClass: "brand-image",
        class: customClass(props)
      }),
      children
    );
  }
});
