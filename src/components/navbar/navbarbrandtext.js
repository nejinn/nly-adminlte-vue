import Vue from "../utils/vue";

export var NlyNavbarBrandtext = Vue.extend({
  name: "NlyNavbarBrandtext",
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
