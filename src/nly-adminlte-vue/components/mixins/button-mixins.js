import Vue from "../../utils/vue";
import { nlyGetOptionsByKeyEqual } from "../../utils/get-options";
import {
  btnVariantOptinos,
  btnSizeOptions,
  btnTypeOptions,
  btnShapeOptions,
  btnGradientOptions
} from "../../utils/nly-config";

const name = "NlyButtonMixins";

export var NlyButtonMixins = Vue.extend({
  name: name,
  props: {
    block: {
      type: Boolean,
      default: false
    },
    variant: {
      type: String,
      default: "default"
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
      type: Boolean,
      default: false
    },
    gradient: {
      type: String
    },
    pressed: {
      type: Boolean,
      default: false
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
      return nlyGetOptionsByKeyEqual(btnVariantOptinos, this.variant);
    },
    customSize: function() {
      return nlyGetOptionsByKeyEqual(btnSizeOptions, this.size);
    },
    customType: function() {
      return nlyGetOptionsByKeyEqual(btnTypeOptions, this.type);
    },
    customShape: function() {
      return nlyGetOptionsByKeyEqual(btnShapeOptions, this.shape);
    },
    customGradient: function() {
      return nlyGetOptionsByKeyEqual(btnGradientOptions, this.gradient);
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
