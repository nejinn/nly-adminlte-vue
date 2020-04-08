import Vue from "../../utils/vue";

const name = "NlyOverlay";

export const NlyOverlay = Vue.extend({
  name: name,
  props: {
    sidebar: {
      type: Boolean,
      default: false
    },
    dark: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    customProps() {
      return {
        sidebar: this.sidebar,
        dark: this.dark ? "dark" : ""
      };
    }
  },
  render(h) {
    const overlayArray = () => {
      if (this.customProps.sidebar) {
        return h(
          "div",
          {
            attrs: {
              id: "sidebar-overlay"
            }
          },
          this.$slots.default
        );
      } else {
        return h(
          "div",
          {
            staticClass: "overlay",
            class: this.customProps.dark
          },
          this.$slots.default
        );
      }
    };
    return overlayArray();
  }
});
