import Vue from "../../utils/vue";

const name = "NlyNavbarBrand";

export const NlyNavbarBrand = Vue.extend({
  name: name,
  props: {
    to: {
      type: String
    },
    link: {
      type: String
    },
    navbarBrandClass: {
      type: String
    }
  },
  computed: {
    routerTo: function() {
      return this.to;
    },
    routerLink: function() {
      return this.link;
    },
    customNavbarBrandClass: function() {
      return this.navbarBrandClass;
    },
    navbarBrandArray: function() {
      let hArray = {};
      if (this.routerTo) {
        hArray = {
          tag: "router-link",
          config: {
            props: {
              to: this.routerTo
            },
            staticClass: "navbar-brand",
            class: this.customNavbarBrandClass
          },
          content: this.$slots.default
        };
      } else if (this.routerLink) {
        hArray = {
          tag: "a",
          config: {
            staticClass: "navbar-brand",
            attrs: { href: this.routerLink },
            class: this.customNavbarBrandClass
          },
          content: this.$slots.default
        };
      } else {
        hArray = {
          tag: "router-link",
          config: {
            props: {
              to: "#"
            },
            staticClass: "navbar-brand",
            class: this.customNavbarBrandClass
          },
          content: this.$slots.default
        };
      }
      return hArray;
    }
  },
  render(h) {
    return h(
      this.navbarBrandArray.tag,
      this.navbarBrandArray.config,
      this.navbarBrandArray.content
    );
  }
});
