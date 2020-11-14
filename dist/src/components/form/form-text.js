import Vue from "../../utils/vue";
import { mergeData } from "vue-functional-data-merge";
import { getComponentConfig } from "../../utils/config";

const NAME = "NlyFormText";

export const props = {
  id: {
    type: String
  },
  tag: {
    type: String,
    default: "small"
  },
  textVariant: {
    type: String,
    default: () => getComponentConfig(NAME, "textVariant")
  },
  inline: {
    type: Boolean,
    default: false
  }
};

export const NlyFormText = Vue.extend({
  name: NAME,
  functional: true,
  props,
  render(h, { props, data, children }) {
    return h(
      props.tag,
      mergeData(data, {
        class: {
          "form-text": !props.inline,
          [`text-${props.textVariant}`]: props.textVariant
        },
        attrs: {
          id: props.id
        }
      }),
      children
    );
  }
});
