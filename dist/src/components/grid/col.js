import Vue from "../../utils/vue";
import { mergeData } from "vue-functional-data-merge";
import { colAlignSelfOptions } from "../../utils/nly-config";
import { nlyGetOptionInclusion } from "../../utils/get-options";

export const props = {
  tag: {
    type: String,
    default: "div"
  },
  col: {
    type: Boolean,
    default: false
  },
  xs: {
    type: [String, Number]
  },
  sm: {
    default: false,
    type: [String, Boolean, Number]
  },
  md: {
    default: false,
    type: [String, Boolean, Number]
  },
  lg: {
    default: false,
    type: [String, Boolean, Number]
  },
  xl: {
    default: false,
    type: [String, Boolean, Number]
  },
  alignSelf: {
    type: String,
    default: null,
    validator: alignSelf =>
      nlyGetOptionInclusion(colAlignSelfOptions, alignSelf)
  },
  offsetXs: {
    type: [String, Number]
  },
  offsetSm: {
    type: [String, Number]
  },
  offsetMd: {
    type: [String, Number]
  },
  offsetLg: {
    type: [String, Number]
  },
  offsetXl: {
    type: [String, Number]
  },
  orderXs: {
    type: [String, Number]
  },
  orderSm: {
    type: [String, Number]
  },
  orderMd: {
    type: [String, Number]
  },
  orderLg: {
    type: [String, Number]
  },
  orderXl: {
    type: [String, Number]
  },
  colClass: {
    type: String
  }
};

const customClass = props => {
  const customCol =
    props.xs ||
    props.sm === "" ||
    props.md === "" ||
    props.lg === "" ||
    props.xl === "" ||
    props.sm ||
    props.md ||
    props.lg ||
    props.xl
      ? ""
      : props.col
      ? "col"
      : "";
  const customXs = props.xs ? `col-${props.xs}` : "";
  const customSm =
    props.sm === ""
      ? "col-sm"
      : props.sm === true
      ? "col-sm"
      : props.sm
      ? `col-sm-${props.sm}`
      : "";
  const customMd =
    props.md === ""
      ? "col-md"
      : props.md === true
      ? "col-md"
      : props.md
      ? `col-md-${props.md}`
      : "";
  const customLg =
    props.lg === ""
      ? "col-lg"
      : props.lg === true
      ? "col-lg"
      : props.lg
      ? `col-lg-${props.lg}`
      : "";
  const customXl =
    props.xl === ""
      ? "col-lg"
      : props.xl === true
      ? "col-xl"
      : props.xl
      ? `col-xl-${props.xl}`
      : "";
  const customOffsetXs =
    props.offsetXs === 0 || props.offsetXs ? `offset-${props.offsetXs}` : "";
  const customOffsetSm =
    props.offsetSm === 0 || props.offsetSm ? `offset-sm-${props.offsetSm}` : "";
  const customOffsetMd =
    props.offsetMd === 0 || props.offsetMd ? `offset-md-${props.offsetMd}` : "";
  const customOffsetLg =
    props.offsetLg === 0 || props.offsetLg ? `offset-lg-${props.offsetLg}` : "";
  const customOffsetXl =
    props.offsetXl === 0 || props.offsetXl ? `offset-xl-${props.offsetXl}` : "";
  const customOrderXs =
    props.orderXs === 0 || props.orderXs ? `order-${props.orderXs}` : "";
  const customOrderSm =
    props.orderSm === 0 || props.orderSm ? `order-sm-${props.orderSm}` : "";
  const customOrderMd =
    props.orderMd === 0 || props.orderMd ? `order-md-${props.orderMd}` : "";
  const customOrderLg =
    props.orderLg === 0 || props.orderLg ? `order-lg-${props.orderLg}` : "";
  const customOrderXl =
    props.orderXl === 0 || props.orderXl ? `order-xl-${props.orderXl}` : "";
  const customColClass = props.colClass;

  const colAlignSelfClass =
    props.alignSelf != null ? `align-self-${props.alignSelf}` : null;

  return [
    customCol,
    customXs,
    customSm,
    customMd,
    customLg,
    customXl,
    colAlignSelfClass,
    customOffsetXs,
    customOffsetSm,
    customOffsetMd,
    customOffsetLg,
    customOffsetXl,
    customOrderXs,
    customOrderSm,
    customOrderMd,
    customOrderLg,
    customOrderXl,
    customColClass
  ];
};

const name = "NlyCol";

export const NlyCol = Vue.extend({
  name: name,
  props,
  functional: true,
  render(h, { props, data, children }) {
    return h(
      props.tag,
      mergeData(data, {
        staticClass:
          props.col ||
          props.xs ||
          props.sm ||
          props.md ||
          props.lg ||
          props.xl ||
          props.sm === "" ||
          props.md === "" ||
          props.lg === "" ||
          props.xl === ""
            ? ""
            : "col",
        class: customClass(props)
      }),
      children
    );
  }
});
