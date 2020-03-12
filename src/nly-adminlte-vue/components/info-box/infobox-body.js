import Vue from "../../utils/vue";
import { bgVariantOptions, bgGradientOptions } from "../../utils/nly-config";
import { nlyGetOptionsByKeyEqual } from "../../utils/get-options";
import { toCurrency } from "../../utils/number";
import { NlyInfoboxText } from "./infobox-text";
import { NlyInfoboxNumber } from "./infobox-number";
import { NlyProgress } from "../progress/progress";
import { NlyProgressDescription } from "../progress/progress-description";

const name = "NlyInfoboxBody";

export const NlyInfoboxBody = Vue.extend({
  name: name,
  props: {
    bgVariant: {
      type: String
    },
    bgGradientVariant: {
      type: String
    },
    infoBoxBodyClass: {
      type: String
    },
    text: {
      type: String
    },
    textClass: {
      type: String
    },
    number: {
      type: [String, Number]
    },
    numberClass: {
      type: String
    },
    progressValue: {
      type: [String, Number]
    },
    progressDescription: {
      type: String
    }
  },
  computed: {
    customProps: function() {
      return {
        bgVariant: nlyGetOptionsByKeyEqual(bgVariantOptions, this.bgVariant),
        bgGradientVariant: nlyGetOptionsByKeyEqual(
          bgGradientOptions,
          this.bgGradientVariant
        ),
        infoBoxBodyClass: this.infoBoxBodyClass,
        text: this.text,
        textClass: this.textClass,
        number: this.number ? toCurrency(this.number) : "",
        numberClass: this.numberClass,
        progressValue: this.progressValue,
        progressDescription: this.progressDescription
      };
    }
  },
  render(h) {
    const textArray = () => {
      if (this.customProps.text) {
        return h(NlyInfoboxText, {
          props: {
            textClass: this.customProps.textClass,
            text: this.customProps.text
          }
        });
      }
    };

    const numberArray = () => {
      if (this.customProps.number) {
        return h(NlyInfoboxNumber, {
          props: {
            numberClass: this.customProps.numberClass,
            number: this.customProps.number
          }
        });
      }
    };

    const progressArray = () => {
      if (this.customProps.progressValue) {
        return h(NlyProgress, {
          props: {
            value: this.customProps.progressValue
          }
        });
      }
    };

    const progressDescriptionArray = () => {
      if (this.customProps.progressDescription) {
        return h(NlyProgressDescription, {
          props: {
            text: this.customProps.progressDescription
          }
        });
      }
    };
    return h(
      "div",
      {
        staticClass: "info-box-content",
        class: [
          this.customProps.infoBoxBodyClass,
          this.customProps.bgVariant,
          this.customProps.bgGradientVariant
        ]
      },
      [
        textArray(),
        numberArray(),
        progressArray(),
        progressDescriptionArray(),
        this.$slots.default
      ]
    );
  }
});
