import Vue from "../../utils/vue";
import { mergeData } from "vue-functional-data-merge";
import { getBCR, reflow, requestAF } from "../../utils/dom";

const onEnter = el => {
  el.style.height = 0;
  requestAF(() => {
    reflow(el);
    el.style.height = `${el.scrollHeight}px`;
  });
};

const onAfterEnter = el => {
  el.style.height = null;
};

const onLeave = el => {
  el.style.height = "auto";
  el.style.display = "block";
  el.style.height = `${getBCR(el).height}px`;
  reflow(el);
  el.style.height = 0;
};

const onAfterLeave = el => {
  el.style.height = null;
};

const TRANSITION_PROPS = {
  css: true,
  enterClass: "",
  enterActiveClass: "collapsing",
  enterToClass: "collapse show",
  leaveClass: "collapse show",
  leaveActiveClass: "collapsing",
  leaveToClass: "collapse"
};

const TRANSITION_HANDLERS = {
  enter: onEnter,
  afterEnter: onAfterEnter,
  leave: onLeave,
  afterLeave: onAfterLeave
};

export const NlyCollapseTransition = Vue.extend({
  name: "NlyCollapseTransition",
  functional: true,
  props: {
    appear: {
      type: Boolean,
      default: false
    }
  },
  render(h, { props, data, children }) {
    return h(
      "transition",
      mergeData(
        data,
        { props: TRANSITION_PROPS, on: TRANSITION_HANDLERS },
        { props }
      ),
      children
    );
  }
});
