import looseEqual from "../../utils/loose-equal";
import {
  addClass,
  hasAttr,
  removeAttr,
  removeClass,
  setAttr
} from "../../utils/dom";
import { isBrowser } from "../../utils/env";
import { bindTargets, getTargets, unbindTargets } from "../../utils/target";

// Target listen types
const listenTypes = { click: true };

// Property key for handler storage
const NLY_TOGGLE = "__NLY_toggle__";
const NLY_TOGGLE_STATE = "__NLY_toggle_STATE__";
const NLY_TOGGLE_CONTROLS = "__NLY_toggle_CONTROLS__";
const NLY_TOGGLE_TARGETS = "__NLY_toggle_TARGETS__";

const EVENT_TOGGLE = "nly::toggle::collapse";

const EVENT_STATE = "nly::collapse::state";

const EVENT_STATE_SYNC = "nly::collapse::sync::state";
const EVENT_STATE_REQUEST = "nly::request::collapse::state";

const resetProp = (el, prop) => {
  el[prop] = null;
  delete el[prop];
};

const handleTargets = ({ targets, vnode }) => {
  targets.forEach(target => {
    vnode.context.$root.$emit(EVENT_TOGGLE, target);
  });
};

const handleUpdate = (el, binding, vnode) => {
  if (!isBrowser) {
    return;
  }

  if (!looseEqual(getTargets(binding), el[NLY_TOGGLE_TARGETS])) {
    unbindTargets(vnode, binding, listenTypes);
    const targets = bindTargets(vnode, binding, listenTypes, handleTargets);
    el[NLY_TOGGLE_TARGETS] = targets;
    // Add aria attributes to element
    el[NLY_TOGGLE_CONTROLS] = targets.join(" ");
    setAttr(el, "aria-controls", el[NLY_TOGGLE_CONTROLS]);
    targets.forEach(target => {
      vnode.context.$root.$emit(EVENT_STATE_REQUEST, target);
    });
  }

  if (el[NLY_TOGGLE_STATE] === true) {
    addClass(el, "collapsed");
    setAttr(el, "aria-expanded", "true");
  } else if (el[NLY_TOGGLE_STATE] === false) {
    removeClass(el, "collapsed");
    setAttr(el, "aria-expanded", "false");
  }
  setAttr(el, "aria-controls", el[NLY_TOGGLE_CONTROLS]);
};

export const VNlyToggle = {
  bind(el, binding, vnode) {
    const targets = bindTargets(vnode, binding, listenTypes, handleTargets);
    if (isBrowser && vnode.context && targets.length > 0) {
      el[NLY_TOGGLE_TARGETS] = targets;
      el[NLY_TOGGLE_CONTROLS] = targets.join(" ");
      el[NLY_TOGGLE_STATE] = false;
      setAttr(el, "aria-controls", el[NLY_TOGGLE_CONTROLS]);
      setAttr(el, "aria-expanded", "false");
      if (el.tagName !== "BUTTON" && !hasAttr(el, "role")) {
        setAttr(el, "role", "button");
      }

      const toggleDirectiveHandler = (id, state) => {
        const targets = el[NLY_TOGGLE_TARGETS] || [];
        if (targets.indexOf(id) !== -1) {
          setAttr(el, "aria-expanded", state ? "true" : "false");
          el[NLY_TOGGLE_STATE] = state;
          if (state) {
            removeClass(el, "collapsed");
          } else {
            addClass(el, "collapsed");
          }
        }
      };

      el[NLY_TOGGLE] = toggleDirectiveHandler;

      vnode.context.$root.$on(EVENT_STATE, el[NLY_TOGGLE]);
      vnode.context.$root.$on(EVENT_STATE_SYNC, el[NLY_TOGGLE]);
    }
  },
  componentUpdated: handleUpdate,
  updated: handleUpdate,
  unbind(el, binding, vnode) /* istanbul ignore next */ {
    unbindTargets(vnode, binding, listenTypes);
    // Remove our $root listener
    if (el[NLY_TOGGLE]) {
      vnode.context.$root.$off(EVENT_STATE, el[NLY_TOGGLE]);
      vnode.context.$root.$off(EVENT_STATE_SYNC, el[NLY_TOGGLE]);
    }
    resetProp(el, NLY_TOGGLE);
    resetProp(el, NLY_TOGGLE_STATE);
    resetProp(el, NLY_TOGGLE_CONTROLS);
    resetProp(el, NLY_TOGGLE_TARGETS);
    // Reset classes/attrs
    removeClass(el, "collapsed");
    removeAttr(el, "aria-expanded");
    removeAttr(el, "aria-controls");
    removeAttr(el, "role");
  }
};
