import { keys } from "./object";
import { eventOn, eventOff } from "./dom";

const allListenTypes = { hover: true, click: true, focus: true };

const NLYBoundListeners = "__NLY_boundEventListeners__";

const getTargets = binding => {
  const targets = keys(binding.modifiers || {}).filter(t => !allListenTypes[t]);

  if (binding.value) {
    targets.push(binding.value);
  }

  return targets;
};

const bindTargets = (vnode, binding, listenTypes, fn) => {
  const targets = getTargets(binding);

  const listener = () => {
    fn({ targets, vnode });
  };

  keys(allListenTypes).forEach(type => {
    if (listenTypes[type] || binding.modifiers[type]) {
      eventOn(vnode.elm, type, listener);
      const boundListeners = vnode.elm[NLYBoundListeners] || {};
      boundListeners[type] = boundListeners[type] || [];
      boundListeners[type].push(listener);
      vnode.elm[NLYBoundListeners] = boundListeners;
    }
  });

  return targets;
};

const unbindTargets = (vnode, binding, listenTypes) => {
  keys(allListenTypes).forEach(type => {
    if (listenTypes[type] || binding.modifiers[type]) {
      const boundListeners =
        vnode.elm[NLYBoundListeners] && vnode.elm[NLYBoundListeners][type];
      if (boundListeners) {
        boundListeners.forEach(listener => eventOff(vnode.elm, type, listener));
        delete vnode.elm[NLYBoundListeners][type];
      }
    }
  });
};

export { bindTargets, unbindTargets, getTargets };

export default bindTargets;
