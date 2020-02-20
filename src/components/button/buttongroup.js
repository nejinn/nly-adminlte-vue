import Vue from "../utils/vue";

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
      return th;
    }
  },
  render(h) {
    return h(
      "div",
      {
        class: this.customVertical
      },
      this.$slots.default
    );
  }
});
