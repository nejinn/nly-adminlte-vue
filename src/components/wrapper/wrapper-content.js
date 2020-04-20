import Vue from "../../utils/vue";

const name = "NlyWrapperContent";

export const NlyWrapperContent = Vue.extend({
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
        staticClass: "content-wrapper"
      },
      this.$slots.default
    );
  }
});
