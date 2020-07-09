export default {
  props: {
    labelAlignXs: {
      type: String
    },
    labelAlignSm: {
      type: String
    },
    labelAlignMd: {
      type: String
    },
    labelAlignLg: {
      type: String
    },
    labelAlignXl: {
      type: String
    },
    labelClass: {
      type: String
    }
  },
  computed: {
    customGroupLabelTextProps() {
      return [
        this.labelAlignXs ? `text-${this.labelAlignXs}` : null,
        this.labelAlignSm ? `text-sm-${this.labelAlignSm}` : null,
        this.labelAlignMd ? `text-md-${this.labelAlignMd}` : null,
        this.labelAlignLg ? `text-lg-${this.labelAlignLg}` : null,
        this.labelAlignXl ? `text-xl-${this.labelAlignXl}` : null,
        this.labelClass ? this.labelClass : null
      ];
    }
  }
};
