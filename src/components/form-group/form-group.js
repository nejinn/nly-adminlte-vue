import Vue from "../../utils/vue";
import { nlyGetOptionInclusion } from "../../utils/get-options";
import { formGroupSize } from "../../utils/nly-config";
import formValid from "../../mixins/form/form-valid";
import idMixin from "../../mixins/id";
import formGroupGrid from "../../mixins/form/form-group-grid";
import fromGroupLabelTextAlign from "../../mixins/form/from-label-text-align";
import { NlyFormFeedback } from "../form/form-feedback";

const name = "NlyFormGroup";

export const NlyFormGroup = Vue.extend({
  name: name,
  mixins: [formValid, idMixin, formGroupGrid, fromGroupLabelTextAlign],
  props: {
    labelSize: {
      type: String,
      default: null,
      validator: type => nlyGetOptionInclusion(formGroupSize, type)
    },
    label: {
      type: String
    },
    labelFor: {
      type: String
    },
    labelSrOnly: {
      type: Boolean,
      default: false
    },
    description: {
      type: String
    },
    invalidFeedback: {
      type: String
    },
    validFeedback: {
      type: String
    },
    warningFeedback: {
      type: String
    },
    tooltip: {
      type: Boolean,
      default: false
    },
    feedbackAriaLive: {
      type: String,
      default: "assertive"
    },
    validated: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    customProps() {
      return {
        labelSizeClass: this.labelSize
          ? `col-form-label-${this.labelSize}`
          : null,
        label: this.label,
        labelFor: this.labelFor,
        labelSrOnly: this.labelSrOnly,
        description: this.description,
        invalidFeedback: this.invalidFeedback ? this.invalidFeedback : null,
        validFeedback: this.validFeedback ? this.validFeedback : null,
        warningFeedback: this.warningFeedback ? this.warningFeedback : null,
        tooltip: this.tooltip,
        feedbackAriaLive: this.feedbackAriaLive,
        validated: this.validated ? "was-validated" : null,
        disabled: this.disabled
      };
    },
    customGroupGridPropsClass() {
      const result = [];
      this.customGroupGridProps.forEach(element => {
        if (element !== null) {
          result.push(element);
        }
      });
      return result;
    },
    customGroupLabelTextPropsClass() {
      const result = [];
      this.customGroupLabelTextProps.forEach(element => {
        if (element !== null) {
          result.push(element);
        }
      });
      return result;
    }
  },
  render(h) {
    const labelSrOonlyVnodes = () => {
      if (this.customGroupGridPropslen !== 0) {
        return h(
          "div",
          {
            class: this.customGroupGridPropsClass
          },
          [
            h(
              "label",
              {
                staticClass: "sr-only",
                attrs: {
                  id: this.safeId("__nly__label__"),
                  for: this.customProps.labelFor || null
                }
              },
              [this.customProps.label]
            )
          ]
        );
      } else {
        return h(
          "label",
          {
            staticClass: "sr-only",
            attrs: {
              id: this.safeId("__nly__label__"),
              for: this.customProps.labelFor || null
            }
          },
          this.customProps.label
        );
      }
    };

    const labelVnodes = () => {
      if (this.customProps.labelSrOnly) {
        return labelSrOonlyVnodes();
      } else {
        if (this.customGroupGridPropslen === 0) {
          return h(
            "label",
            {
              staticClass: "d-block",
              class: [
                ...this.customGroupLabelTextPropsClass,
                this.customProps.labelSizeClass
              ],
              attrs: {
                id: this.safeId("__nly__label__"),
                for: this.customProps.labelFor || null
              }
            },
            this.customProps.label
          );
        } else {
          return h(
            "label",
            {
              staticClass: "d-block",
              class: [
                ...this.customGroupLabelTextPropsClass,
                ...this.customGroupGridPropsClass,
                this.customProps.labelSizeClass
              ],
              attrs: {
                id: this.safeId("__nly__label__"),
                for: this.customProps.labelFor || null
              }
            },
            this.customProps.label
          );
        }
      }
    };

    const childVnodes = () => {
      const feedback = {
        invalid: this.customProps.invalidFeedback,
        valid: this.customProps.validFeedback,
        warning: this.customProps.warningFeedback
      };

      const state = ["invalid", "valid", "warning"];

      const result = [this.$slots.default];

      state.forEach(item => {
        if (Object.keys(feedback).indexOf(item) !== -1) {
          if (feedback[item]) {
            result.push(
              h(NlyFormFeedback, {
                props: {
                  tooltip: this.customProps.tooltip,
                  ariaLive: this.customProps.feedbackAriaLive,
                  id: this.safeId(`__nly-form_group_feedback_${item}`),
                  state: item,
                  text: feedback[item]
                }
              })
            );
          }
        }
      });

      result.push(this.$slots["invalid-feedback"]);
      result.push(this.$slots["valid-feedback"]);
      result.push(this.$slots["warning-feedback"]);
      result.push(this.$slots["description"]);

      if (this.customProps.description) {
        result.push(
          h(
            "small",
            {
              attrs: {
                id: this.safeId(`__nly-form_group_description`)
              },
              staticClass: "form-text text-muted"
            },
            this.customProps.description
          )
        );
      }
      return result;
    };

    const formGroupVnodes = () => {
      if (this.customProps.label) {
        if (this.customGroupGridPropslen === 0) {
          return h(
            "div",
            {
              staticClass: "form-group",
              class: [
                this.disabled ? null : this.customProps.validated,
                this.validClass
              ],
              attrs: {
                id: this.safeId(),
                "aria-invalid":
                  this.computedValid === "invalid" ||
                  this.computedValid === "warning"
                    ? true
                    : null,
                role: "group"
              }
            },
            [labelVnodes(), this.$slots.label, h("div", {}, childVnodes())]
          );
        } else {
          return h(
            "div",
            {
              staticClass: "form-group form-row",
              class: [
                this.disabled ? null : this.customProps.validated,
                this.validClass
              ],
              attrs: {
                id: this.safeId(),
                "aria-invalid":
                  this.computedValid === "invalid" ||
                  this.computedValid === "warning"
                    ? true
                    : null,
                role: "group"
              }
            },
            [
              labelVnodes(),
              this.$slots.label,
              h("div", { staticClass: "col" }, childVnodes())
            ]
          );
        }
      } else {
        if (this.customGroupGridPropslen === 0) {
          return h(
            "div",
            {
              staticClass: "form-group",
              class: [
                this.disabled ? null : this.customProps.validated,
                this.validClass
              ],
              attrs: {
                id: this.safeId(),
                "aria-invalid":
                  this.computedValid === "invalid" ||
                  this.computedValid === "warning"
                    ? true
                    : null,
                role: "group"
              }
            },
            [this.$slots.label, h("div", {}, childVnodes())]
          );
        } else {
          return h(
            "div",
            {
              staticClass: "form-group form-row",
              class: [
                this.disabled ? null : this.customProps.validated,
                this.validClass
              ],
              attrs: {
                id: this.safeId(),
                "aria-invalid":
                  this.computedValid === "invalid" ||
                  this.computedValid === "warning"
                    ? true
                    : null,
                role: "group"
              }
            },
            [this.$slots.label, h("div", { staticClass: "col" }, childVnodes())]
          );
        }
      }
    };
    return formGroupVnodes();
  }
});
