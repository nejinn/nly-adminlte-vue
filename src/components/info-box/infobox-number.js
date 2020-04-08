import Vue from "../../utils/vue";
import { toCurrency } from "../../utils/number";

const name = "NlyInfoboxNumber";

export const NlyInfoboxNumber = Vue.extend({
  name: name,
  props: {
    number: {
      type: [String, Number]
    },
    numberClass: {
      type: String
    }
  },
  computed: {
    customProps() {
      return {
        numberClass: this.numberClass,
        number: this.number ? toCurrency(this.number) : ""
      };
    }
  },
  render(h) {
    return h(
      "span",
      {
        staticClass: "info-box-number",
        class: [this.customProps.numberClass]
      },
      [this.customProps.number, this.$slots.default]
    );
  }
});
