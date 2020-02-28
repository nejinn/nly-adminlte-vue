import { setAttr } from "./dom";

export const eventType = {
  collapse: "sidebar-collapse",
  open: "sidebar-open"
};

export const navItemOenEvent = () => {
  const bodyClassName = document.body.className;
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
  const bodyClassName = document.body.className;
  if (bodyClassName.indexOf(eventType.collapse) == -1) {
    document.body.classList.add(eventType.collapse);
  } else {
    document.body.classList.remove(eventType.collapse);
  }
};

export const setInstanceAttr = vnode => {
  const bodyWidth = document.body.clientWidth;
  //   return bodyWidth;
  if (bodyWidth < 992) {
    setAttr(vnode.children[0].elm, "data-widget", eventType.open);
  } else {
    setAttr(vnode.children[0].elm, "data-widget", eventType.collapse);
  }
};

export const overLayCollapseEvent = () => {
  const bodyClassName = document.body.className;
  if (bodyClassName.indexOf(eventType.collapse) == -1) {
    document.body.classList.remove(eventType.open);
    document.body.classList.add(eventType.collapse);
  }
};
