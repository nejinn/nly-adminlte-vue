import { isFunction } from "../../utils/inspect";
import { toString } from "../../utils/string";

export default {
  model: {
    prop: "value",
    event: "update"
  },
  props: {
    // v-model传值会传给value，也可以直接给value传值
    value: {
      type: [String, Number],
      default: ""
    },
    // 只读
    readonly: {
      type: Boolean,
      default: false
    },
    // 无外框
    plaintext: {
      type: Boolean,
      default: false
    },
    // 自动提示完成填写
    autocomplete: {
      type: String,
      default: null
    },
    // 提示内容
    placeholder: {
      type: String,
      default: null
    },
    // 格式转换
    formatter: {
      type: Function,
      default: null
    },
    // 懒加载格式转换
    lazyFormatter: {
      type: Boolean,
      default: false
    },
    // 去除首位空格
    trim: {
      type: Boolean,
      default: false
    },

    lazy: {
      // Only update the `v-model` on blur/change events
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      localValue: toString(this.value),
      cloneValue: this.value
    };
  },
  computed: {
    customHasFormatter() {
      return isFunction(this.formatter);
    }
  },
  watch: {
    value(newVal) {
      const stringValue = toString(newVal);
      if (stringValue !== this.localValue && newVal !== this.cloneValue) {
        this.localValue = stringValue;
        this.cloneValue = newVal;
      }
    }
  },
  mounted() {
    const value = this.value;
    const stringValue = toString(value);
    if (stringValue !== this.localValue && value !== this.cloneValue) {
      this.localValue = stringValue;
      this.cloneValue = value;
    }
  },
  methods: {
    // 转换格式
    formatValue(value, evt, force = false) {
      value = toString(value);
      if (this.customHasFormatter && (!this.lazyFormatter || force)) {
        value = this.formatter(value, evt);
      }
      return value;
    },
    // 去除首尾空格
    trimValue(value) {
      if (this.trim) {
        value = value.trim();
      }
      return value;
    },
    // 更新value值给v-model
    updateValue(value, force = false) {
      const lazy = this.lazy;
      if (lazy && !force) {
        return;
      }
      value = this.trimValue(value);
      if (value !== this.cloneValue) {
        this.cloneValue = value;
        this.$emit("update", value);
      } else if (this.customHasFormatter) {
        const $input = this.$refs.input;
        if ($input && value !== $input.value) {
          $input.value = value;
        }
      }
    },
    onInput(evt) {
      // 阻止IME
      if (evt.target.composing) {
        return;
      }
      const value = evt.target.value;
      const formattedValue = this.formatValue(value, evt);
      if (formattedValue === false || evt.defaultPrevented) {
        evt.preventDefault();
        return;
      }
      this.localValue = formattedValue;
      this.updateValue(formattedValue);
      this.$emit("input", formattedValue);
    },
    onChange(evt) {
      const value = evt.target.value;
      const formattedValue = this.formatValue(value, evt);
      if (formattedValue === false || evt.defaultPrevented) {
        evt.preventDefault();
        return;
      }
      this.localValue = formattedValue;
      this.updateValue(formattedValue, true);
      this.$emit("change", formattedValue);
    },
    onBlur(evt) {
      const value = evt.target.value;
      const formattedValue = this.formatValue(value, evt, true);
      if (formattedValue !== false) {
        this.localValue = toString(this.trimValue(formattedValue));
        this.updateValue(formattedValue, true);
      }
      this.$emit("blur", evt);
    },
    focus() {
      if (!this.disabled) {
        this.$el.focus();
      }
    },
    blur() {
      if (!this.disabled) {
        this.$el.blur();
      }
    }
  }
};
