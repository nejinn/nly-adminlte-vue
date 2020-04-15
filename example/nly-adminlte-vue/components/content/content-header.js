import Vue from "../../utils/vue";

const name = "NlyContentHeader";

export const NlyContentHeader = Vue.extend({
  name: name,
  props: {
    tag: {
      type: String,
      default: "section"
    }
  },
  computed: {
    customProps() {
      return {
        tag: this.tag
      };
    }
  },
  render(h) {
    return h(
      this.customProps.tag,
      {
        staticClass: "content-header"
      },
      this.$slots.default
    );
  }
});
