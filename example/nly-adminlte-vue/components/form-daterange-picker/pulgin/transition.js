import Vue from "../../../utils/vue";
import { mergeData } from "vue-functional-data-merge";
// import { toInteger } from "../../utils/number";

// const beforeEnter = el => {
//   el.style.transform = "translateX(10px)";
//   el.style.opacity = 0;
// };

// const enter = el => {
//   el.style.transition = `all 0.2s ease`;
// };

// const afterEnter = el => {
//   el.style.opacity = "";
//   el.style.transform = "";
//   el.style.transition = "";
// };

// const leave = el => {
//   el.style.transition = "all 1s cubic-bezier(1, 0.5, 0.8, 1)";
// };

// const leaveTo = el => {
//   el.style.transform = "translateX(10px)";
//   el.style.opacity = 0;
// };
// // const afterLeave = el => {
// //   el.style.transition = "";
// //   el.style.transform = "";
// //   el.style.opacity = "";
// // };

// const TRANSITION_HANDLERS = {
//   beforeEnter: beforeEnter,
//   enter: enter,
//   afterEnter: afterEnter,
//   leave: leave,
//   leaveTo: leaveTo
//   // afterLeave: afterLeave
// };

const name = "NlyDaterangePickerTransition";

export const NlyDaterangePickerTransition = Vue.extend({
  name: name,
  functional: true,
  render(h, { data, children }) {
    return h(
      "transition",
      mergeData(data, {
        // on: TRANSITION_HANDLERS,
        // name: "slide-fade",
        mode: "out-in",
        props: {
          enterClass: "slide-fade-enter",
          enterActiveClass: "slide-fade-enter-active",
          leaveActiveClass: "slide-fade-leave-active",
          leaveToClass: "slide-fade-leave-to"
        }
        // enterClass: "slide-fade-enter",
        // enterActiveClass: "slide-fade-enter-active",
        // leaveActiveClass: "slide-fade-leave-active",
        // leaveToClass: "slide-fade-leave-to",
      }),
      children
    );
  }
});
