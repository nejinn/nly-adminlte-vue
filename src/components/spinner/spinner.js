import Vue from "../../utils/vue";
import { textVariantOptions } from "../../utils/nly-config";
import { nlyGetOptionsByKeyEqual } from "../../utils/get-options";

const name = "NlySpinner";

export const NlySpinner = Vue.extend({
  name: name,
  props: {
    variant: {
      type: String
    },
    type: {
      type: String,
      default: "border"
    },
    sm: {
      type: Boolean,
      default: false
    },
    tag: {
      type: String,
      default: "span"
    },
    label: {
      type: String
    },
    role: {
      type: String,
      default: "status"
    },
    spinnerClass: {
      type: String
    },
    labelClass: {
      String
    }
  },
  computed: {
    customProps: function() {
      return {
        variant: nlyGetOptionsByKeyEqual(textVariantOptions, this.variant),
        sm: this.sm ? `spinner-${this.type}-sm` : "",
        type: `spinner-${this.type}`,
        tag: this.tag,
        label: this.label,
        role: this.role,
        spinnerClass: this.spinnerClass,
        labelClass: this.labelClass
      };
    }
  },
  render(h) {
    const spinnerArray = () => {
      if (this.customProps.label) {
        return h(
          this.customProps.tag,
          {
            class: [
              this.customProps.variant,
              this.customProps.type,
              this.customProps.sm,
              this.customProps.spinnerClass
            ],
            attrs: {
              role: this.customProps.role,
              ariaHidden: "true"
            }
          },
          [
            h(
              "span",
              {
                staticClass: "sr-only",
                class: this.customProps.labelClass
              },
              this.customProps.label
            )
          ]
        );
      } else {
        return h(this.customProps.tag, {
          class: [
            this.customProps.variant,
            this.customProps.type,
            this.customProps.sm
          ],
          attrs: {
            role: this.customProps.role,
            ariaHidden: "fasle"
          }
        });
      }
    };

    return spinnerArray();
  }
});
