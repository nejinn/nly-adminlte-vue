export default {
  props: {
    // 大小 sm,lg
    size: {
      type: String
    }
  },
  computed: {
    sizeFormClass() {
      return [this.size ? `form-control-${this.size}` : null];
    },
    sizeBtnClass() {
      return [this.size ? `btn-${this.size}` : null];
    }
  }
};
