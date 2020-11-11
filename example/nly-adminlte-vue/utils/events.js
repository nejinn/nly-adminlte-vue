import { hasPassiveEventSupport } from "./env";
import { isObject } from "./inspect";

export const EVENT_OPTIONS_PASSIVE = { passive: true };
export const EVENT_OPTIONS_NO_CAPTURE = { passive: true, capture: false };

export const parseEventOptions = options => {
  if (hasPassiveEventSupport) {
    return isObject(options) ? options : { capture: !!options || false };
  } else {
    return !!(isObject(options) ? options.capture : options);
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

export const eventOnOff = (on, ...args) => {
  const method = on ? eventOn : eventOff;
  method(...args);
};

export const stopEvent = (
  evt,
  {
    preventDefault = true,
    propagation = true,
    immediatePropagation = false
  } = {}
) => {
  if (preventDefault) {
    evt.preventDefault();
  }
  if (propagation) {
    evt.stopPropagation();
  }
  if (immediatePropagation) {
    evt.stopImmediatePropagation();
  }
};
