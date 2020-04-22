import Vue from "../../utils/vue";
import { textVariantOptions } from "../../utils/nly-config";
import { nlyGetOptionsByKeyEqual } from "../../utils/get-options";
import { mergeData } from "vue-functional-data-merge";

const name = "NlyCardText";

export const props = {
  cardTextClass: {
    type: String
  },
  tag: {
    type: String,
    default: "p"
  },
  textVariant: {
    type: String
  }
};

const customClass = props => {
  return [];
};

export const NlyCardText = Vue.extend({
  name: name,
  props,
  functional: true,
  computed: {
    customProps() {
      return {
        cardTextClass: this.cardTextClass,
        tag: this.tag,
        textVariant: nlyGetOptionsByKeyEqual(
          textVariantOptions,
          this.textVariant
        )
      };
    }
  },
  render(h) {
    return h(
      this.customProps.tag,
      {
        staticClass: "card-text",
        class: [this.customProps.cardTextClass, this.customProps.cardTextClass]
      },
      this.$slots.default
    );
  }
});
