import Vue from "../../utils/vue";
import { nlyGetOptionsByKeyEqual } from "../../utils/get-options";
import { btnGroupSizeOptions } from "../../utils/nly-config";
import { mergeData } from "vue-functional-data-merge";

const name = "NlyButtonGroup";

export const props = {
  vertical: {
    type: Boolean,
    default: false
  },
  size: {
    type: String
  },
  tag: {
    type: String,
    default: "div"
  },
  buttonGroupClass: {
    type: String
  }
};

const customClass = props => {
  const customVertical = props.vertical ? "btn-group-vertical" : "btn-group";
  const customSize = () =>
    nlyGetOptionsByKeyEqual(btnGroupSizeOptions, props.size);
  const customButtonGroupClass = props.buttonGroupClass;

  return [customVertical, customSize(), customButtonGroupClass];
};

export const NlyButtonGroup = Vue.extend({
  name: name,
  functional: true,
  props,
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
