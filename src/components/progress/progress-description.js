import Vue from "../../utils/vue";

const name = "NlyProgressDescription";

export const NlyProgressDescription = Vue.extend({
  name: name,
  props: {
    text: {
      type: String
    }
  },
  computed: {
    customProps: function() {
      return {
        text: this.text
      };
    }
  },
  render(h) {
    const textArray = () => {
      if (this.customProps.text) {
        return [this.customProps.text, this.$slots.default];
      } else {
        return [this.$slots.default];
      }
    };
    return h(
      "span",
      {
        staticClass: "progress-description"
      },
      textArray()
    );
  }
});
