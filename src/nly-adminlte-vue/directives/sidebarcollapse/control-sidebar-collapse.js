import {
  controlSidebarShow,
  getSelector,
  getScrollTop,
  selector
} from "../../utils/sidebar-collapse";

export const NlyControlSidebarCollapse = {
  bind(el) {
    el.onclick = () => {
      const windowHeight = document.documentElement.clientHeight;
      const scrollTop = getScrollTop();
      const headerHeight = getSelector(selector.header).offsetHeight;
      const controlSidebarSelector = getSelector(selector.controlSidebar);
      const controlSidebarContentSelector = getSelector(
        selector.controlSidebarContent
      );
      controlSidebarSelector.style.top = `${headerHeight - scrollTop}px`;
      controlSidebarSelector.style.height = `${windowHeight -
        headerHeight +
        scrollTop}px`;
      controlSidebarContentSelector.style.height = `${windowHeight -
        headerHeight +
        scrollTop}px`;
      controlSidebarShow();
    };
  }
};

// 浏览器可见高度window.innerHeight
