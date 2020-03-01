import Vue from "../../utils/vue";
import { nlyGetOptionsByKeyEqual } from "../../utils/get-options";
import { sizeOptions } from "../../utils/nly-config";

const name = "NlyControlSidebarContainer";

export const NlyControlSidebarContainer = Vue.extend({
  name: name,
  props: {
    variant: {
      type: String,
      default: "control-sidebar-dark"
    },
    size: {
      type: String
    }
  },
  computed: {
    customProps: function() {
      return {
        variant: this.variant,
        size: this.size ? nlyGetOptionsByKeyEqual(sizeOptions, this.size) : ""
      };
    }
  },
  render(h) {
    return h(
      "aside",
      {
        staticClass: "control-sidebar",
        class: [this.customProps.size, this.customProps.variant]
      },
      this.$slots.default
    );
  }
});
