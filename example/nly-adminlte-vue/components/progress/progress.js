import Vue from "../../utils/vue";
import { getComponentConfig } from "../../utils/config";
import normalizeSlotMixin from "../../mixins/normalize-slot";
import { NlyProgressBar } from "./progress-bar";

const NAME = "NlyProgress";

export const NlyProgress = Vue.extend({
  name: NAME,
  mixins: [normalizeSlotMixin],
  provide() {
    return { NlyyProgress: this };
  },
  props: {
    variant: {
      type: String,
      default: () => getComponentConfig(NAME, "variant")
    },
    vertical: {
      type: Boolean,
      default: false
    },
    size: {
      type: String
    },
    striped: {
      type: Boolean,
      default: false
    },
    height: {
      type: String
      // default: null
    },
    animated: {
      type: Boolean,
      default: false
    },
    precision: {
      type: [Number, String],
      default: 0
    },
    labelValuePercent: {
      type: Boolean,
      default: false
    },
    labelValue: {
      type: Boolean,
      default: false
    },
    max: {
      type: [Number, String],
      default: 100
    },
    value: {
      type: [Number, String],
      default: 0
    },
    progressClass: {
      type: String
    },
    progressBarClass: {
      type: String
    }
  },
  computed: {
    customProps: function() {
      return {
        variant: this.variant,
        vertical: this.vertical ? "vertical" : "",
        size: this.size ? `progress-${this.size}` : "",
        striped: this.striped,
        animated: this.animated,
        precision: this.precision,
        labelValuePercent: this.labelValuePercent,
        labelValue: this.labelValue,
        max: this.max,
        value: this.value,
        progressClass: this.progressClass,
        progressBarClass: this.progressBarClass,
        height: this.height
      };
    }
  },
  render(h) {
    let progressBarArray = this.normalizeSlot("default");
    if (!progressBarArray) {
      progressBarArray = h(NlyProgressBar, {
        props: {
          variant: this.customProps.variant,
          striped: this.customProps.striped,
          animated: this.customProps.animated,
          precision: this.customProps.precision,
          labelValuePercent: this.customProps.labelValuePercent,
          labelValue: this.customProps.labelValue,
          max: this.customProps.max,
          value: this.customProps.value
        },
        class: [this.customProps.progressBarClass]
      });
    }

    return h(
      "div",
      {
        staticClass: ["progress"],
        class: [
          this.customProps.vertical,
          this.customProps.size,
          this.customProps.progressClass
        ],
        style: {
          height: this.customProps.vertical ? null : this.customProps.height
        }
      },
      [progressBarArray]
    );
  }
});
