import { hasNormalizedSlot, normalizeSlot } from "../utils/normalize-slot";
import { concat } from "../utils/array";

export default {
  methods: {
    hasNormalizedSlot(names) {
      return hasNormalizedSlot(names, this.$scopedSlots, this.$slots);
    },
    normalizeSlot(names, scope = {}) {
      const vNodes = normalizeSlot(
        names,
        scope,
        this.$scopedSlots,
        this.$slots
      );
      return vNodes ? concat(vNodes) : vNodes;
    }
  }
};
