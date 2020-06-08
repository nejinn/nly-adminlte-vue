import Vue from "../../utils/vue";
import { mergeData } from "vue-functional-data-merge";

export const props = {
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
};

const customClass = props => {
  const customNoGutters = props.noGutters ? "no-gutters" : "";
  const customColsXs = props.colsXs ? `row-cols-${props.colsXs}` : "";
  const customColsSm = props.colsSm ? `row-cols-sm-${props.colsSm}` : "";
  const customColsMd = props.colsMd ? `row-cols-md-${props.colsMd}` : "";
  const customColsLg = props.colsLg ? `row-cols-lg-${props.colsLg}` : "";
  const customColsXl = props.colsXl ? `row-cols-lx-${props.colsXl}` : "";
  const customRowClass = props.rowClass;

  return [
    customNoGutters,
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
