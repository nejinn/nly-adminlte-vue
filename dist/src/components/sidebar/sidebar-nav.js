import Vue from "../../utils/vue";
import { nlyGetOptionsByKeyEqual } from "../../utils/get-options";
import { textSizeOptions } from "../../utils/nly-config";

const name = "NlySidebarNav";

export const NlySidebarNav = Vue.extend({
  name: name,
  props: {
    pill: {
      type: Boolean,
      default: false
    },
    flat: {
      type: Boolean,
      default: false
    },
    legacy: {
      type: Boolean,
      default: false
    },
    compact: {
      type: Boolean,
      default: false
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
      return {
        flat: this.flat ? "nav-flat" : "",
        pill: this.pill ? "nav-pills" : "",
        legacy: this.legacy ? "nav-legacy" : "",
        compact: this.compact ? "nav-compact" : ""
      };
    },
    customChildIndent: function() {
      return this.childIndent ? "nav-child-indent" : "";
    },
    customSize: function() {
      return nlyGetOptionsByKeyEqual(textSizeOptions, this.size);
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
            this.customShape.flat,
            this.customShape.pill,
            this.customShape.legacy,
            this.customShape.compact,
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
