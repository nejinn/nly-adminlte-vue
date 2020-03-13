import Vue from "../../utils/vue";
import normalizeSlotMixin from "../../mixins/normalize-slot";

export const props = {
  footVariant: {
    type: String, // supported values: 'lite', 'dark', or null
    default: null
  }
};

const name = "NlyTfoot";
// @vue/component
export const NlyTfoot = Vue.extend({
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
    isTfoot() {
      // Sniffed by <nly-tr> / <nly-td> / <nly-th>
      return true;
    },
    isDark() /* istanbul ignore next: Not currently sniffed in tests */ {
      // Sniffed by <nly-tr> / <nly-td> / <nly-th>
      return this.nlyaTable.dark;
    },
    isStacked() {
      // Sniffed by <nly-tr> / <nly-td> / <nly-th>
      return this.nlyaTable.isStacked;
    },
    isResponsive() {
      // Sniffed by <nly-tr> / <nly-td> / <nly-th>
      return this.nlyaTable.isResponsive;
    },
    isStickyHeader() {
      // Sniffed by <nly-tr> / <nly-td> / <nly-th>
      // Sticky headers are only supported in thead
      return false;
    },
    hasStickyHeader() {
      // Sniffed by <nly-tr> / <nly-td> / <nly-th>
      // Needed to handle header background classes, due to lack of
      // background color inheritance with Bootstrap v4 table CSS
      return !this.isStacked && this.nlyaTable.stickyHeader;
    },
    tableVariant() /* istanbul ignore next: Not currently sniffed in tests */ {
      // Sniffed by <nly-tr> / <nly-td> / <nly-th>
      return this.nlyaTable.tableVariant;
    },
    tfootClasses() {
      return [this.footVariant ? `thead-${this.footVariant}` : null];
    },
    tfootAttrs() {
      return { role: "rowgroup", ...this.$attrs };
    }
  },
  render(h) {
    return h(
      "tfoot",
      {
        class: this.tfootClasses,
        attrs: this.tfootAttrs,
        // Pass down any native listeners
        on: this.$listeners
      },
      this.normalizeSlot("default")
    );
  }
});
