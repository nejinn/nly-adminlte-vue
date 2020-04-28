import Vue from "../utils/vue";
import { nlyGetOptionsByKeyEqual } from "../utils/get-options";
import { textSizeOptions } from "../utils/nly-config";

const name = "NlyIcon";

export const NlyIcon = Vue.extend({
  name: name,
  props: {
    size: {
      type: String
    },
    tag: {
      type: String,
      default: "i"
    },
    icon: {
      type: String
    }
  },
  computed: {
    customClass: function() {
      return [this.icon, nlyGetOptionsByKeyEqual(textSizeOptions, this.size)];
    },
    customTag: function() {
      return this.tag;
    }
  },
  render(h) {
    return h(
      this.customTag,
      {
        class: this.customClass
      },
      this.$slots.default
    );
  }
});
