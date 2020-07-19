import Vue from "../../../utils/vue";
import { isFunction } from "../../../utils/inspect";
import get from "../../../utils/get";
import { stripTags } from "../../../utils/html";
import {
  isArray,
  isPlainObject,
  isUndefined,
  isString
} from "../../../utils/inspect";
import { keys } from "../../../utils/object";
import { warn } from "../../../utils/warn";
const name = "NlySearchSelectMultipleItem";

const OPTIONS_OBJECT_DEPRECATED_MSG =
  'Setting prop "options" to an object is deprecated. Use the array format instead.';

export const props = {
  value: {
    type: [Array, Object],
    default: () => []
  },
  placeholder: {
    type: String,
    default: "Choice a field"
  },
  inputFunction: {
    type: Function
  },
  valueField: {
    type: String,
    default: "value"
  },
  textField: {
    type: String,
    default: "text"
  }
};

export const NlySearchSelectMultipleItem = Vue.extend({
  name: name,
  data() {
    return {
      localValue: null
    };
  },
  model: {
    prop: "value",
    event: "change"
  },
  props,
  computed: {
    isInputFunction() {
      return isFunction(this.inputFunction);
    },
    valueOptions() {
      return this.normalizeOptions(this.value);
    }
  },
  // created() {
  //   this.localTagValue = this.value;
  // },
  methods: {
    normalizeOption(option, key = null) {
      if (isPlainObject(option)) {
        const value = get(option, this.valueField);
        const text = get(option, this.textField);
        return {
          value: isUndefined(value) ? key || text : value,
          text: stripTags(String(isUndefined(text) ? key : text))
        };
      }
      return {
        value: key || option,
        text: stripTags(String(option))
      };
    },
    normalizeOptions(options) {
      if (isArray(options)) {
        return options.map(option => this.normalizeOption(option));
      } else if (isPlainObject(options)) {
        warn(OPTIONS_OBJECT_DEPRECATED_MSG, this.$options.name);
        return keys(options).map(key =>
          this.normalizeOption(options[key] || {}, key)
        );
      }
      return [];
    },
    updateValue(index, newValue) {
      newValue.splice(index, 1);
      this.$emit("change", newValue);
    },
    stopRefresh(evt) {
      if (evt.preventDefault) {
        // preventDefault()方法阻止元素发生默认的行为
        evt.preventDefault();
      }
      if (evt.returnValue) {
        // IE浏览器下用window.event.returnValue = false;实现阻止元素发生默认的行为
      }
    },
    updateLocalValue(localValue) {
      if (this.isInputFunction) {
        this.inputFunction(localValue);
      }
    },
    changeBackSpace(evt) {
      const evtName =
        evt.target || evt.relatedTarget || evt.srcElement || evt.currentTarget;
      if (evt.keyCode === 8) {
        if (this.localValue === null || this.localValue === "") {
          if (evtName.nodeName === "INPUT") {
            this.stopRefresh(evt);
          }
          const deletedValue = this.value.slice(-1);
          this.updateValue(-1, this.value);
          this.$nextTick(() => {
            // if (isArray(deletedValue[0])) {
            //   console.log(1111, deletedValue, deletedValue[0]);
            //   this.$refs["nly_serach_select_multiple_input"].value =
            //     deletedValue[0];
            //   this.localValue = deletedValue[0];
            // } else if (isPlainObject(deletedValue[0])) {
            //   console.log(222, deletedValue, deletedValue[0][this.textField]);
            //   this.$refs["nly_serach_select_multiple_input"].value =
            //     deletedValue[0][this.textField];
            //   this.localValue = deletedValue[0][this.textField];
            // } else {
            //   this.$refs["nly_serach_select_multiple_input"].value = null;
            //   this.localValue = null;
            // }
            if (
              isPlainObject(deletedValue[0]) &&
              keys(deletedValue[0]).indexOf("text") !== -1 &&
              keys(deletedValue[0]).indexOf("value") !== -1
            ) {
              this.$refs["nly_serach_select_multiple_input"].value =
                deletedValue[0].text;
              this.localValue = deletedValue[0].text;
            } else if (isString(deletedValue[0])) {
              this.$refs["nly_serach_select_multiple_input"].value =
                deletedValue[0];
              this.localValue = deletedValue[0];
            } else {
              this.$refs["nly_serach_select_multiple_input"].value = null;
              this.localValue = null;
            }
            this.updateLocalValue(this.localValue);
            this.$refs["nly_serach_select_multiple_input"].focus();
          });
        }
      }
    }
  },
  watch: {
    // eslint-disable-next-line no-unused-vars
    value(newValue) {
      // 监控value的值， 清除localValue值, 传入的value，也就是渲染出的tag会发生变化时，清空输入框的值
      // 给valueOptions赋值为value的新值，即动态渲染tag
      // 传入 inputFunction 获取输入框最新值，此时输入框值清除了，inputFunction获取的也应该是空值
      this.localValue = null;
      this.updateLocalValue(this.localValue);
    }
  },
  render(h) {
    var that = this;
    const $multipleOptions = that.valueOptions
      ? that.valueOptions.map((item, index) => {
          return h(
            "li",
            {
              staticClass: "select2-selection__choice",
              attrs: { title: item }
            },
            [
              h(
                "span",
                {
                  staticClass: "select2-selection__choice__remove",
                  attrs: { role: "presentation" },
                  title: `${index}_tags`,
                  on: {
                    click: evt => {
                      evt.stopPropagation();
                      that.updateValue(index, that.value);
                    }
                  }
                },
                "×"
              ),
              item.text
            ]
          );
        })
      : null;
    const $multipleInput =
      that.valueOptions === undefined || that.valueOptions.length == []
        ? h("li", { staticClass: "select2-search select2-search--inline" }, [
            h("input", {
              staticClass: "select2-search__field",
              attrs: {
                type: "search",
                tabindex: "0",
                autocomplete: "off",
                autocapitalize: "none",
                spellcheck: false,
                role: "searchbox",
                "aria-autocomplete": "list",
                placeholder: that.placeholder
              },
              style: { width: "100%" },
              domProps: {
                value: that.localValue
              },
              ref: "nly_serach_select_multiple_input",
              on: {
                input(evt) {
                  // 阻止ime
                  if (evt.target.composing) {
                    return;
                  }
                  // 给 localValue 赋值为输入框输入的值
                  that.localValue = evt.target.value;
                  // 传入 inputFunction 获取输入框最新值
                  if (that.isInputFunction) {
                    that.inputFunction(evt.target.value);
                  }
                },
                keydown(evt) {
                  that.changeBackSpace(evt);
                }
              }
            })
          ])
        : h("li", { staticClass: "select2-search select2-search--inline" }, [
            h("input", {
              staticClass: "select2-search__field",
              attrs: {
                type: "search",
                tabindex: "0",
                autocomplete: "off",
                autocapitalize: "none",
                spellcheck: false,
                role: "searchbox",
                "aria-autocomplete": "list",
                placeholder: ""
              },
              style: { width: "100%" },
              domProps: {
                value: that.localValue
              },
              ref: "nly_serach_select_multiple_input",
              on: {
                input(evt) {
                  if (evt.target.composing) {
                    return;
                  }
                  that.localValue = evt.target.value;
                  if (that.isInputFunction) {
                    that.inputFunction(evt.target.value);
                  }
                },
                keydown(evt) {
                  that.changeBackSpace(evt);
                }
              }
            })
          ]);

    return h("ul", { staticClass: "select2-selection__rendered" }, [
      $multipleOptions,
      $multipleInput
    ]);
  }
});
