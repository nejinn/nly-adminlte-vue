import Vue from "../../utils/vue";
import formMixin from "../../mixins/form/form";
import formOptionsMixin from "../../mixins/form/form-options";
import formRadioCheckGroupMixin from "../../mixins/form/form-radio-check-group";
import formSizeMixin from "../../mixins/form/form-size";
import formStateMixin from "../../mixins/form/form-valid";
import idMixin from "../../mixins/id";

export const props = {
  switches: {
    type: Boolean,
    default: false
  },
  checked: {
    type: Array,
    default: null
  }
};

const name = "NlyFormCheckboxGroup";
export const NlyFormCheckboxGroup = Vue.extend({
  name: name,
  mixins: [
    idMixin,
    formMixin,
    formRadioCheckGroupMixin, // Includes render function
    formOptionsMixin,
    formSizeMixin,
    formStateMixin
  ],
  provide() {
    return {
      nlyaCheckGroup: this
    };
  },
  props,
  data() {
    return {
      localChecked: this.checked || []
    };
  },
  computed: {
    isRadioGroup() {
      return false;
    }
  }
});
