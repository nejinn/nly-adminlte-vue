import ScrollSpy from "./scrollspy.class";
import { isBrowser } from "../../utils/env";
import { isNumber, isObject, isString } from "../../utils/inspect";
import { toInteger } from "../../utils/number";
import { keys } from "../../utils/object";

const NLYA_SCROLLSPY = "__NLYA_ScrollSpy__";

const onlyDigitsRE = /^\d+$/;
const offsetRE = /^(auto|position|offset)$/;

const parseBindings = bindings => {
  const config = {};

  if (bindings.arg) {
    config.element = `#${bindings.arg}`;
  }

  keys(bindings.modifiers).forEach(mod => {
    if (onlyDigitsRE.test(mod)) {
      config.offset = toInteger(mod, 0);
    } else if (offsetRE.test(mod)) {
      config.method = mod;
    }
  });

  // Process value
  if (isString(bindings.value)) {
    config.element = bindings.value;
  } else if (isNumber(bindings.value)) {
    config.offset = Math.round(bindings.value);
  } else if (isObject(bindings.value)) {
    keys(bindings.value)
      .filter(k => !!ScrollSpy.DefaultType[k])
      .forEach(k => {
        config[k] = bindings.value[k];
      });
  }

  return config;
};

const applyScrollspy = (el, bindings, vnode) => {
  if (!isBrowser) {
    return;
  }
  const config = parseBindings(bindings);
  if (el[NLYA_SCROLLSPY]) {
    el[NLYA_SCROLLSPY].updateConfig(config, vnode.context.$root);
  } else {
    el[NLYA_SCROLLSPY] = new ScrollSpy(el, config, vnode.context.$root);
  }
};

const removeScrollspy = el => {
  if (el[NLYA_SCROLLSPY]) {
    el[NLYA_SCROLLSPY].dispose();
    el[NLYA_SCROLLSPY] = null;
    delete el[NLYA_SCROLLSPY];
  }
};

export const VNlyScrollspy = {
  bind(el, bindings, vnode) {
    applyScrollspy(el, bindings, vnode);
  },
  inserted(el, bindings, vnode) {
    applyScrollspy(el, bindings, vnode);
  },
  update(el, bindings, vnode) {
    if (bindings.value !== bindings.oldValue) {
      applyScrollspy(el, bindings, vnode);
    }
  },
  componentUpdated(el, bindings, vnode) {
    if (bindings.value !== bindings.oldValue) {
      applyScrollspy(el, bindings, vnode);
    }
  },
  unbind(el) {
    removeScrollspy(el);
  }
};
