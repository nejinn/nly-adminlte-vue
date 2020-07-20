import Vue from "../../utils/vue";

import { NlySearchSelectItem } from "./plugin/search-select-item";
import { NlySearchSelectMultipleContainer } from "./plugin/search-select-multiple-container";
import { NlySearchSelectSingleContainer } from "./plugin/search-select-single-container";
// import { NlySearchSelectMultipleItem } from "./plugin/search-select-multiple-item";
// import { NlySearchSelectSingleItem } from "./plugin/search-select-single-item";

const name = "NlySearchSelect";

export const NlySearchSelect = Vue.extend({
  name: name,
  model: {
    prop: "value",
    event: "input"
  },
  props: {
    /** select的prop */
    // 隐藏的select 的 id
    id: {
      type: String,
      default: null
    },
    // 隐藏的select 的 option，即需要渲染到下拉框中的数据
    options: {
      type: [Array, Object],
      default: () => []
    },
    // 隐藏的select 的 value, 即 渲染为下拉框中元素的 value
    valueField: {
      type: String,
      default: "value"
    },
    // 隐藏的select 的 text, 即 渲染为下拉框中元素的 文本
    textField: {
      type: String,
      default: "text"
    },
    // 隐藏的select 的 分组标签 的名称
    labelField: {
      type: String,
      default: "label"
    },
    // 隐藏的select 的分组下默的 option 字段名称
    optionsField: {
      type: String,
      default: "options"
    },
    // 颜色
    variant: {
      type: String,
      default: null
    },
    // 多选
    multiple: {
      type: Boolean,
      default: false
    },
    /** select-container的 pops */
    placeholder: {
      type: String,
      default: "Choice a field"
    },
    // inputFunction: {
    //   type: Function
    // },
    // 获取所选择的值
    value: {
      //   type: [Array, Object],
      //   default: () => []
    },
    //
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      // 选中的值， 用来传给 item 的
      checkValue: [
        { value: null, text: "Please select an option" },
        { value: "a", text: "This is First option" },
        { value: "b", text: "Selected Option" },
        { value: "c", text: "This is First option ccc" },
        { value: "d", text: "Selected Option ddd" },
        {
          label: "Grouped options",
          options: [
            { value: { C: "3PO" }, text: "Option with object value" },
            { value: { R: "2D2" }, text: "Another option with object value" }
          ]
        }
      ],
      inputValue: null,
      open: false,
      focus: false,
      below: null,
      ower: "zzz",
      owern: "ddd"
    };
  },
  methods: {
    inputFunction(evt) {
      this.inputValue = evt;
    }
  },
  render(h) {
    const $searchSelectItemVnodes = h(NlySearchSelectItem, {
      props: {
        id: this.id,
        // 隐藏的select 的 option，即需要渲染到下拉框中的数据
        options: this.options,
        // 隐藏的select 的 value, 即 渲染为下拉框中元素的 value
        valueField: this.valueField,
        // 隐藏的select 的 text, 即 渲染为下拉框中元素的 文本
        textField: this.textField,
        // 隐藏的select 的 分组标签 的名称
        labelField: this.labelField,
        // 隐藏的select 的分组下默的 option 字段名称
        optionsField: this.optionsField
      }
    });
    const $multipleVnodes = h(NlySearchSelectMultipleContainer, {
      props: {
        open: this.open,
        focus: this.focus,
        below: this.below,
        ower: this.ower,
        value: this.checkValue,
        placeholder: this.placeholder,
        inputFunction: this.inputFunction,
        valueField: this.valueField,
        textField: this.textField
      }
    });

    const $singleVnodes = h(NlySearchSelectSingleContainer, {
      props: {
        open: this.open,
        focus: this.focus,
        below: this.below,
        ower: this.ower,
        value: this.checkValue,
        placeholder: this.placeholder,
        disabled: this.disabled
      }
    });
    if (this.multiple) {
      return h(
        "div",
        { staticClass: this.variant ? `select2-${this.variant}` : null },
        [$searchSelectItemVnodes, $multipleVnodes]
      );
    } else {
      return h("div", {}, [$searchSelectItemVnodes, $singleVnodes]);
    }
  }
});
