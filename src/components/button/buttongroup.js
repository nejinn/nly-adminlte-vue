import Vue from "../utils/vue";
import { getOptionsByKeyEqual } from "../utils/getOptions";

const sizeOptions = {
  sm: "btn-group-sm",
  lg: "btn-group-lg"
};
export var NlyButtonGroup = Vue.extend({
  name: "NlyButtonGroup",
  props: {
    vertical: {
      type: Boolean
    },
    size: {
      type: String
    }
  },
  computed: {
    customVertical: function() {
      return this.vertical ? "btn-group-vertical" : "btn-group";
    },
    customSize: function() {
      return getOptionsByKeyEqual(sizeOptions, this.size);
    }
  },
  render(h) {
    return h(
      "div",
      {
        class: [this.customVertical, this.customSize]
      },
      this.$slots.default
    );
  }
});
