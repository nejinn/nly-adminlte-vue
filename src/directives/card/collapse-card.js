// import { nlyCardId } from "../../utils/mixin-id";
// import { toInteger } from "../../utils/number";

// import {
//   beforeLeaveCollpase,
//   leaveCollpase,
//   afterLeaveCollpase
// } from "../../utils/card";

export const VNlyCardCollapse = {
  bind(el, binding, vnode) {
    const cardCollapseRef = Object.keys(binding.modifiers)[0];
    el.onclick = () => {
      const cardVnode = vnode.context.$refs[cardCollapseRef];
      const cardVnodeChildren = cardVnode.$children;
      if (cardVnode.$el.className.indexOf("collapsed-card") != -1) {
        cardVnodeChildren.forEach(item => {
          const itemEl = item.$el;
          if (item.$options._componentTag != "nly-card-header") {
            itemEl.style.transition = `all 0.5s`;
            if (!itemEl.dataset) itemEl.dataset = {};
            itemEl.dataset.oldPaddingTop = itemEl.style.paddingTop;
            itemEl.dataset.oldPaddingBottom = itemEl.style.paddingBottom;
            itemEl.style.height = 0;
            itemEl.style.paddingTop = 0;
            itemEl.style.paddingBottom = 0;
            itemEl.dataset.oldOverflow = itemEl.style.overflow;
            itemEl.style.display = "block";

            if (itemEl.scrollHeight !== 0) {
              itemEl.style.height = itemEl.scrollHeight + "px";
              itemEl.style.paddingTop = itemEl.dataset.oldPaddingTop;
              itemEl.style.paddingBottom = itemEl.dataset.oldPaddingBottom;
            } else {
              itemEl.style.height = "";
              itemEl.style.paddingTop = itemEl.dataset.oldPaddingTop;
              itemEl.style.paddingBottom = itemEl.dataset.oldPaddingBottom;
            }
            itemEl.style.overflow = "hidden";

            setTimeout(() => {
              itemEl.style.transition = "";
              itemEl.style.height = "";
              itemEl.style.overflow = itemEl.dataset.oldOverflow;
              itemEl.style.display = "";
            }, 500);
          }
          setTimeout(() => {
            cardVnode.$el.classList.remove("collapsed-card");
          }, 500);
        });
      } else {
        cardVnodeChildren.forEach(item => {
          const itemEl = item.$el;
          if (item.$options._componentTag != "nly-card-header") {
            itemEl.dataset.oldPaddingTop = itemEl.style.paddingTop;
            itemEl.dataset.oldPaddingBottom = itemEl.style.paddingBottom;
            itemEl.dataset.oldOverflow = itemEl.style.overflow;

            itemEl.style.height = itemEl.scrollHeight + "px";
            itemEl.style.overflow = "hidden";

            if (itemEl.scrollHeight !== 0) {
              itemEl.style.transition = `all 0.5s`;
              itemEl.style.height = 0;
              itemEl.style.paddingTop = 0;
              itemEl.style.paddingBottom = 0;
            }
            setTimeout(() => {
              itemEl.style.transition = "";
              itemEl.style.height = "";
              itemEl.style.overflow = itemEl.dataset.oldOverflow;
              itemEl.style.paddingTop = itemEl.dataset.oldPaddingTop;
              itemEl.style.paddingBottom = itemEl.dataset.oldPaddingBottom;
            }, 500);
          }
          setTimeout(() => {
            cardVnode.$el.classList.add("collapsed-card");
          }, 500);
        });
      }
    };
  }
};
