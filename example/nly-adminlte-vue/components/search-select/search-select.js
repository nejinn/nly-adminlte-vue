import Vue from "../../utils/vue";

import { NlySearchSelectItem } from "./plugin/search-select-item";
import { NlySearchSelectMultipleContainer } from "./plugin/search-select-multiple-container";
import { NlySearchSelectSingleContainer } from "./plugin/search-select-single-container";
import { NlySearchSelectDropdownContainer } from "./plugin/search-select-dropdown-container";
import idMixin from "../../mixins/id";
import { from as arrayFrom, isArray } from "../../utils/array";
import optionsMixin from "./plugin/mixin-search-select-options";
import { Portal, Wormhole } from "portal-vue";
import { NlySearchSelectPortal } from "./plugin/search-select-portal";
// import { props } from "./plugin/select-option";

import { warn } from "../../utils/warn";

// const VALUE_NOT_IN_OPTIONS =
//   "The Value in v-model is not in options, it is not render";

const name = "NlySearchSelect";

export const NlySearchSelect = Vue.extend({
  name: name,
  mixins: [idMixin, optionsMixin],
  model: {
    prop: "value",
    event: "input"
  },
  props: {
    /** select的prop */
    // 隐藏的select 的 id
    // id: {
    //   type: String,
    //   default: null
    // },
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
    },
    selectRef: {
      type: String
    }
  },
  data() {
    return {
      // 选中的值， 用来传给 item 的
      checkedValue: [],
      inputValue: null,
      open: false,
      focus: false,
      below: null,
      portalName: `nly-search-select-${this._uid}`,
      dropdownWidth: null,
      dropdownLeft: null
    };
  },
  beforeDestroy() {
    this.clearPortalTarget();
  },
  methods: {
    clearPortalTarget() {
      if (Wormhole.hasTarget(this.portalName)) {
        document.body.removeChild(
          document.body.querySelector(`#${this.portalName}-id`)
        );
      }
    },
    showDropDown() {
      if (!Wormhole.hasTarget(this.portalName)) {
        const div = document.createElement("div");
        document.body.appendChild(div);
        const searchSelectPortal = new NlySearchSelectPortal({
          parent: this.$root,
          propsData: {
            name: this.portalName,
            id: `${this.portalName}-id`
          }
        });
        searchSelectPortal.$mount(div);
        this.dropdownWidth = this.$refs[
          this.customProps.ref
        ].getBoundingClientRect().width;
        this.dropdownLeft = this.$refs[
          this.customProps.ref
        ].getBoundingClientRect().left;
      } else {
        warn(
          `A "<portal-target>" with name "${this.portalName}" already exists in the document.`,
          "NlySearchSelectPortal"
        );
      }
    },
    getCheckValueValueFieldValue() {},
    inputFunction(evt) {
      this.inputValue = evt;
    },
    click_other(e) {
      if (!this.$el.contains(e.target)) {
        this.open = false;
        this.focus = false;
      }
    },
    addCheckedValue(evt) {
      if (this.multiple) {
        const newValue = [];
        const addCheckedValue = arrayFrom(this.checkedValue).map(
          o => o[this.valueField]
        );
        if (addCheckedValue.indexOf(evt[this.valueField]) === -1) {
          this.checkedValue.push(evt);
        } else {
          this.checkedValue.splice(
            addCheckedValue.indexOf(evt[this.valueField]),
            1
          );
        }
        this.checkedValue.forEach(item => {
          if (item[this.valueField] !== null) {
            newValue.push(item[this.valueField]);
          }
        });
        this.open = false;
        this.$emit("input", newValue);
      } else {
        const newValue = [];
        const addCheckedValue = arrayFrom(this.checkedValue).map(
          o => o[this.valueField]
        );
        if (addCheckedValue.indexOf(evt[this.valueField]) === -1) {
          this.checkedValue = [evt];
        } else {
          this.checkedValue = null;
        }
        this.checkedValue.forEach(item => {
          if (item[this.valueField] !== null) {
            newValue.push(item[this.valueField]);
          }
        });
        this.open = false;
        this.$emit("input", newValue[0]);
      }
    },
    removeCheckedValue(newValue) {
      const newVal = [];
      newValue.forEach(item => {
        if (item[this.valueField] !== null) {
          newVal.push(item[this.valueField]);
        }
      });
      this.$emit("input", newVal);
    },
    getCheckValue() {
      if (this.multiple) {
        if (isArray(this.customProps.value)) {
          const selectedValArray = [];
          this.customProps.value.forEach(element => {
            arrayFrom(this.options).forEach(item => {
              if (Object.keys(item).indexOf(this.valueField) !== -1) {
                if (
                  JSON.stringify(item[this.valueField]) ===
                  JSON.stringify(element)
                ) {
                  selectedValArray.push(item);
                }
              } else if (Object.keys(item).indexOf(this.optionsField) !== -1) {
                item[this.optionsField].forEach(children => {
                  if (Object.keys(children).indexOf(this.valueField) !== -1) {
                    if (
                      JSON.stringify(children[this.valueField]) ===
                      JSON.stringify(element)
                    ) {
                      selectedValArray.push(children);
                    }
                  }
                });
              }
            });
          });
          return selectedValArray;
        } else {
          const selectedValArray = [];
          arrayFrom(this.options).forEach(item => {
            if (Object.keys(item).indexOf(this.valueField) !== -1) {
              if (
                JSON.stringify(item[this.valueField]) ===
                JSON.stringify(this.customProps.value)
              ) {
                selectedValArray.push(item);
              }
            } else if (Object.keys(item).indexOf(this.optionsField) !== -1) {
              item[this.optionsField].forEach(children => {
                if (Object.keys(children).indexOf(this.valueField) !== -1) {
                  if (
                    JSON.stringify(children[this.valueField]) ===
                    JSON.stringify(this.customProps.value)
                  ) {
                    selectedValArray.push(children);
                  }
                }
              });
            }
          });
          return selectedValArray;
        }
      } else {
        if (isArray(this.customProps.value)) {
          const selectedValArray = [];
          const element = this.customProps.value[0];
          arrayFrom(this.options).forEach(item => {
            if (Object.keys(item).indexOf(this.valueField) !== -1) {
              if (
                JSON.stringify(item[this.valueField]) ===
                JSON.stringify(element)
              ) {
                selectedValArray.push(item);
              }
            } else if (Object.keys(item).indexOf(this.optionsField) !== -1) {
              item[this.optionsField].forEach(children => {
                if (Object.keys(children).indexOf(this.valueField) !== -1) {
                  if (
                    JSON.stringify(children[this.valueField]) ===
                    JSON.stringify(element)
                  ) {
                    selectedValArray.push(children);
                  }
                }
              });
            }
          });

          return [selectedValArray[0]];
        } else {
          const selectedValArray = [];
          arrayFrom(this.options).forEach(item => {
            if (Object.keys(item).indexOf(this.valueField) !== -1) {
              if (
                JSON.stringify(item[this.valueField]) ===
                JSON.stringify(this.customProps.value)
              ) {
                selectedValArray.push(item);
              }
            } else if (Object.keys(item).indexOf(this.optionsField) !== -1) {
              item[this.optionsField].forEach(children => {
                if (Object.keys(children).indexOf(this.valueField) !== -1) {
                  if (
                    JSON.stringify(children[this.valueField]) ===
                    JSON.stringify(this.customProps.value)
                  ) {
                    selectedValArray.push(children);
                  }
                }
              });
            }
          });
          return [selectedValArray[0]];
        }
      }
    }
  },
  created() {},
  mounted() {
    this.checkedValue = this.getCheckValue();
  },
  computed: {
    customProps() {
      return {
        focus: this.focus,
        below: this.below,
        ower: this.id,
        placeholder: this.placeholder,
        inputFunction: this.inputFunction,
        valueField: this.valueField,
        textField: this.textField,
        options: this.options,
        value: this.value,
        id: this.safeId(),
        ref: this.selectRef ? this.selectRef : `${this.portalName}-ref`
      };
    }
  },
  watch: {
    open(newVal) {
      if (newVal === true) {
        document.addEventListener("click", this.click_other, true);
      } else {
        document.removeEventListener("click", this.click_other, true);
      }
    },
    value: {
      //监听的对象
      deep: true, //深度监听设置为 true
      handler: function() {
        this.checkedValue = this.getCheckValue();
      }
    }
  },
  render(h) {
    var thatselect = this;
    const $searchSelectItemVnodes = h(NlySearchSelectItem, {
      props: {
        id: thatselect.id,
        // 隐藏的select 的 option，即需要渲染到下拉框中的数据
        options: thatselect.options,
        // 隐藏的select 的 value, 即 渲染为下拉框中元素的 value
        valueField: thatselect.valueField,
        // 隐藏的select 的 text, 即 渲染为下拉框中元素的 文本
        textField: thatselect.textField,
        // 隐藏的select 的 分组标签 的名称
        labelField: thatselect.labelField,
        // 隐藏的select 的分组下默的 option 字段名称
        optionsField: thatselect.optionsField
      }
    });
    const $multipleVnodes = h(NlySearchSelectMultipleContainer, {
      props: {
        open: thatselect.open,
        focus: thatselect.focus,
        below: thatselect.below,
        ower: thatselect.safeId(),
        value: thatselect.checkedValue,
        placeholder: thatselect.placeholder,
        inputFunction: thatselect.inputFunction,
        valueField: thatselect.valueField,
        textField: thatselect.textField,
        removeCheckedValue: thatselect.removeCheckedValue
      },
      on: {
        click: () => {
          if (thatselect.open) {
            thatselect.open = false;
          } else {
            thatselect.open = true;
            thatselect.showDropDown();
          }
          thatselect.focus = true;
        }
      }
    });

    const $singleVnodes = h(NlySearchSelectSingleContainer, {
      props: {
        open: thatselect.open,
        focus: thatselect.focus,
        below: thatselect.below,
        ower: thatselect.safeId(),
        value: thatselect.checkedValue,
        placeholder: thatselect.placeholder,
        disabled: thatselect.disabled
      },
      on: {
        click: () => {
          thatselect.open
            ? (thatselect.open = false)
            : (thatselect.open = true);
          thatselect.focus = true;
        }
      }
    });

    const $dropdownVnodes = h(
      Portal,
      {
        props: {
          to: thatselect.portalName,
          slim: true,
          name: thatselect.portalName
        }
      },
      [
        h(NlySearchSelectDropdownContainer, {
          props: {
            open: thatselect.open,
            below: thatselect.below,
            id: thatselect.safeId(),
            valueField: thatselect.valueField,
            textField: thatselect.textField,
            labelField: thatselect.labelField,
            optionsField: thatselect.optionsField,
            options: thatselect.formOptions,
            multiple: thatselect.multiple,
            addCheckedValue: thatselect.addCheckedValue,
            width: `${this.dropdownWidth}px`,
            left: `${this.dropdownLeft}px`
          }
        })
      ]
    );

    if (thatselect.multiple) {
      return h(
        "div",
        {
          staticClass: thatselect.variant
            ? `select2-${thatselect.variant}`
            : null,
          attrs: {
            id: thatselect.customProps.id
          },
          ref: thatselect.customProps.ref
        },
        [$searchSelectItemVnodes, $multipleVnodes, $dropdownVnodes]
      );
    } else {
      return h(
        "div",
        {
          attrs: {
            id: thatselect.customProps.id
          },
          ref: thatselect.customProps.ref
        },
        [$searchSelectItemVnodes, $singleVnodes, $dropdownVnodes]
      );
    }
  }
});
