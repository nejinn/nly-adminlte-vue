import Vue from "../../utils/vue";
import { getComponentConfig } from "../../utils/config";
import { isBoolean } from "../../utils/inspect";
import { toFixed, toFloat, toInteger } from "../../utils/number";
import { toString } from "../../utils/string";
import normalizeSlotMixin from "../../mixins/normalize-slot";

const NAME = "NlyProgressBar";

export const NlyProgressBar = Vue.extend({
  name: NAME,
  mixins: [normalizeSlotMixin],
  inject: {
    NlyyProgress: {
      default() {
        return {};
      }
    }
  },
  props: {
    value: {
      type: [Number, String],
      default: 0
    },
    label: {
      type: String,
      default: null
    },
    max: {
      type: [Number, String],
      default: null
    },
    precision: {
      type: [Number, String],
      default: null
    },
    variant: {
      type: String,
      default: () => getComponentConfig(NAME, "variant")
    },
    striped: {
      type: Boolean,
      default: null
    },
    animated: {
      type: Boolean,
      default: null
    },
    labelValuePercent: {
      type: Boolean,
      default: null
    },
    labelValue: {
      type: Boolean,
      default: null
    },
    progressBarClass: {
      type: String
    }
  },
  computed: {
    customProgressBarClass() {
      return [
        this.customVariant ? `bg-${this.customVariant}` : "",
        this.customStriped || this.customAnimated ? "progress-bar-striped" : "",
        this.customAnimated ? "progress-bar-animated" : "",
        this.progressBarClass
      ];
    },
    customProgressBarStyle() {
      if (this.NlyyProgress.customProps.vertical) {
        return {
          height: 100 * (this.customValue / this.customMax) + "%"
        };
      } else {
        return {
          width: 100 * (this.customValue / this.customMax) + "%"
        };
      }
    },
    customValue() {
      return toFloat(this.value) || 0;
    },
    customMax() {
      const max = toFloat(this.max);
      return isNaN(max)
        ? toFloat(this.NlyyProgress.customProps.max) || 100
        : max;
    },
    customPrecision() {
      const precision = toInteger(this.precision);
      return isNaN(precision)
        ? toInteger(this.NlyyProgress.customProps.precision) || 0
        : precision;
    },
    customProgress() {
      const precision = this.customPrecision;
      const p = Math.pow(10, precision);
      return toFixed(
        (100 * p * this.customValue) / this.customMax / p,
        precision
      );
    },
    customVariant() {
      return this.variant || this.NlyyProgress.customProps.variant;
    },
    customStriped() {
      return isBoolean(this.striped)
        ? this.striped
        : this.NlyyProgress.customProps.striped || false;
    },
    customAnimated() {
      return isBoolean(this.animated)
        ? this.animated
        : this.NlyyProgress.customProps.animated || false;
    },
    customLabelValuePercent() {
      return isBoolean(this.labelValuePercent)
        ? this.labelValuePercent
        : this.NlyyProgress.customProps.labelValuePercent || false;
    },
    customLabelValue() {
      return isBoolean(this.labelValue)
        ? this.labelValue
        : this.NlyyProgress.customProps.labelValue || false;
    }
  },
  render(h) {
    let childNodes = h();
    if (this.hasNormalizedSlot("default")) {
      childNodes = this.normalizeSlot("default");
    } else if (this.label) {
      childNodes = h("span", {
        domProps: this.label
      });
    } else if (this.customLabelValuePercent) {
      childNodes = `${this.customProgress}%`;
    } else if (this.customLabelValue) {
      childNodes = toFixed(this.customValue, this.customPrecision);
    }
    return h(
      "div",
      {
        staticClass: "progress-bar",
        class: this.customProgressBarClass,
        style: this.customProgressBarStyle,
        attrs: {
          role: "progressbar",
          "aria-valuemin": "0",
          "aria-valuemax": toString(this.customMax),
          "aria-valuenow": toFixed(this.customValue, this.customPrecision)
        }
      },
      [childNodes]
    );
  }
});
