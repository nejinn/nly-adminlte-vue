import Vue from "../../utils/vue";

const name = "NlyCardTool";

export const NlyCardTool = Vue.extend({
  name: name,
  props: {
    toolClass: {
      type: String
    },
    tag: {
      type: String,
      default: "div"
    }
  },
  computed: {
    customProps() {
      return {
        toolClass: this.toolClass,
        tag: this.tag
      };
    }
  },
  render(h) {
    return h(
      this.customProps.tag,
      {
        staticClass: "card-tools",
        class: [this.customProps.toolClass]
      },
      this.$slots.default
    );
  }
});
