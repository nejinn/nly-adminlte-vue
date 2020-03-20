export default {
  props: {
    valid: {
      type: String
    }
  },
  computed: {
    computedValid() {
      return this.valid;
    },
    validClass() {
      const valid = this.computedValid;
      return valid === "valid"
        ? "is-valid"
        : valid === "invalid"
        ? "is-invalid"
        : valid === "warning"
        ? "is-warning"
        : null;
    }
  }
};
