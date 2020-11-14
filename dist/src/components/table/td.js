import Vue from "../../utils/vue";
import { isUndefinedOrNull } from "../../utils/inspect";
import { toString } from "../../utils/string";
import normalizeSlotMixin from "../../mixins/normalize-slot";

const digitsRx = /^\d+$/;

const parseSpan = val => {
  val = parseInt(val, 10);
  return digitsRx.test(String(val)) && val > 0 ? val : null;
};

const spanValidator = val => isUndefinedOrNull(val) || parseSpan(val) > 0;

export const props = {
  variant: {
    type: String,
    default: null
  },
  colspan: {
    type: [Number, String],
    default: null,
    validator: spanValidator
  },
  rowspan: {
    type: [Number, String],
    default: null,
    validator: spanValidator
  },
  stackedHeading: {
    type: String,
    default: null
  },
  stickyColumn: {
    type: Boolean,
    default: false
  }
};

const name = "NlyTabelCell";

export const NlyTd = Vue.extend({
  name: name,
  mixins: [normalizeSlotMixin],
  inheritAttrs: false,
  inject: {
    nlyaTableTr: {
      default() {
        return {};
      }
    }
  },
  props,
  computed: {
    tag() {
      return "td";
    },
    inTbody() {
      return this.nlyaTableTr.inTbody;
    },
    inThead() {
      return this.nlyaTableTr.inThead;
    },
    inTfoot() {
      return this.nlyaTableTr.inTfoot;
    },
    isDark() {
      return this.nlyaTableTr.isDark;
    },
    isStacked() {
      return this.nlyaTableTr.isStacked;
    },
    isStackedCell() {
      // We only support stacked-heading in tbody in stacked mode
      return this.inTbody && this.isStacked;
    },
    isResponsive() {
      return this.nlyaTableTr.isResponsive;
    },
    isStickyHeader() {
      return this.nlyaTableTr.isStickyHeader;
    },
    hasStickyHeader() {
      return this.nlyaTableTr.hasStickyHeader;
    },
    isStickyColumn() {
      return (
        !this.isStacked &&
        (this.isResponsive || this.hasStickyHeader) &&
        this.stickyColumn
      );
    },
    rowVariant() {
      return this.nlyaTableTr.variant;
    },
    headVariant() {
      return this.nlyaTableTr.headVariant;
    },
    footVariant() {
      return this.nlyaTableTr.footVariant;
    },
    tableVariant() {
      return this.nlyaTableTr.tableVariant;
    },
    computedColspan() {
      return parseSpan(this.colspan);
    },
    computedRowspan() {
      return parseSpan(this.rowspan);
    },
    cellClasses() {
      let variant = this.variant;
      if (
        (!variant && this.isStickyHeader && !this.headVariant) ||
        (!variant && this.isStickyColumn)
      ) {
        variant = this.rowVariant || this.tableVariant || "nly-table-default";
      }
      return [
        variant ? `${this.isDark ? "bg" : "table"}-${variant}` : null,
        this.isStickyColumn ? "nly-table-sticky-column" : null
      ];
    },
    cellAttrs() {
      const headOrFoot = this.inThead || this.inTfoot;
      const colspan = this.computedColspan;
      const rowspan = this.computedRowspan;
      let role = "cell";
      let scope = null;

      if (headOrFoot) {
        role = "columnheader";
        scope = colspan > 0 ? "colspan" : "col";
      } else if (this.tag === "th") {
        role = "rowheader";
        scope = rowspan > 0 ? "rowgroup" : "row";
      }

      return {
        colspan: colspan,
        rowspan: rowspan,
        role: role,
        scope: scope,
        ...this.$attrs,
        "data-label":
          this.isStackedCell && !isUndefinedOrNull(this.stackedHeading)
            ? toString(this.stackedHeading)
            : null
      };
    }
  },
  render(h) {
    const content = [this.normalizeSlot("default")];
    return h(
      this.tag,
      {
        class: this.cellClasses,
        attrs: this.cellAttrs,
        on: this.$listeners
      },
      [this.isStackedCell ? h("div", [content]) : content]
    );
  }
});
