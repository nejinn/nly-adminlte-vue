import Vue from "../../utils/vue";
import idMixin from "../../mixins/id";
import formMixin from "../../mixins/form/form";
import formStateMixin from "../../mixins/form/form-valid";
import formSizeMixin from "../../mixins/form/form-size";
import formRadioCheckMixin from "../../mixins/form/form-radio-check";
import looseEqual from "../../utils/loose-equal";

const name = "NlyFormRadio";
export const NlyFormRadio = Vue.extend({
  name: name,
  mixins: [
    idMixin,
    formRadioCheckMixin, // Includes shared render function
    formMixin,
    formSizeMixin,
    formStateMixin
  ],
  inject: {
    nlyaGroup: {
      from: "nlyaRadioGroup",
      default: false
    }
  },
  props: {
    checked: {
      // v-model
      // type: [String, Number, Boolean, Object],
      default: null
    }
  },
  computed: {
    isChecked() {
      return looseEqual(this.value, this.computedLocalChecked);
    },
    // Flags for form-radio-check mixin
    isRadio() {
      return true;
    },
    isCheck() {
      return false;
    }
  },
  watch: {
    computedLocalChecked() {
      this.$emit("input", this.computedLocalChecked);
    }
  },
  methods: {
    handleChange({ target: { checked } }) {
      const value = this.value;
      this.computedLocalChecked = value;
      this.$emit("change", checked ? value : null);
      if (this.isGroup) {
        this.nlyaGroup.$emit("change", checked ? value : null);
      }
    }
  }
});
