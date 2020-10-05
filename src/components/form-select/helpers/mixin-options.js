import get from "../../../utils/get";
import { isNull, isPlainObject, isUndefined } from "../../../utils/inspect";
import formOptionsMixin from "../../../mixins/form/form-options";

// @vue/component
export default {
  mixins: [formOptionsMixin],
  props: {
    labelField: {
      type: String,
      default: "label"
    },
    optionsField: {
      type: String,
      default: "options"
    }
  },
  methods: {
    normalizeOption(option, key = null) {
      if (isPlainObject(option)) {
        const value = get(option, this.valueField);
        const text = get(option, this.textField);
        const options = get(option, this.optionsField, null);
        if (!isNull(options)) {
          return {
            label: String(get(option, this.labelField) || text),
            options: this.normalizeOptions(options)
          };
        }
        return {
          value: isUndefined(value) ? key || text : value,
          text: String(isUndefined(text) ? key : text),
          html: get(option, this.htmlField),
          disabled: Boolean(get(option, this.disabledField))
        };
      }
      return {
        value: key || option,
        text: String(option),
        disabled: false
      };
    }
  }
};
