import Vue from "../../utils/vue";
import { NlyButtonGroupMixins } from "../../mixins/button-group-mixins";

const name = "NlyButtonGroup";

export const NlyButtonGroup = Vue.extend({
  name: name,
  mixins: [NlyButtonGroupMixins],
  props: {
    buttonGroupClass: {
      type: String
    }
  },
  computed: {
    customButtonGroupClass: function() {
      return this.buttonGroupClass;
    }
  },
  render(h) {
    return h(
      this.customTag,
      {
        class: [
          this.customVertical,
          this.customSize,
          this.customButtonGroupClass
        ]
      },
      this.$slots.default
    );
  }
});
