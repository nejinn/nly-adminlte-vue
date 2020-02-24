import Vue from "../../utils/vue";

const name = "NlyRow";

export const NlyRow = Vue.extend({
  name: name,
  props: {
    tag: {
      type: String,
      default: "div"
    },
    noGutters: {
      type: Boolean,
      default: false
    },
    colsXs: {
      type: String
    },
    colsSm: {
      type: String
    },
    colsMd: {
      type: String
    },
    colsLg: {
      type: String
    },
    colsXl: {
      type: String
    },
    rowClass: {
      String
    }
  },
  computed: {
    customTag: function() {
      return this.tag;
    },
    customNoGutters: function() {
      return this.noGutters ? "no-gutters" : "";
    },
    customColsXs: function() {
      return this.colsXs ? `row-cols-${this.colsXs}` : "";
    },
    customColsSm: function() {
      return this.colsSm ? `row-cols-sm-${this.colsSm}` : "";
    },
    customColsMd: function() {
      return this.colsMd ? `row-cols-md-${this.colsMd}` : "";
    },
    customColsLg: function() {
      return this.colsLg ? `row-cols-lg-${this.colsLg}` : "";
    },
    customColsXl: function() {
      return this.colsXl ? `row-cols-lx-${this.colsXl}` : "";
    },
    customRowClass: function() {
      return this.rowClass;
    }
  },
  render(h) {
    return h(
      this.customTag,
      {
        staticClass: "row",
        class: [
          this.customColsXs,
          this.customColsSm,
          this.customColsMd,
          this.customColsLg,
          this.customColsXl,
          this.customNoGutters,
          this.customRowClass
        ]
      },
      this.$slots.default
    );
  }
});
