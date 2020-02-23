import Vue from "../utils/vue";
import { nlyGetOptionsByKeyEqual } from "../utils/get-options";

const variantOptinos = {
  default: "btn-default",
  primary: "btn-primary",
  secondary: "btn-secondary",
  success: "btn-success",
  info: "btn-info",
  danger: "btn-danger",
  warning: "btn-warning",
  outlineDefault: "btn-outline-default",
  outlinePrimary: "btn-outline-primary",
  outlineSecondary: "btn-outline-secondary",
  outlineSuccess: "btn-outline-success",
  outlineInfo: "btn-outline-info",
  outlineDanger: "btn-outline-danger",
  outlineWarning: "btn-outline-warning"
};

const sizeOptions = {
  lg: "btn-lg",
  sm: "btn-sm",
  xs: "btn-xs"
};

const typeOptions = {
  button: "button",
  submit: "submit"
};

const shapeOptions = {
  roundedFlat: "btn-flat",
  roundedPill: "rounded-pill",
  roundedCircle: "rounded-circle",
  roundedLg: "rounded-lg",
  roundedSm: "rounded-sm"
};

const gradientOptions = {
  primary: "bg-gradient-primary",
  secondary: "bg-gradient-secondary",
  success: "bg-gradient-success",
  info: "bg-gradient-info",
  danger: "bg-gradient-danger",
  warning: "bg-gradient-warning"
};

export var NlyButtonMixins = Vue.extend({
  name: "NlyButtonMixins",
  props: {
    block: {
      type: Boolean,
      default: false
    },
    variant: {
      type: String
    },
    size: {
      type: String
    },
    type: {
      type: String,
      default: "button"
    },
    shape: {
      type: String
    },
    disabled: {
      type: Boolean
    },
    gradient: {
      type: String
    },
    pressed: {
      type: Boolean
    },
    buttonClass: {
      type: String
    }
  },
  computed: {
    customBlock: function() {
      return this.block ? "btn-block" : "";
    },
    customVariant: function() {
      return nlyGetOptionsByKeyEqual(variantOptinos, this.variant);
    },
    customSize: function() {
      return nlyGetOptionsByKeyEqual(sizeOptions, this.size);
    },
    customType: function() {
      return nlyGetOptionsByKeyEqual(typeOptions, this.type);
    },
    customShape: function() {
      return nlyGetOptionsByKeyEqual(shapeOptions, this.shape);
    },
    customGradient: function() {
      return nlyGetOptionsByKeyEqual(gradientOptions, this.gradient);
    },
    customDisabled: function() {
      return this.disabled ? "disabled" : "";
    },
    customPressed: function() {
      return this.pressed ? "active" : "";
    },
    customButtonClass: function() {
      return this.buttonClass;
    }
  }
});
