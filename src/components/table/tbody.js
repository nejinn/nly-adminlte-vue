import Vue from "../../utils/vue";
import normalizeSlotMixin from "../../mixins/normalize-slot";

export const props = {
  tbodyTransitionProps: {
    type: Object
    // default: undefined
  },
  tbodyTransitionHandlers: {
    type: Object
    // default: undefined
  }
};

const name = "NlyTbody";
export const NlyTbody = Vue.extend({
  name: name,
  mixins: [normalizeSlotMixin],
  inheritAttrs: false,
  provide() {
    return {
      nlyaTableRowGroup: this
    };
  },
  inject: {
    nlyaTable: {
      default() /* istanbul ignore next */ {
        return {};
      }
    }
  },
  props,
  computed: {
    isTbody() {
      return true;
    },
    isDark() {
      return this.nlyaTable.dark;
    },
    isStacked() {
      return this.nlyaTable.isStacked;
    },
    isResponsive() {
      return this.nlyaTable.isResponsive;
    },
    isStickyHeader() {
      // Sticky headers are only supported in thead
      return false;
    },
    hasStickyHeader() {
      // Needed to handle header background classes, due to lack of
      // background color inheritance with Bootstrap v4 table CSS
      return !this.isStacked && this.nlyaTable.stickyHeader;
    },
    tableVariant() /* istanbul ignore next: Not currently sniffed in tests */ {
      return this.nlyaTable.tableVariant;
    },
    isTransitionGroup() {
      return this.tbodyTransitionProps || this.tbodyTransitionHandlers;
    },
    tbodyAttrs() {
      return { role: "rowgroup", ...this.$attrs };
    },
    tbodyProps() {
      return this.tbodyTransitionProps
        ? { ...this.tbodyTransitionProps, tag: "tbody" }
        : {};
    }
  },
  render(h) {
    const data = {
      props: this.tbodyProps,
      attrs: this.tbodyAttrs
    };
    if (this.isTransitionGroup) {
      // We use native listeners if a transition group
      // for any delegated events
      data.on = this.tbodyTransitionHandlers || {};
      data.nativeOn = this.$listeners || {};
    } else {
      // Otherwise we place any listeners on the tbody element
      data.on = this.$listeners || {};
    }
    return h(
      this.isTransitionGroup ? "transition-group" : "tbody",
      data,
      this.normalizeSlot("default")
    );
  }
});
