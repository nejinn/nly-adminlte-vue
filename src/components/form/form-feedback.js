import Vue from "../../utils/vue";
import { formValidOptions, formFeedBackOptions } from "../../utils/nly-config";
import {
  nlyGetOptionInclusion,
  nlyGetOptionsByKeyEqual
} from "../../utils/get-options";
import { mergeData } from "vue-functional-data-merge";

const name = "NlyFormFeedback";

export const props = {
  id: {
    type: String
  },
  tag: {
    type: String,
    default: "span"
  },
  tooltip: {
    type: Boolean,
    default: false
  },
  forceShow: {
    type: Boolean,
    default: false
  },
  state: {
    type: String,
    default: "novalid",
    validator: state => nlyGetOptionInclusion(formValidOptions, state)
  },
  ariaLive: {
    type: String
  },
  role: {
    type: String
  },
  text: {
    type: String
  }
};

const coustomclass = props => {
  const validClass = () =>
    props.tooltip
      ? "invalid-tooltip"
      : nlyGetOptionsByKeyEqual(formFeedBackOptions, props.state);

  const showClass =
    props.forceShow === true || props.state === "novalid" ? "d-block" : null;

  return [validClass(), showClass];
};

const customAttrs = props => {
  return {
    id: props.id || null,
    role: props.role || null,
    "aria-live": props.ariaLive || null,
    "aria-atomic": props.ariaLive ? "true" : null
  };
};

export const NlyFormFeedback = Vue.extend({
  name: name,
  props,
  functional: true,
  render(h, { props, data, children }) {
    if (props.text) {
      return h(
        props.tag,
        mergeData(data, {
          class: coustomclass(props),
          attrs: customAttrs(props)
        }),
        props.text
      );
    } else {
      return h(
        props.tag,
        mergeData(data, {
          class: coustomclass(props),
          attrs: customAttrs(props)
        }),
        children
      );
    }
  }
});
