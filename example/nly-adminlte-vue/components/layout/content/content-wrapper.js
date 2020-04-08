import Vue from "../../../utils/vue";

const name = "NlyContentWrapper";

export const NlyContentWrapper = Vue.extend({
  name: name,
  props: {
    tag: {
      type: String,
      default: "div"
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
