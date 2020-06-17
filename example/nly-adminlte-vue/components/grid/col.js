import Vue from "../../utils/vue";
import { mergeData } from "vue-functional-data-merge";

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
  offsetXs: {
    type: String
  },
  offsetSm: {
    type: String
  },
  offsetMd: {
    type: String
  },
  offsetLg: {
    type: String
  },
  offsetXl: {
    type: String
  },
  orderXs: {
    type: String
  },
  orderSm: {
    type: String
  },
  orderMd: {
    type: String
  },
  orderLg: {
    type: String
  },
  orderXl: {
    type: String
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
  const customOffsetXs = props.offsetXs ? `offset-${props.offsetXs}` : "";
  const customOffsetSm = props.offsetSm ? `offset-sm-${props.offsetSm}` : "";
  const customOffsetMd = props.offsetMd ? `offset-md-${props.offsetMd}` : "";
  const customOffsetLg = props.offsetLg ? `offset-lg-${props.offsetLg}` : "";
  const customOffsetXl = props.offsetXl ? `offset-xl-${props.offsetXl}` : "";
  const customOrderXs = props.orderXs ? `order-${props.orderXs}` : "";
  const customOrderSm = props.orderSm ? `order-sm-${props.orderSm}` : "";
  const customOrderMd = props.orderMd ? `order-md-${props.orderMd}` : "";
  const customOrderLg = props.orderLg ? `order-lg-${props.orderLg}` : "";
  const customOrderXl = props.orderXl ? `order-xl-${props.orderXl}` : "";
  const customColClass = props.colClass;

  return [
    customCol,
    customXs,
    customSm,
    customMd,
    customLg,
    customXl,
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
