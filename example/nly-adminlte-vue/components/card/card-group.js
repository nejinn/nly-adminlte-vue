import Vue from "../../utils/vue";
import { cardGroupTypeOption } from "../../utils/nly-config";
import { nlyGetOptionsByKeyEqual } from "../../utils/get-options";

const name = "NlyCardGroup";

export const NlyCardGroup = Vue.extend({
  name: name,
  props: {
    groupType: {
      type: String,
      default: "default"
    },
    groupClass: {
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
        groupType: nlyGetOptionsByKeyEqual(cardGroupTypeOption, this.groupType),
        groupClass: this.groupClass,
        tag: this.tag
      };
    }
  },
  render(h) {
    return h(
      this.customProps.tag,
      {
        class: [this.customProps.groupType, this.customProps.groupClass]
      },
      this.$slots.default
    );
  }
});
