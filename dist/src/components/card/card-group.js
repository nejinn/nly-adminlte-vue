import Vue from "../../utils/vue";
import { cardGroupTypeOption } from "../../utils/nly-config";
import { nlyGetOptionsByKeyEqual } from "../../utils/get-options";
import { mergeData } from "vue-functional-data-merge";

export const props = {
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
};

const customClass = props => {
  const groupType = () =>
    nlyGetOptionsByKeyEqual(cardGroupTypeOption, props.groupType);
  const groupClass = props.groupClass;

  return [groupType(), groupClass];
};

const name = "NlyCardGroup";

export const NlyCardGroup = Vue.extend({
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
