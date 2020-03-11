export const changeBeforeIcon = (childrenList, icon, order) => {
  if (childrenList) {
    if (icon) {
      if (order) {
        childrenList[order - 1].$el.className = icon;
      } else {
        if (childrenList[0].$options._componentTag == "nly-icon") {
          childrenList[0].$el.className = icon;
        }
      }
    }
  }
};

export const changeAfterIcon = (childrenList, icon, order) => {
  if (childrenList) {
    if (icon) {
      if (order) {
        childrenList[order - 1].$el.className = icon;
      } else {
        if (childrenList[0].$options._componentTag == "nly-icon") {
          childrenList[0].$el.className = icon;
        }
      }
    }
  }
};

export const beforeLeaveCollpase = el => {
  if (!el.dataset) el.dataset = {};
  el.dataset.oldPaddingTop = el.style.paddingTop;
  el.dataset.oldPaddingBottom = el.style.paddingBottom;
  el.dataset.oldOverflow = el.style.overflow;

  el.style.height = el.scrollHeight + "px";
  el.style.overflow = "hidden";
};

export const leaveCollpase = el => {
  if (el.scrollHeight !== 0) {
    el.style.transition = `all 0.5s`;
    el.style.height = 0;
    el.style.paddingTop = 0;
    el.style.paddingBottom = 0;
  }
};

export const afterLeaveCollpase = el => {
  el.style.transition = "";
  el.style.height = "";
  el.style.overflow = el.dataset.oldOverflow;
  el.style.paddingTop = el.dataset.oldPaddingTop;
  el.style.paddingBottom = el.dataset.oldPaddingBottom;
};

export const addClassNameCollpase = el => {
  el.classList.add("collapsed-card");
};

export async function collpaseTransiton(el) {
  await beforeLeaveCollpase(el);
  await leaveCollpase(el);
  await afterLeaveCollpase(el);
}
