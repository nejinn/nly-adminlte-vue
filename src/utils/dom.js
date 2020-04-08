import { from as arrayFrom } from "./array";
import {
  hasWindowSupport,
  hasDocumentSupport,
  hasPassiveEventSupport
} from "./env";
import { isFunction, isNull, isObject } from "./inspect";

const w = hasWindowSupport ? window : {};
const d = hasDocumentSupport ? document : {};
const elProto = typeof Element !== "undefined" ? Element.prototype : {};

export const matchesEl =
  elProto.matches || elProto.msMatchesSelector || elProto.webkitMatchesSelector;

export const closestEl =
  elProto.closest ||
  function(sel) {
    let el = this;
    do {
      if (matches(el, sel)) {
        return el;
      }
      el = el.parentElement || el.parentNode;
    } while (!isNull(el) && el.nodeType === Node.ELEMENT_NODE);
    return null;
  };

export const requestAF =
  w.requestAnimationFrame ||
  w.webkitRequestAnimationFrame ||
  w.mozRequestAnimationFrame ||
  w.msRequestAnimationFrame ||
  w.oRequestAnimationFrame ||
  (cb => setTimeout(cb, 16));

export const MutationObs =
  w.MutationObserver ||
  w.WebKitMutationObserver ||
  w.MozMutationObserver ||
  null;

export const parseEventOptions = options => {
  if (hasPassiveEventSupport) {
    return isObject(options) ? options : { useCapture: !!options || false };
  } else {
    return !!(isObject(options) ? options.useCapture : options);
  }
};

export const eventOn = (el, evtName, handler, options) => {
  if (el && el.addEventListener) {
    el.addEventListener(evtName, handler, parseEventOptions(options));
  }
};

export const eventOff = (el, evtName, handler, options) => {
  if (el && el.removeEventListener) {
    el.removeEventListener(evtName, handler, parseEventOptions(options));
  }
};

export const removeNode = el =>
  el && el.parentNode && el.parentNode.removeChild(el);

export const isElement = el => !!(el && el.nodeType === Node.ELEMENT_NODE);

export const isVisible = el => {
  if (!isElement(el) || !el.parentNode || !contains(d.body, el)) {
    return false;
  }
  if (el.style.display === "none") {
    return false;
  }

  const bcr = getBCR(el);
  return !!(bcr && bcr.height > 0 && bcr.width > 0);
};

export const isDisabled = el =>
  !isElement(el) ||
  el.disabled ||
  hasAttr(el, "disabled") ||
  hasClass(el, "disabled");

export const reflow = el => {
  return isElement(el) && el.offsetHeight;
};

export const selectAll = (selector, root) =>
  arrayFrom((isElement(root) ? root : d).querySelectorAll(selector));

export const select = (selector, root) =>
  (isElement(root) ? root : d).querySelector(selector) || null;

export const matches = (el, selector) =>
  isElement(el) ? matchesEl.call(el, selector) : false;

export const closest = (selector, root, includeRoot = false) => {
  if (!isElement(root)) {
    return null;
  }
  const el = closestEl.call(root, selector);

  return includeRoot ? el : el === root ? null : el;
};

export const contains = (parent, child) =>
  parent && isFunction(parent.contains) ? parent.contains(child) : false;

export const getById = id =>
  d.getElementById(/^#/.test(id) ? id.slice(1) : id) || null;

export const addClass = (el, className) => {
  if (className && isElement(el) && el.classList) {
    el.classList.add(className);
  }
};

export const removeClass = (el, className) => {
  if (className && isElement(el) && el.classList) {
    el.classList.remove(className);
  }
};

export const hasClass = (el, className) => {
  if (className && isElement(el) && el.classList) {
    return el.classList.contains(className);
  }
  return false;
};

export const setAttr = (el, attr, val) => {
  if (attr && isElement(el)) {
    el.setAttribute(attr, val);
  }
};

export const removeAttr = (el, attr) => {
  if (attr && isElement(el)) {
    el.removeAttribute(attr);
  }
};

export const getAttr = (el, attr) =>
  attr && isElement(el) ? el.getAttribute(attr) : null;

export const hasAttr = (el, attr) =>
  attr && isElement(el) ? el.hasAttribute(attr) : null;

export const getBCR = el => (isElement(el) ? el.getBoundingClientRect() : null);

export const getCS = el =>
  hasWindowSupport && isElement(el) ? w.getComputedStyle(el) : {};

export const getSel = () =>
  hasWindowSupport && w.getSelection ? w.getSelection() : null;

export const offset = el => {
  const _offset = { top: 0, left: 0 };
  if (!isElement(el) || el.getClientRects().length === 0) {
    return _offset;
  }
  const bcr = getBCR(el);
  if (bcr) {
    const win = el.ownerDocument.defaultView;
    _offset.top = bcr.top + win.pageYOffset;
    _offset.left = bcr.left + win.pageXOffset;
  }
  return _offset;
};

export const position = el => {
  let _offset = { top: 0, left: 0 };
  if (!isElement(el)) {
    return _offset;
  }
  let parentOffset = { top: 0, left: 0 };
  const elStyles = getCS(el);
  if (elStyles.position === "fixed") {
    _offset = getBCR(el) || _offset;
  } else {
    _offset = offset(el);
    const doc = el.ownerDocument;
    let offsetParent = el.offsetParent || doc.documentElement;
    while (
      offsetParent &&
      (offsetParent === doc.body || offsetParent === doc.documentElement) &&
      getCS(offsetParent).position === "static"
    ) {
      offsetParent = offsetParent.parentNode;
    }
    if (
      offsetParent &&
      offsetParent !== el &&
      offsetParent.nodeType === Node.ELEMENT_NODE
    ) {
      parentOffset = offset(offsetParent);
      const offsetParentStyles = getCS(offsetParent);
      parentOffset.top += parseFloat(offsetParentStyles.borderTopWidth);
      parentOffset.left += parseFloat(offsetParentStyles.borderLeftWidth);
    }
  }
  return {
    top: _offset.top - parentOffset.top - parseFloat(elStyles.marginTop),
    left: _offset.left - parentOffset.left - parseFloat(elStyles.marginLeft)
  };
};
