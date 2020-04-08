import Vue from "../../../utils/vue";
import { nlyGetOptionInclusion } from "../../../utils/get-options";
import {
  inputTypeOptions,
  inputMaxMinStepOptions
} from "../../../utils/nly-config";
import { toString } from "../../../utils/string";
import { isFunction } from "../../../utils/inspect";
import idMixin from "../../../mixins/id";
import formTextMixin from "../../../mixins/form/form-text";
import formMixin from "../../../mixins/form/form";
import formSizeMixin from "../../../mixins/form/form-szie";
import formValid from "../../../mixins/form/form-valid";
// import { toFloat } from "../../../utils/number";

const name = "NlyFormInput";

export const NlyFormInput = Vue.extend({
  name: name,
  mixins: [formTextMixin, formMixin, idMixin, formSizeMixin, formValid],
  props: {
    // input类型
    type: {
      type: String,
      default: "text",
      validator: type => nlyGetOptionInclusion(inputTypeOptions, type)
    },
    //颜色拾取器默认类型
    colorDefault: {
      type: Boolean,
      default: true
    },
    // 输入值的最大范围，type=number和range才有左右
    max: {
      type: [String, Number]
    },
    // 输入值的最小范围，type=number和range才有用
    min: {
      type: [String, Number]
    },
    // 输入值的最大长度，type='text'或者'password'时有用
    maxlength: {
      type: [String, Number]
    },
    // 有效间隔
    step: {
      type: [String, Number],
      default: null
    },
    // 输入时出现预先设定的option下拉列表，password无效
    list: {
      type: String,
      default: null
    },
    variant: {
      type: String
    }
  },
  computed: {
    customProps() {
      return {
        type: nlyGetOptionInclusion(inputTypeOptions, this.type)
          ? this.type
          : "text",
        min: nlyGetOptionInclusion(inputMaxMinStepOptions, this.type)
          ? this.min
          : null,
        max: nlyGetOptionInclusion(inputMaxMinStepOptions, this.type)
          ? this.max
          : null,
        maxlength:
          this.type === "text" || this.type === "password"
            ? this.maxlength
            : null,
        step: nlyGetOptionInclusion(inputMaxMinStepOptions, this.type)
          ? this.step
          : null
      };
    },
    computedClass() {
      const variantClass =
        this.type === "range" ? `custom-range-${this.variant}` : null;
      const rangeClass = this.type === "range" ? "custom-range" : null;
      const plaintextClass = () => {
        if (this.plaintext && this.type !== "range" && this.type !== "color") {
          return "form-control-plaintext";
        } else {
          return null;
        }
      };
      const formControlClass = () => {
        if (this.type === "range" || this.plaintext) {
          return null;
        } else {
          return "form-control";
        }
      };

      return [
        formControlClass(),
        rangeClass,
        plaintextClass(),
        this.sizeFormClass,
        this.validClass,
        variantClass,
        this.customCol,
        this.customXl,
        this.customLg,
        this.customMd,
        this.customSm,
        this.customXs,
        this.customOffsetXl,
        this.customOffsetLg,
        this.customOffsetMd,
        this.customOffsetSm,
        this.customOffsetXs,
        this.customOrderXl,
        this.customOrderLg,
        this.customOrderMd,
        this.customOrderSm,
        this.customOrderXs
      ];
    },
    // 检查formatter prop是不是函数
    customHasFormatter() {
      return isFunction(this.formatter);
    }
  },
  watch: {
    value: function(newVal) {
      const stringValue = toString(newVal);
      if (stringValue !== this.localValue && newVal !== this.cloneValue) {
        this.localValue = stringValue;
        this.cloneValue = newVal;
      }
    }
  },
  methods: {},
  mounted() {
    const value = this.value;
    const stringValue = toString(value);
    if (stringValue !== this.localValue && value !== this.cloneValue) {
      this.localValue = stringValue;
      this.cloneValue = value;
    }
  },
  render(h) {
    var self = this;
    return h("input", {
      ref: "input",
      class: this.computedClass,
      attrs: {
        id: self.safeId(),
        name: self.name,
        form: self.form || null,
        type: self.customProps.type,
        max: self.customProps.max,
        min: self.customProps.min,
        maxlength: self.customProps.maxlength,
        step: self.customProps.step,
        disabled: self.disabled,
        placeholder: self.placeholder,
        required: self.required,
        autocomplete: self.autocomplete || null,
        readonly: self.readonly || self.plaintext,
        list: self.localType !== "password" ? self.list : null
      },
      directives: [
        {
          name: "model",
          rawName: "v-model",
          value: self.value,
          expression: "value"
        }
      ],
      domProps: {
        value: self.value
      },
      on: {
        ...self.$listeners,
        input: self.onInput,
        change: self.onChange,
        blur: self.onBlur
      }
    });
  }
});
