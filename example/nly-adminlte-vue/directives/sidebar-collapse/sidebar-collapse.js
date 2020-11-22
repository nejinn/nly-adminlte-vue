import {
  navItemOenEvent,
  navItemCollapseEvent,
  setInstanceAttr,
  overLayCollapseEvent
} from "../../utils/sidebar-collapse";

export const VNlySidebarCollapse = {
  bind(el, binding, vnode) {
    const instanceNameList = Object.keys(binding.modifiers);
    if (instanceNameList.indexOf("sidebar-collapse") != -1) {
      window.addEventListener("resize", () => setInstanceAttr(vnode), false);
    }
    el.onclick = function() {
      if (instanceNameList.indexOf("sidebar-collapse") != -1) {
        const bodyWidth = document.body.clientWidth;
        if (bodyWidth < 992) {
          navItemOenEvent();
        } else {
          navItemCollapseEvent();
        }
      }
      if (instanceNameList.indexOf("overlay") != -1) {
        overLayCollapseEvent();
      }
    };
  }
};
