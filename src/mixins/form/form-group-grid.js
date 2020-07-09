export default {
  props: {
    labelColsXs: {
      default: false,
      type: [String, Number, Boolean]
    },
    labelColsSm: {
      default: false,
      type: [String, Number, Boolean]
    },
    labelColsMd: {
      default: false,
      type: [String, Number, Boolean]
    },
    labelColsLg: {
      default: false,
      type: [String, Number, Boolean]
    },
    labelColsXl: {
      default: false,
      type: [String, Number, Boolean]
    },
    labelColsOffsetXs: {
      type: [String, Number]
    },
    labelColsOffsetSm: {
      type: [String, Number]
    },
    labelColsOffsetMd: {
      type: [String, Number]
    },
    labelColsOffsetLg: {
      type: [String, Number]
    },
    labelColsOffsetXl: {
      type: [String, Number]
    },
    labelColsOrderXs: {
      type: [String, Number]
    },
    labelColsOrderSm: {
      type: [String, Number]
    },
    labelColsOrderMd: {
      type: [String, Number]
    },
    labelColsOrderLg: {
      type: [String, Number]
    },
    labelColsOrderXl: {
      type: [String, Number]
    }
  },
  computed: {
    customGroupGridProps() {
      return [
        this.labelColsXs === true
          ? "col"
          : this.labelColsXs
          ? `col-${this.labelColsXs}`
          : null,
        this.labelColsSm === true
          ? "col-sm"
          : this.labelColsSm
          ? `col-sm-${this.labelColsSm}`
          : null,
        this.labelColsMd === true
          ? "col-md"
          : this.labelColsMd
          ? `col-md-${this.labelColsMd}`
          : null,
        this.labelColsLg === true
          ? "col-lg"
          : this.labelColsLg
          ? `col-lg-${this.labelColsLg}`
          : null,
        this.labelColsXl === true
          ? "col-xl"
          : this.labelColsXl
          ? `col-xl-${this.labelColsXl}`
          : null,
        this.labelColsOrderXs === 0 || this.labelColsOrderXs
          ? `order-${this.labelColsOrderXs}`
          : null,
        this.labelColsOrderSm === 0 || this.labelColsOrderSm
          ? `order-sm-${this.labelColsOrderSm}`
          : null,
        this.labelColsOrderMd === 0 || this.labelColsOrderMd
          ? `order-md-${this.labelColsOrderMd}`
          : null,
        this.labelColsOrderLg === 0 || this.labelColsOrderLg
          ? `order-lg-${this.labelColsOrderLg}`
          : null,
        this.labelColsOrderXl === 0 || this.labelColsOrderXl
          ? `order-xl-${this.labelColsOrderXl}`
          : null,
        this.labelColsOffsetXs === 0 || this.labelColsOffsetXs
          ? `offset-${this.labelColsOffsetXs}`
          : null,
        this.labelColsOffsetSm === 0 || this.labelColsOffsetSm
          ? `offset-sm-${this.labelColsOffsetSm}`
          : null,
        this.labelColsOffsetMd === 0 || this.labelColsOffsetMd
          ? `offset-md-${this.labelColsOffsetMd}`
          : null,
        this.labelColsOffsetLg === 0 || this.labelColsOffsetLg
          ? `offset-lg-${this.labelColsOffsetLg}`
          : null,
        this.labelColsOffsetXl === 0 || this.labelColsOffsetXl
          ? `offset-xl-${this.labelColsOffsetXl}`
          : null
      ];
    },
    customGroupGridPropslen() {
      const customGroupGridPropsValues = [];
      this.customGroupGridProps.forEach(element => {
        if (element !== null) {
          customGroupGridPropsValues.push(element);
        }
      });
      return customGroupGridPropsValues.length;
    }
  }
};
