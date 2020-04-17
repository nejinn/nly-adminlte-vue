import Vue from "../../utils/vue";

const name = "NlyCardTool";

export const NlyCardTool = Vue.extend({
  name: name,
  props: {
    cardToolClass: {
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
        cardToolClass: this.cardToolClass,
        tag: this.tag
      };
    }
  },
  render(h) {
    return h(
      this.customProps.tag,
      {
        staticClass: "card-tools",
        class: [this.customProps.cardToolClass]
      },
      this.$slots.default
    );
  }
});
