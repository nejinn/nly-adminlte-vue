import Vue from "../../utils/vue";
import normalizeSlotMixin from "../../mixins/normalize-slot";

export const props = {
  variant: {
    type: String,
    default: null
  }
};

const LIGHT = "light";
const DARK = "dark";

const name = "NlyTr";
export const NlyTr = Vue.extend({
  name: name,
  mixins: [normalizeSlotMixin],
  inheritAttrs: false,
  provide() {
    return {
      nlyaTableTr: this
    };
  },
  inject: {
    nlyaTableRowGroup: {
      default() /* istanbul ignore next */ {
        return {};
      }
    }
  },
  props,
  computed: {
    inTbody() {
      // Sniffed by <nly-td> / <nly-th>
      return this.nlyaTableRowGroup.isTbody;
    },
    inThead() {
      // Sniffed by <nly-td> / <nly-th>
      return this.nlyaTableRowGroup.isThead;
    },
    inTfoot() {
      // Sniffed by <nly-td> / <nly-th>
      return this.nlyaTableRowGroup.isTfoot;
    },
    isDark() {
      // Sniffed by <nly-td> / <nly-th>
      return this.nlyaTableRowGroup.isDark;
    },
    isStacked() {
      // Sniffed by <nly-td> / <nly-th>
      return this.nlyaTableRowGroup.isStacked;
    },
    isResponsive() {
      // Sniffed by <nly-td> / <nly-th>
      return this.nlyaTableRowGroup.isResponsive;
    },
    isStickyHeader() {
      // Sniffed by <nly-td> / <nly-th>
      // Sticky headers are only supported in thead
      return this.nlyaTableRowGroup.isStickyHeader;
    },
    hasStickyHeader() {
      // Sniffed by <b-tr> / <nly-td> / <nly-th>
      // Needed to handle header background classes, due to lack of
      // background color inheritance with Bootstrap v4 table CSS
      return !this.isStacked && this.nlyaTableRowGroup.hasStickyHeader;
    },
    tableVariant() {
      // Sniffed by <nly-td> / <nly-th>
      return this.nlyaTableRowGroup.tableVariant;
    },
    headVariant() {
      // Sniffed by <nly-td> / <nly-th>
      return this.inThead ? this.nlyaTableRowGroup.headVariant : null;
    },
    footVariant() {
      // Sniffed by <nly-td> / <nly-th>
      return this.inTfoot ? this.nlyaTableRowGroup.footVariant : null;
    },
    isRowDark() {
      return this.headVariant === LIGHT || this.footVariant === LIGHT
        ? false
        : this.headVariant === DARK || this.footVariant === DARK
        ? true
        : this.isDark;
    },
    trClasses() {
      return [
        this.variant
          ? `${this.isRowDark ? "bg" : "table"}-${this.variant}`
          : null
      ];
    },
    trAttrs() {
      return { role: "row", ...this.$attrs };
    }
  },
  render(h) {
    return h(
      "tr",
      {
        class: this.trClasses,
        attrs: this.trAttrs,
        // Pass native listeners to child
        on: this.$listeners
      },
      this.normalizeSlot("default")
    );
  }
});
