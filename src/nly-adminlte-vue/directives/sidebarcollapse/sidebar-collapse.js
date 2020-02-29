import {
  navItemOenEvent,
  navItemCollapseEvent,
  setInstanceAttr,
  overLayCollapseEvent
} from "../../utils/sidebar-collapse";

export const NlySidebarCollapse = {
  bind(el, binding, vnode) {
    const instanceNameList = Object.keys(binding.modifiers);
    if (instanceNameList.indexOf("navitem") != -1) {
      window.addEventListener("resize", () => setInstanceAttr(vnode), false);
    }
    el.onclick = function() {
      if (instanceNameList.indexOf("navitem") != -1) {
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
  //   unbind(el, vnode, binding) {
  //     console.log(el, vnode, binding);
  //     const instanceNameList = Object.keys(binding.modifiers);
  //     if (instanceNameList.indexOf("navitem") != -1) {
  //       Window.removeEventListener("resize", () => setInstanceAttr(vnode), false);
  //     }
  //   }
};
