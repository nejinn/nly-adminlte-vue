import Vue from "../../utils/vue";
import { nlyGetOptionsByKeyEqual } from "../../utils/get-options";
import { sizeOptions, sidebarNavShapeOptions } from "../../utils/nly-config";

const name = "NlySidebarNav";

export const NlySidebarNav = Vue.extend({
  name: name,
  props: {
    shape: {
      type: String
    },
    childIndent: {
      type: Boolean,
      default: false
    },
    size: {
      String
    },
    sidebarNavClass: {
      type: String
    },
    role: {
      type: String,
      default: "menu"
    }
  },
  computed: {
    customShape: function() {
      return nlyGetOptionsByKeyEqual(sidebarNavShapeOptions, this.shape);
    },
    customChildIndent: function() {
      return this.childIndent ? "nav-child-indent" : "";
    },
    customSize: function() {
      return nlyGetOptionsByKeyEqual(sizeOptions, this.size);
    },
    customSidebarNavClass: function() {
      return this.sidebarNavClass;
    },
    customRole: function() {
      return this.role;
    }
  },
  render(h) {
    return h("nav", [
      h(
        "ul",
        {
          staticClass: "nav nav-sidebar flex-column",
          class: [
            this.customShape,
            this.customSize,
            this.customChildIndent,
            this.customSidebarNavClass
          ],
          attrs: {
            role: this.customRole
          }
        },
        this.$slots.default
      )
    ]);
  }
});
