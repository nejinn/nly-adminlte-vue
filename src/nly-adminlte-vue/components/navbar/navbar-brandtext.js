import Vue from "../../utils/vue";

const name = "NlyNavbarBrandtext";

export const NlyNavbarBrandtext = Vue.extend({
  name: name,
  props: {
    navbarBrandtextClass: {
      type: String
    }
  },
  computed: {
    customNavbarBrandtextClass: function() {
      return this.navbarBrandtextClass;
    }
  },
  render(h) {
    return h(
      "span",
      {
        staticClass: "brand-text font-weight-light",
        class: [this.customNavbarBrandtextClass]
      },
      this.$slots.default
    );
  }
});
