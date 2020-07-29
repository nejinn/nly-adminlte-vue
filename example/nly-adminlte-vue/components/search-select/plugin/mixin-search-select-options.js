import get from "../../../utils/get";
import { isNull, isPlainObject, isUndefined } from "../../../utils/inspect";
import { from as arrayFrom } from "../../../utils/array";
import formOptionsMixin from "../../../mixins/form/search-select-options";

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
      var optionCheckedValue = this.checkedValue
        ? this.checkedValue.map(item => item[this.valueField])
        : [];
      if (isPlainObject(option)) {
        const value = get(option, this.valueField);
        const text = get(option, this.textField);
        const options = get(option, this.optionsField, null);

        if (!isNull(options)) {
          arrayFrom(options).forEach((item, index) => {
            if (optionCheckedValue.indexOf(item[this.valueField]) !== -1) {
              options[index]["selected"] = true;
            } else {
              options[index]["selected"] = false;
            }
          });
          return {
            label: String(get(option, this.labelField) || text),
            options: this.normalizeOptions(options)
          };
        }
        if (optionCheckedValue.indexOf(value) !== -1) {
          return {
            value: isUndefined(value) ? key || text : value,
            text: String(isUndefined(text) ? key : text),
            html: get(option, this.htmlField),
            disabled: Boolean(get(option, this.disabledField)),
            selected: true
          };
        } else {
          return {
            value: isUndefined(value) ? key || text : value,
            text: String(isUndefined(text) ? key : text),
            html: get(option, this.htmlField),
            disabled: Boolean(get(option, this.disabledField)),
            selected: false
          };
        }
      }
      return {
        value: key || option,
        text: String(option),
        disabled: false,
        selected: false
      };
    }
  }
};
