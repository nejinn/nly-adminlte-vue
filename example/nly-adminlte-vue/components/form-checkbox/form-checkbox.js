import Vue from "../../utils/vue";
import looseEqual from "../../utils/loose-equal";
import looseIndexOf from "../../utils/loose-index-of";
import { isArray } from "../../utils/inspect";
import formMixin from "../../mixins/form/form";
import formRadioCheckMixin from "../../mixins/form/form-radio-check";
import formSizeMixin from "../../mixins/form/form-size";
import formStateMixin from "../../mixins/form/form-valid";
import idMixin from "../../mixins/id";

const name = "NlyFormCheckbox";
export const NlyFormCheckbox = Vue.extend({
  name: name,
  mixins: [
    formRadioCheckMixin, // Includes shared render function
    idMixin,
    formMixin,
    formSizeMixin,
    formStateMixin
  ],
  inject: {
    nlyaGroup: {
      from: "nlyaCheckGroup",
      default: false
    }
  },
  props: {
    value: {
      // type: [String, Number, Boolean, Object],
      default: true
    },
    uncheckedValue: {
      // type: [String, Number, Boolean, Object],
      default: false
    },
    indeterminate: {
      type: Boolean,
      default: false
    },
    switch: {
      // Custom switch styling
      type: Boolean,
      default: false
    },
    checked: {
      // v-model (Array when multiple checkboxes have same name)
      // type: [String, Number, Boolean, Object, Array],
      default: null
    }
  },
  computed: {
    isChecked() {
      const { value, computedLocalChecked: checked } = this;
      return isArray(checked)
        ? looseIndexOf(checked, value) > -1
        : looseEqual(checked, value);
    },
    isRadio() {
      return false;
    },
    isCheck() {
      return true;
    }
  },
  watch: {
    computedLocalChecked(newValue, oldValue) {
      if (!looseEqual(newValue, oldValue)) {
        this.$emit("input", newValue);

        const $input = this.$refs.input;
        if ($input) {
          this.$emit("update:indeterminate", $input.indeterminate);
        }
      }
    },
    indeterminate(newVal) {
      this.setIndeterminate(newVal);
    }
  },
  mounted() {
    this.setIndeterminate(this.indeterminate);
  },
  methods: {
    handleChange({ target: { checked, indeterminate } }) {
      const { value, uncheckedValue } = this;
      let localChecked = this.computedLocalChecked;
      if (isArray(localChecked)) {
        const index = looseIndexOf(localChecked, value);
        if (checked && index < 0) {
          localChecked = localChecked.concat(value);
        } else if (!checked && index > -1) {
          localChecked = localChecked
            .slice(0, index)
            .concat(localChecked.slice(index + 1));
        }
      } else {
        localChecked = checked ? value : uncheckedValue;
      }
      this.computedLocalChecked = localChecked;
      this.$emit("change", localChecked);
      if (this.isGroup) {
        this.nlyaGroup.$emit("change", localChecked);
      }

      this.$emit("update:indeterminate", indeterminate);
    },
    setIndeterminate(state) {
      if (isArray(this.computedLocalChecked)) {
        state = false;
      }

      const $input = this.$refs.input;
      if ($input) {
        $input.indeterminate = state;
        this.$emit("update:indeterminate", state);
      }
    }
  }
});
