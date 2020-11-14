import Vue from "../../utils/vue";
import { nlyGetOptionsByKeyEqual } from "../../utils/get-options";
import { textSizeOptions } from "../../utils/nly-config";
import { mergeData } from "vue-functional-data-merge";

export const props = {
  size: {
    type: String
  },
  tag: {
    type: String,
    default: "i"
  },
  icon: {
    type: String
  }
};

const customClass = props => {
  return [props.icon, nlyGetOptionsByKeyEqual(textSizeOptions, props.size)];
};

const name = "NlyIcon";

export const NlyIcon = Vue.extend({
  name: name,
  props,
  functional: true,
  render(h, { props, data, children }) {
    return h(
      props.tag,
      mergeData(data, {
        class: customClass(props)
      }),
      children
    );
  }
});
