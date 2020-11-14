import Vue from "../../utils/vue";
import idMixin from "../../mixins/id";
import formMixin from "../../mixins/form/form";
import formOptionsMixin from "../../mixins/form/form-options";
import formRadioCheckGroupMixin from "../../mixins/form/form-radio-check-group";
import formSizeMixin from "../../mixins/form/form-size";
import formStateMixin from "../../mixins/form/form-valid";

export const props = {
  checked: {
    default: null
  }
};

const name = "NlyFormRadioGroup";
export const NlyFormRadioGroup = Vue.extend({
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
      nlyaRadioGroup: this
    };
  },
  props,
  data() {
    return {
      localChecked: this.checked
    };
  },
  computed: {
    isRadioGroup() {
      return true;
    }
  }
});
