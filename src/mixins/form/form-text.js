import { isFunction } from "../../utils/inspect";
import { toString } from "../../utils/string";
import { mathMax } from "../../utils/math";
import { toInteger, toFloat } from "../../utils/number";

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
    number: {
      type: Boolean,
      default: false
    },
    lazy: {
      // Only update the `v-model` on blur/change events
      type: Boolean,
      default: false
    },
    debounce: {
      // Debounce timout (in ms). Not applicable with `lazy` prop
      type: [Number, String],
      default: 0
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
    },
    computedDebounce() {
      // Ensure we have a positive number equal to or greater than 0
      return mathMax(toInteger(this.debounce, 0), 0);
    }
  },
  watch: {
    value(newVal) {
      const stringifyValue = toString(newVal);
      if (stringifyValue !== this.localValue && newVal !== this.vModelValue) {
        // Clear any pending debounce timeout, as we are overwriting the user input
        this.clearDebounce();
        // Update the local values
        this.localValue = stringifyValue;
        this.vModelValue = newVal;
      }
    }
  },
  mounted() {
    // Create non-reactive property and set up destroy handl
    this.$_inputDebounceTimer = null;
    this.$on("hook:beforeDestroy", this.clearDebounce);
    // Preset the internal state
    const value = this.value;
    const stringifyValue = toString(value);
    /* istanbul ignore next */
    if (stringifyValue !== this.localValue && value !== this.vModelValue) {
      this.localValue = stringifyValue;
      this.vModelValue = value;
    }
  },
  methods: {
    clearDebounce() {
      clearTimeout(this.$_inputDebounceTimer);
      this.$_inputDebounceTimer = null;
    },
    // 转换格式
    formatValue(value, evt, force = false) {
      value = toString(value);
      if (this.customHasFormatter && (!this.lazyFormatter || force)) {
        value = this.formatter(value, evt);
      }
      return value;
    },
    // 去除首尾空格
    modifyValue(value) {
      // Emulate `.trim` modifier behaviour
      if (this.trim) {
        value = value.trim();
      }
      // Emulate `.number` modifier behaviour
      if (this.number) {
        value = toFloat(value, value);
      }
      return value;
    },
    // 更新value值给v-model
    updateValue(value, force = false) {
      const lazy = this.lazy;
      if (lazy && !force) {
        return;
      }
      value = this.modifyValue(value);
      if (value !== this.vModelValue) {
        this.clearDebounce();
        const doUpdate = () => {
          this.vModelValue = value;
          this.$emit("update", value);
        };
        const debounce = this.computedDebounce;
        if (debounce > 0 && !lazy && !force) {
          this.$_inputDebounceTimer = setTimeout(doUpdate, debounce);
        } else {
          doUpdate();
        }
      } else if (this.hasFormatter) {
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
        this.localValue = toString(this.modifyValue(formattedValue));
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
