import Vue from "../../../utils/vue";
import {
  formValidOptions,
  formFeedBackOptions
} from "../../../utils/nly-config";
import {
  nlyGetOptionInclusion,
  nlyGetOptionsByKeyEqual
} from "../../../utils/get-options";

const name = "NlyFormFeedback";

export const NlyFormFeedback = Vue.extend({
  name: name,
  props: {
    state: {
      type: String,
      default: "valid",
      validator: state => nlyGetOptionInclusion(formValidOptions, state)
    },
    text: {
      type: String
    }
  },
  computed: {
    customState() {
      return nlyGetOptionsByKeyEqual(formFeedBackOptions, this.state);
    },
    customText() {
      return this.text;
    }
  },
  render(h) {
    const vnodes = () => {
      if (this.customText) {
        return h(
          "span",
          {
            class: this.customState
          },
          this.customText
        );
      } else {
        return h(
          "span",
          {
            class: this.customState
          },
          this.$slots.default
        );
      }
    };
    return vnodes();
  }
});
