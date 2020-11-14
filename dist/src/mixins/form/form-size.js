export default {
  props: {
    // 大小 sm,lg
    size: {
      type: String
    },
    col: {
      type: Boolean,
      default: false
    },
    xs: {
      type: [String, Number]
    },
    sm: {
      type: [String, Number]
    },
    md: {
      type: [String, Number]
    },
    lg: {
      type: [String, Number]
    },
    xl: {
      type: [String, Number]
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
    }
  },
  computed: {
    sizeFormClass() {
      return [this.size ? `form-control-${this.size}` : null];
    },
    sizeBtnClass() {
      return [this.size ? `btn-${this.size}` : null];
    },
    customCol: function() {
      return this.xs || this.sm || this.md || this.lg || this.xl
        ? null
        : this.col
        ? "col"
        : null;
    },
    customXs: function() {
      return this.xs ? `col-${this.xs}` : null;
    },
    customSm: function() {
      return this.sm ? `col-sm-${this.sm}` : null;
    },
    customMd: function() {
      return this.md ? `col-md-${this.md}` : null;
    },
    customLg: function() {
      return this.lg ? `col-lg-${this.lg}` : null;
    },
    customXl: function() {
      return this.xl ? `col-xl-${this.xl}` : null;
    },
    customOffsetXs: function() {
      return this.offsetXs === 0 || this.offsetXs
        ? `offset-${this.offsetXs}`
        : null;
    },
    customOffsetSm: function() {
      return this.offsetSm === 0 || this.offsetSm
        ? `offset-sm-${this.offsetSm}`
        : null;
    },
    customOffsetMd: function() {
      return this.offsetMd === 0 || this.offsetMd
        ? `offset-md-${this.offsetMd}`
        : null;
    },
    customOffsetLg: function() {
      return this.offsetLg === 0 || this.offsetLg
        ? `offset-lg-${this.offsetLg}`
        : null;
    },
    customOffsetXl: function() {
      return this.offsetXl === 0 || this.offsetXl
        ? `offset-xl-${this.offsetXl}`
        : null;
    },
    customOrderXs: function() {
      return this.orderXs === 0 || this.orderXs
        ? `order-${this.orderXs}`
        : null;
    },
    customOrderSm: function() {
      return this.orderSm === 0 || this.orderSm
        ? `order-sm-${this.orderSm}`
        : null;
    },
    customOrderMd: function() {
      return this.orderMd === 0 || this.orderMd
        ? `order-md-${this.orderMd}`
        : null;
    },
    customOrderLg: function() {
      return this.orderLg === 0 || this.orderLg
        ? `order-lg-${this.orderLg}`
        : null;
    },
    customOrderXl: function() {
      return this.orderXl === 0 || this.orderXl
        ? `order-xl-${this.orderXl}`
        : null;
    }
  }
};
