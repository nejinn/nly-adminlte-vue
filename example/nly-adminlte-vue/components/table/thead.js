import Vue from "../../utils/vue";
import normalizeSlotMixin from "../../mixins/normalize-slot";

export const props = {
  headVariant: {
    // Also sniffed by <nly-tr> / <nly-td> / <nly-th>
    type: String, // supported values: 'lite', 'dark', or null
    default: null
  }
};

const name = "NlyThead";

export const NlyThead = Vue.extend({
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
      // Sniffed by <nly-tr> / <nly-td> / <nly-th>
      default() /* istanbul ignore next */ {
        return {};
      }
    }
  },
  props,
  computed: {
    isThead() {
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
      // Needed to handle header background classes, due to lack of
      // background color inheritance with Bootstrap v4 table CSS
      // Sticky headers only apply to cells in table `thead`
      return !this.isStacked && this.nlyaTable.stickyHeader;
    },
    hasStickyHeader() {
      // Sniffed by <nly-tr> / <nly-td> / <nly-th>
      // Needed to handle header background classes, due to lack of
      // background color inheritance with Bootstrap v4 table CSS
      return !this.isStacked && this.nlyaTable.stickyHeader;
    },
    tableVariant() {
      // Sniffed by <nly-tr> / <nly-td> / <nly-th>
      return this.nlyaTable.tableVariant;
    },
    theadClasses() {
      return [this.headVariant ? `thead-${this.headVariant}` : null];
    },
    theadAttrs() {
      return { role: "rowgroup", ...this.$attrs };
    }
  },
  render(h) {
    return h(
      "thead",
      {
        class: this.theadClasses,
        attrs: this.theadAttrs,
        // Pass down any native listeners
        on: this.$listeners
      },
      this.normalizeSlot("default")
    );
  }
});
