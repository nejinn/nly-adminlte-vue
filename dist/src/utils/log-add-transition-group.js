import Vue from "./vue";
import { mergeData } from "vue-functional-data-merge";
// import { toInteger } from "../../utils/number";

const beforeEnter = el => {
  el.style.transition = "all 0.3s";
  el.style.display = "block";
};

const enter = el => {
  el.style.opacity = 0;
  // el.style.transform = "translateY(30px)";
};
const afterEnter = el => {
  el.style.transition = "all 0.3s";
  el.style.display = "";
  el.style.opacity = "";
  el.style.transform = "";
};

// const beforeLeave = el => {
//   if (!el.dataset) el.dataset = {};
//   el.dataset.oldPaddingTop = el.style.paddingTop;
//   el.dataset.oldPaddingBottom = el.style.paddingBottom;
//   el.dataset.oldOverflow = el.style.overflow;

//   el.style.height = el.scrollHeight + "px";
//   el.style.overflow = "hidden";
// };

// const leave = el => {
//   if (el.scrollHeight !== 0) {
//     el.style.transition = `all 0.5s`;
//     el.style.height = 0;
//     el.style.paddingTop = 0;
//     el.style.paddingBottom = 0;
//   }
// };
// const afterLeave = el => {
//   el.style.transition = "";
//   el.style.height = "";
//   el.style.overflow = el.dataset.oldOverflow;
//   el.style.paddingTop = el.dataset.oldPaddingTop;
//   el.style.paddingBottom = el.dataset.oldPaddingBottom;
// };

const TRANSITION_HANDLERS = {
  beforeEnter: beforeEnter,
  enter: enter,
  afterEnter: afterEnter
  // beforeLeave: beforeLeave,
  // leave: leave,
  // afterLeave: afterLeave
};

const name = "NlyLogAddTransitionGroup";

export const NlyLogAddTransitionGroup = Vue.extend({
  name: name,
  functional: true,
  render(h, { data, children }) {
    return h(
      "transition-group",
      mergeData(data, {
        on: TRANSITION_HANDLERS
      }),
      children
    );
  }
});
