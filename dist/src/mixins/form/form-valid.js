import { nlyGetOptionInclusion } from "../../utils/get-options";
import { formValidOptions } from "../../utils/nly-config";

export default {
  props: {
    valid: {
      type: String,
      validator: valid => nlyGetOptionInclusion(formValidOptions, valid)
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
        : valid === "loading"
        ? "is-loading"
        : null;
    }
  }
};
