import {
  controlSidebarShow,
  getSelector,
  getScrollTop,
  selector,
  getBodyOffsetHeight,
  getScrollHeight
} from "../../utils/sidebar-collapse";

export const VNlyControlSidebarCollapse = {
  bind(el) {
    el.onclick = () => {
      const windowHeight = document.documentElement.clientHeight;
      const bodyHeight = getBodyOffsetHeight();
      const scrollTop = getScrollTop();
      const scrollHeight = getScrollHeight();
      const headerHeight = getSelector(selector.header).offsetHeight;
      const footerHeight = getSelector(selector.footer).offsetHeight;
      const controlSidebarSelector = getSelector(selector.controlSidebar);
      const controlSidebarContentSelector = getSelector(
        selector.controlSidebarContent
      );

      if (bodyHeight - windowHeight >= footerHeight) {
        controlSidebarSelector.style.top = `${headerHeight - scrollTop}px`;
        if (
          footerHeight -
            scrollHeight +
            windowHeight -
            headerHeight +
            scrollTop +
            footerHeight >
          0
        ) {
          controlSidebarSelector.style.height = `${scrollHeight -
            footerHeight -
            footerHeight}px`;
          controlSidebarContentSelector.style.height = `${scrollHeight -
            footerHeight -
            footerHeight}px`;
        } else {
          controlSidebarSelector.style.height = `${windowHeight -
            headerHeight +
            scrollTop}px`;
          controlSidebarContentSelector.style.height = `${windowHeight -
            headerHeight +
            scrollTop}px`;
        }
      } else {
        controlSidebarSelector.style.top = `${headerHeight - scrollTop}px`;
        controlSidebarSelector.style.height = `${bodyHeight -
          headerHeight -
          footerHeight}px`;
        controlSidebarContentSelector.style.height = `${bodyHeight -
          headerHeight -
          footerHeight}px`;
        controlSidebarSelector.style.bottom = `${footerHeight -
          bodyHeight +
          windowHeight +
          scrollTop}px`;
      }
      controlSidebarShow();
    };
  }
};
