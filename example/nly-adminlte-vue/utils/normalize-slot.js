import identity from "./identity";
import { concat } from "./array";
import { isFunction } from "./inspect";

const hasNormalizedSlot = (names, $scopedSlots = {}, $slots = {}) => {
  names = concat(names).filter(identity);

  return names.some(name => $scopedSlots[name] || $slots[name]);
};

const normalizeSlot = (names, scope = {}, $scopedSlots = {}, $slots = {}) => {
  names = concat(names).filter(identity);
  let slot;
  for (let i = 0; i < names.length && !slot; i++) {
    const name = names[i];
    slot = $scopedSlots[name] || $slots[name];
  }

  return isFunction(slot) ? slot(scope) : slot;
};

export { hasNormalizedSlot, normalizeSlot };

export default normalizeSlot;
