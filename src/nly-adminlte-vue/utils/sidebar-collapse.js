import { setAttr } from "./dom";

export const eventType = {
  collapse: "sidebar-collapse",
  open: "sidebar-open",
  show: "control-sidebar-slide-open",
  animate: "control-sidebar-animate"
};

export const selector = {
  controlSidebar: ".control-sidebar",
  header: ".main-header",
  footer: ".main-footer",
  controlSidebarContent: ".control-sidebar-content"
};

export const getSelector = cls => {
  return document.querySelector(cls);
};

export const getBodyClassName = () => {
  return document.body.className;
};

export const getBodyWidth = () => {
  return document.body.clientWidth;
};

export const navItemOenEvent = () => {
  const bodyClassName = getBodyClassName();
  if (bodyClassName.indexOf(eventType.collapse) == -1) {
    if (bodyClassName.indexOf(eventType.open) == -1) {
      document.body.classList.add(eventType.collapse);
    } else {
      document.body.classList.remove(eventType.open);
      document.body.classList.add(eventType.collapse);
    }
  } else {
    document.body.classList.add(eventType.open);
    document.body.classList.remove(eventType.collapse);
  }
};

export const navItemCollapseEvent = () => {
  const bodyClassName = getBodyClassName();
  if (bodyClassName.indexOf(eventType.collapse) == -1) {
    document.body.classList.add(eventType.collapse);
  } else {
    document.body.classList.remove(eventType.collapse);
  }
};

export const setInstanceAttr = vnode => {
  const bodyWidth = getBodyWidth();
  if (bodyWidth < 992) {
    setAttr(vnode.children[0].elm, "data-widget", eventType.open);
  } else {
    setAttr(vnode.children[0].elm, "data-widget", eventType.collapse);
  }
};

export const overLayCollapseEvent = () => {
  const bodyClassName = getBodyClassName();
  if (bodyClassName.indexOf(eventType.collapse) == -1) {
    document.body.classList.remove(eventType.open);
    document.body.classList.add(eventType.collapse);
  }
};

export const getScrollTop = () => {
  return document.documentElement && document.documentElement.scrollTop
    ? document.documentElement.scrollTop
    : document.body
    ? document.body.scrollTop
    : 0;
};

export const getScrollHeight = () => {
  return document.documentElement && document.documentElement.scrollHeight
    ? document.documentElement.scrollHeight
    : document.body
    ? document.body.scrollHeight
    : 0;
};

export const getBodyOffsetHeight = () => {
  return document.documentElement && document.documentElement.offsetHeight
    ? document.documentElement.offsetHeight
    : document.body
    ? document.body.offsetHeight
    : 0;
};
/**
 * 展开先给html添加class='control-sidebar-animate'
 * 设置control-sidebar display='block'
 * 10ms之后给body添加class='control-sidebar-slide-open'
 * 300ms之后给html删除class='control-sidebar-animate'
 *
 * 收起先给html添加class='control-sidebar-animate'
 * 删除body class='control-sidebar-slide-open
 * 300ms之后设置control-sidebar display='none'
 * html删除class='control-sidebar-animate'
 * @param {s} vnode
 */

// 10ms之后给body添加class='control-sidebar-slide-open'
export const openAddBodyClass = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      document.body.classList.add(eventType.show);
      resolve();
    }, 10);
  });
};
// 300ms之后给html删除class='control-sidebar-animate'
export const openRemoveHtmlClass = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      getSelector("html").classList.remove(eventType.animate);
      resolve();
    }, 300);
  });
};

// 300ms之后设置control-sidebar display='none'
export const collapseSetAttrsDisplay = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      getSelector(selector.controlSidebar).style.display = "none";
      resolve();
    }, 300);
  });
};

// html删除class='control-sidebar-animate'
export const collapseRemoveHtmlClass = () => {
  getSelector("html").classList.remove(eventType.animate);
};

// 队列执行open操作
export async function openTasks() {
  await openAddBodyClass();
  await openRemoveHtmlClass();
}

// 队列执行collapse操作
export async function collapseTasks() {
  await collapseSetAttrsDisplay();
  await collapseRemoveHtmlClass();
}

// 监听header，footer高度以及滚动条高度，给control-siderbar设置height
export const setControlSidebarStyle = () => {
  const windowHeight = document.documentElement.clientHeight;
  // const bodyHeight = getBodyOffsetHeight();
  const scrollTop = getScrollTop();
  const scrollHeight = getScrollHeight();
  const headerHeight = getSelector(selector.header).offsetHeight;
  const footerHeight = getSelector(selector.footer).offsetHeight;
  // console.log(11, bodyHeight);
  // console.log(22, scrollTop);
  // console.log(33, scrollHeight);
  // console.log(44, windowHeight);
  // console.log(55, scrollHeight - windowHeight - scrollTop);
  const controlSidebarSelector = getSelector(selector.controlSidebar);
  const controlSidebarContentSelector = getSelector(
    selector.controlSidebarContent
  );

  if (scrollTop < headerHeight) {
    controlSidebarSelector.style.top = `${headerHeight - scrollTop}px`;
    controlSidebarSelector.style.height = `${windowHeight -
      headerHeight +
      scrollTop}px`;
    controlSidebarContentSelector.style.height = `${windowHeight -
      headerHeight +
      scrollTop}px`;
  } else {
    controlSidebarSelector.style.top = "0px";
    if (scrollHeight - windowHeight - scrollTop <= footerHeight) {
      controlSidebarSelector.style.height = `${scrollHeight -
        footerHeight -
        scrollTop}px`;
      controlSidebarContentSelector.style.height = `${scrollHeight -
        footerHeight -
        scrollTop}px`;
      controlSidebarSelector.style.bottom = `${windowHeight +
        scrollTop +
        footerHeight -
        scrollHeight}px`;
    } else if (scrollHeight - windowHeight - scrollTop > footerHeight) {
      controlSidebarSelector.style.height = `${windowHeight}px`;
      controlSidebarContentSelector.style.height = `${windowHeight}px`;
    }
  }
};

// 展开 control-sidebar
export const controlSidebarOpen = () => {
  getSelector("html").classList.add(eventType.animate);
  getSelector(selector.controlSidebar).style.display = "block";
  openTasks();
  window.addEventListener("scroll", setControlSidebarStyle, false);
  window.addEventListener("resize", setControlSidebarStyle, false);
};

// 收起 control-sidebar
export const controlSidebarCollapse = () => {
  getSelector("html").classList.add(eventType.animate);
  document.body.classList.remove(eventType.show);
  collapseTasks();
  window.removeEventListener("scroll", setControlSidebarStyle, false);
  window.removeEventListener("resize", setControlSidebarStyle, false);
};

export const controlSidebarShow = () => {
  const bodyClassName = getBodyClassName();
  if (bodyClassName.indexOf(eventType.show) == -1) {
    controlSidebarOpen();
  } else {
    //收起
    controlSidebarCollapse();
  }
};
