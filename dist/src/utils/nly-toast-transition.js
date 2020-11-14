import Vue from "./vue";
import { mergeData } from "vue-functional-data-merge";
import { isPlainObject } from "./inspect";

const NO_FADE_PROPS = {
  name: "",
  enterClass: "",
  enterActiveClass: "",
  enterToClass: "show",
  leaveClass: "show",
  leaveActiveClass: "",
  leaveToClass: ""
};

const FADE_PROPS = {
  ...NO_FADE_PROPS,
  enterActiveClass: "fade",
  leaveActiveClass: "fade"
};

const name = "NlyToastTransition";

export const NlyToastTransition = Vue.extend({
  name: name,
  functional: true,
  props: {
    noFade: {
      type: Boolean,
      default: false
    },
    appear: {
      type: Boolean,
      default: false
    },
    mode: {
      type: String
    },
    transProps: {
      type: Object,
      default: null
    }
  },
  // eslint-disable-next-line no-unused-vars
  render(h, { children, data, listeners, props }) {
    let transProps = props.transProps;
    if (!isPlainObject(transProps)) {
      transProps = props.noFade ? NO_FADE_PROPS : FADE_PROPS;
      if (props.appear) {
        // Default the appear classes to equal the enter classes
        transProps = {
          ...transProps,
          appear: true,
          appearClass: transProps.enterClass,
          appearActiveClass: transProps.enterActiveClass,
          appearToClass: transProps.enterToClass
        };
      }
    }
    transProps = {
      mode: props.mode,
      ...transProps,
      css: true
    };
    return h("transition", mergeData(data, { props: transProps }), children);
  }
});

export default NlyToastTransition;
