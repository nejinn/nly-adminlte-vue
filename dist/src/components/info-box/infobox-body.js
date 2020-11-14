import Vue from "../../utils/vue";
import { bgVariantOptions, bgGradientOptions } from "../../utils/nly-config";
import { nlyGetOptionsByKeyEqual } from "../../utils/get-options";
import { toCurrency } from "../../utils/number";
import { NlyInfoboxText } from "./infobox-text";
import { NlyInfoboxNumber } from "./infobox-number";
import { NlyProgress } from "../progress/progress";
import { NlyProgressDescription } from "../progress/progress-description";
import { mergeData } from "vue-functional-data-merge";

export const props = {
  bgVariant: {
    type: String
  },
  bgGradientVariant: {
    type: String
  },
  infoboxBodyClass: {
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
  },
  tag: {
    type: String,
    default: "div"
  }
};

const customClass = props => {
  const bgVariant = () =>
    nlyGetOptionsByKeyEqual(bgVariantOptions, props.bgVariant);
  const bgGradientVariant = () =>
    nlyGetOptionsByKeyEqual(bgGradientOptions, props.bgGradientVariant);

  const infoboxBodyClass = props.infoboxBodyClass;

  return [bgVariant(), bgGradientVariant(), infoboxBodyClass];
};

const name = "NlyInfoboxBody";

export const NlyInfoboxBody = Vue.extend({
  name: name,
  props,
  functional: true,
  computed: {
    customProps: function() {
      return {
        bgVariant: nlyGetOptionsByKeyEqual(bgVariantOptions, this.bgVariant),
        bgGradientVariant: nlyGetOptionsByKeyEqual(
          bgGradientOptions,
          this.bgGradientVariant
        ),
        infoboxBodyClass: this.infoboxBodyClass,
        text: this.text,
        textClass: this.textClass,
        number: this.number ? toCurrency(this.number) : "",
        numberClass: this.numberClass,
        progressValue: this.progressValue,
        progressDescription: this.progressDescription
      };
    }
  },
  render(h, { props, data, children }) {
    const textArray = () => {
      if (props.text) {
        return h(NlyInfoboxText, {
          props: {
            textClass: props.textClass,
            text: props.text
          }
        });
      }
    };

    const numberArray = () => {
      if (props.number) {
        return h(NlyInfoboxNumber, {
          props: {
            numberClass: props.numberClass,
            number: props.number
          }
        });
      }
    };

    const progressArray = () => {
      if (props.progressValue) {
        return h(NlyProgress, {
          props: {
            value: props.progressValue
          }
        });
      }
    };

    const progressDescriptionArray = () => {
      if (props.progressDescription) {
        return h(NlyProgressDescription, {
          props: {
            text: props.progressDescription
          }
        });
      }
    };
    return h(
      props.tag,
      mergeData(data, {
        staticClass: "info-box-content",
        class: customClass(props)
      }),
      [
        textArray(),
        numberArray(),
        progressArray(),
        progressDescriptionArray(),
        children
      ]
    );
  }
});
