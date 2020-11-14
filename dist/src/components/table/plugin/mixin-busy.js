import { isFunction } from "../../../utils/inspect";
import { NlyTr } from "../tr";
import { NlyTd } from "../td";

const busySlotName = "table-busy";

export default {
  props: {
    busy: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      localBusy: false
    };
  },
  computed: {
    computedBusy() {
      return this.busy || this.localBusy;
    }
  },
  watch: {
    localBusy(newVal, oldVal) {
      if (newVal !== oldVal) {
        this.$emit("update:busy", newVal);
      }
    }
  },
  methods: {
    // Event handler helper
    stopIfBusy(evt) {
      if (this.computedBusy) {
        // If table is busy (via provider) then don't propagate
        evt.preventDefault();
        evt.stopPropagation();
        return true;
      }
      return false;
    },
    // Render the busy indicator or return `null` if not busy
    renderBusy() {
      const h = this.$createElement;

      // Return a busy indicator row, or `null` if not busy
      if (this.computedBusy && this.hasNormalizedSlot(busySlotName)) {
        // Show the busy slot
        return h(
          NlyTr,
          {
            key: "table-busy-slot",
            staticClass: "nly-table-busy-slot",
            class: [
              isFunction(this.tbodyTrClass)
                ? this.tbodyTrClass(null, busySlotName)
                : this.tbodyTrClass
            ],
            attrs: isFunction(this.tbodyTrAttr)
              ? this.tbodyTrAttr(null, busySlotName)
              : this.tbodyTrAttr
          },
          [
            h(
              NlyTd,
              { props: { colspan: this.computedFields.length || null } },
              [this.normalizeSlot(busySlotName)]
            )
          ]
        );
      } else {
        // We return `null` here so that we can determine if we need to
        // render the table items rows or not
        return null;
      }
    }
  }
};
