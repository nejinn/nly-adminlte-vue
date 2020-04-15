import Vue from "../../utils/vue";
import { nlyGetOptionsByKeyEqual } from "../../utils/get-options";
import { textSizeOptions } from "../../utils/nly-config";

const name = "NlyWrapperControlSidebar";

export const NlyWrapperControlSidebar = Vue.extend({
  name: name,
  props: {
    variant: {
      type: String,
      default: "control-sidebar-dark"
    },
    size: {
      type: String
    },
    tag: {
      type: String,
      default: "aside"
    }
  },
  computed: {
    customProps: function() {
      return {
        variant: this.variant,
        size: this.size
          ? nlyGetOptionsByKeyEqual(textSizeOptions, this.size)
          : ""
      };
    },
    customTag() {
      return this.tag;
    }
  },
  render(h) {
    return h(
      this.customTag,
      {
        staticClass: "control-sidebar",
        class: [this.customProps.size, this.customProps.variant]
      },
      this.$slots.default
    );
  }
});
