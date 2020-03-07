import Vue from "../../utils/vue";
import { toInteger } from "../../utils/number";
import { nlyGetOptionsByKeyEqual } from "../../utils/get-options";

const name = "NlyBootstrapSwitch";

const bootstrapSwitchOptions = {
  xs: {
    class: "bootstrap-switch-mini",
    width: "70px",
    containerWidth: "104px",
    itemWidth: "34px"
  },
  sm: {
    class: "bootstrap-switch-small",
    width: "90px",
    containerWidth: "134px",
    itemWidth: "44px"
  },
  lg: {
    class: "bootstrap-switch-large",
    width: "130px",
    containerWidth: "194px",
    itemWidth: "64px"
  }
};

export const NlyBootstrapSwitch = Vue.extend({
  name: name,
  model: {
    prop: "checked",
    event: "change"
  },
  data() {
    return {
      checkedStatus: null
    };
  },
  props: {
    // v-model绑定值
    checked: {
      type: [Boolean, String, Number],
      default: false
    },
    //内圆
    inverse: {
      type: Boolean,
      default: false
    },
    // onText
    onText: {
      type: String,
      default: "ON"
    },
    onVariant: {
      type: String,
      default: "default"
    },
    labelText: {
      type: String,
      default: ""
    },
    offVariant: {
      type: String,
      default: "default"
    },
    offText: {
      type: String,
      default: "OFF"
    },
    width: {
      type: [String, Number]
    },
    size: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    animate: {
      type: Boolean,
      default: true
    },
    switchClass: {
      type: String
    },
    containerClass: {
      type: String
    },
    onClass: {
      type: String
    },
    labelClass: {
      type: String
    },
    offClass: {
      type: String
    }
  },
  computed: {
    customProps() {
      if (toInteger(this.width)) {
        return {
          inverse: this.inverse,
          onText: this.onText,
          labelText: this.labelText,
          offText: this.offText,
          width: toInteger(this.width),
          disabled: this.disabled,
          readonly: this.readonly,
          size: "",
          animate: this.animate,
          onVariant: this.onVariant,
          offVariant: this.offVariant,
          switchClass: this.switchClass,
          containerClass: this.containerClass,
          onClass: this.onClass,
          labelClass: this.labelClass,
          offClass: this.offClass
        };
      } else {
        return {
          inverse: this.inverse,
          onText: this.onText,
          labelText: this.labelText,
          offText: this.offText,
          width: "",
          disabled: this.disabled,
          readonly: this.readonly,
          size: this.size,
          animate: this.animate,
          onVariant: this.onVariant,
          offVariant: this.offVariant,
          switchClass: this.switchClass,
          containerClass: this.containerClass,
          onClass: this.onClass,
          labelClass: this.labelClass,
          offClass: this.offClass
        };
      }
    }
  },
  created() {
    this.checkedStatus = this.checked;
  },
  methods: {
    change() {
      this.$emit("change", this.checkedStatus);
    },
    switchStauts() {
      if (!this.customProps.disabled && !this.customProps.readonly) {
        this.checkedStatus = this.checkedStatus ? false : true;
        this.change();
      }
    },
    getSwitchClass() {
      if (this.customProps.width) {
        return "";
      } else {
        if (this.customProps.size) {
          return nlyGetOptionsByKeyEqual(
            bootstrapSwitchOptions,
            this.customProps.size
          ).class;
        } else {
          return "";
        }
      }
    },
    getSwitchWidth() {
      if (this.customProps.width) {
        return `${this.customProps.width * 2 + 2}px`;
      } else {
        if (this.customProps.size) {
          return nlyGetOptionsByKeyEqual(
            bootstrapSwitchOptions,
            this.customProps.size
          ).width;
        } else {
          return "110px";
        }
      }
    },
    getSwitchContainerWidth() {
      if (this.customProps.width) {
        return `${this.customProps.width * 3 + 2}px`;
      } else {
        if (this.customProps.size) {
          return nlyGetOptionsByKeyEqual(
            bootstrapSwitchOptions,
            this.customProps.size
          ).containerWidth;
        } else {
          return "164px";
        }
      }
    },
    getSwitchItemWidth() {
      if (this.customProps.width) {
        return `${this.customProps.width + 2}px`;
      } else {
        if (this.customProps.size) {
          return nlyGetOptionsByKeyEqual(
            bootstrapSwitchOptions,
            this.customProps.size
          ).itemWidth;
        } else {
          return "54px";
        }
      }
    }
  },
  watch: {
    checked: function(newval, oldval) {
      if (newval != oldval) {
        this.checkedStatus = newval;
      }
    }
  },
  render(h) {
    const switchContainer = () =>
      h(
        "div",
        {
          staticClass: "bootstrap-switch-container",
          class: [this.customProps.containerClass],
          style: {
            width: this.getSwitchContainerWidth(),
            marginLeft: this.checkedStatus
              ? "-" + this.getSwitchItemWidth()
              : "0px"
          }
        },
        [switchHandleOn(), switchLabel(), switchHandleOff(), inputArray()]
      );

    const switchHandleOn = () =>
      h(
        "span",
        {
          staticClass: "bootstrap-switch-handle-on",
          class: [
            `bootstrap-switch-${this.customProps.onVariant}`,
            this.customProps.onClass
          ],
          style: {
            width: this.getSwitchItemWidth()
          }
        },
        this.customProps.onText
      );

    const switchHandleOff = () =>
      h(
        "span",
        {
          staticClass: "bootstrap-switch-handle-off",
          class: [
            `bootstrap-switch-${this.customProps.offVariant}`,
            this.customProps.offClass
          ],
          style: {
            width: this.getSwitchItemWidth()
          }
        },
        this.customProps.offText
      );

    const switchLabel = () =>
      h(
        "span",
        {
          staticClass: "bootstrap-switch-label",
          class: [this.customProps.labelClass],
          style: {
            width: this.getSwitchItemWidth()
          }
        },
        this.customProps.labelText
      );

    const inputArray = () =>
      h("input", {
        attrs: {
          type: "checkbox"
        },
        domProps: {
          value: this.checkedStatus,
          checked: this.checkedStatus ? true : false
        }
      });

    return h(
      "div",
      {
        staticClass: "bootstrap-switch",
        class: [
          this.customProps.animate ? "bootstrap-switch-animate" : "",
          this.getSwitchClass(),
          this.customProps.disabled ? "bootstrap-switch-disabled" : "",
          this.customProps.inverse ? "bootstrap-switch-inverse" : "",
          this.customProps.readonly ? "bootstrap-switch-readonly" : "",
          this.customProps.switchClass
        ],
        style: {
          width: this.getSwitchWidth()
        },
        on: {
          click: this.switchStauts
        }
      },
      [switchContainer()]
    );
  }
});
