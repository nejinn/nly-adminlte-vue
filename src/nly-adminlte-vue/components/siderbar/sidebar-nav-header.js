import Vue from "../../utils/vue";

const name = "NlySidebarNavHeader";

export const NlySidebarNavHeader = Vue.extend({
  name: name,
  props: {
    tag: {
      type: String,
      default: "li"
    }
  },
  computed: {
    customTag: function() {
      return this.tag;
    }
  },
  render(h) {
    return h(
      this.customTag,
      {
        staticClass: "nav-header"
      },
      this.$slots.default
    );
  }
});
