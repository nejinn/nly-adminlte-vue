import Vue from "../../utils/vue";

const name = "NlyInfoboxText";

export const NlyInfoboxText = Vue.extend({
  name: name,
  props: {
    textClass: {
      type: String
    },
    text: {
      type: String
    }
  },
  computed: {
    customProps() {
      return {
        textClass: this.textClass,
        text: this.text
      };
    }
  },
  render(h) {
    return h(
      "span",
      {
        staticClass: "info-box-text",
        class: [this.customProps.textClass]
      },
      [this.customProps.text, this.$slots.default]
    );
  }
});
