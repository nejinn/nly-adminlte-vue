import Vue from "../../utils/vue";
import { mergeData } from "vue-functional-data-merge";
import { nlyGetOptionInclusion } from "../../utils/get-options";
import { rowAlignHOptions, rowAlignVOptions } from "../../utils/nly-config";

export const props = {
  tag: {
    type: String,
    default: "div"
  },
  noGutters: {
    type: Boolean,
    default: false
  },
  alignH: {
    type: String,
    default: null,
    validator: alignH => nlyGetOptionInclusion(rowAlignHOptions, alignH)
  },
  alignV: {
    type: String,
    default: null,
    validator: alignV => nlyGetOptionInclusion(rowAlignVOptions, alignV)
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
};

const customClass = props => {
  const customNoGutters = props.noGutters ? "no-gutters" : "";
  const customColsXs = props.colsXs ? `row-cols-${props.colsXs}` : "";
  const customColsSm = props.colsSm ? `row-cols-sm-${props.colsSm}` : "";
  const customColsMd = props.colsMd ? `row-cols-md-${props.colsMd}` : "";
  const customColsLg = props.colsLg ? `row-cols-lg-${props.colsLg}` : "";
  const customColsXl = props.colsXl ? `row-cols-lx-${props.colsXl}` : "";
  const customRowClass = props.rowClass;
  const rowAlignHClass =
    props.alignH != null ? `justify-content-${props.alignH}` : null;
  const rowalignVClass =
    props.alignV != null ? `align-items-${props.alignV}` : null;

  return [
    customNoGutters,
    rowAlignHClass,
    rowalignVClass,
    customColsXs,
    customColsSm,
    customColsMd,
    customColsLg,
    customColsXl,
    customRowClass
  ];
};

const name = "NlyRow";

export const NlyRow = Vue.extend({
  name: name,
  functional: true,
  props,
  render(h, { props, data, children }) {
    return h(
      props.tag,
      mergeData(data, {
        staticClass: "row",
        class: customClass(props)
      }),
      children
    );
  }
});
