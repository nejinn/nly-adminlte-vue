import Vue from "../../utils/vue";
import { nlyGetOptionsByKeyEqual } from "../../utils/get-options";
import {
  switchVariantOptions,
  switchSizeOptions
} from "../../utils/nly-config";
import { nlySwitchId } from "../../utils/mixin-id";

const name = "NlySwitch";

export const NlySwitch = Vue.extend({
  name: name,
  model: {
    prop: "checked",
    event: "change"
  },
  props: {
    size: {
      type: String
    },
    flat: {
      type: Boolean,
      default: false
    },
    offVariant: {
      type: String
    },
    onVariant: {
      type: String
    },
    switchClass: {
      type: String
    },
    inputClass: {
      type: String
    },
    labelClass: {
      type: String
    },
    id: {
      type: String
    },
    tag: {
      type: String,
      default: "div"
    },
    disabled: {
      type: Boolean,
      default: false
    },
    checked: {
      type: [Boolean, String, Number]
    }
  },
  computed: {
    customProps: function() {
      return {
        size: nlyGetOptionsByKeyEqual(switchSizeOptions, this.size),
        flat: this.flat ? "custom-switch-flat" : "custom-switch",
        offVariant: nlyGetOptionsByKeyEqual(
          switchVariantOptions.off,
          this.offVariant
        ),
        onVariant: nlyGetOptionsByKeyEqual(
          switchVariantOptions.on,
          this.onVariant
        ),
        switchClass: this.switchClass,
        inputClass: this.inputClass,
        labelClass: this.labelClass,
        id: nlySwitchId(this.id)
          ? nlySwitchId(this.id)
          : nlySwitchId(this._uid),
        tag: this.tag,
        disabled: this.disabled ? "disabled" : this.disabled
      };
    }
  },
  methods: {
    change(event) {
      this.$emit("change", event.target.checked);
    }
  },
  render(h) {
    return h(
      this.customProps.tag,
      {
        staticClass: "custom-control",
        class: [
          this.customProps.flat,
          this.customProps.size,
          this.customProps.offVariant,
          this.customProps.onVariant,
          this.customProps.switchClass
        ]
      },
      [
        h("input", {
          attrs: {
            type: "checkbox",
            id: this.customProps.id,
            disabled: this.customProps.disabled
          },
          staticClass: "custom-control-input",
          class: this.customProps.inputClass,
          on: { change: this.change },
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: this.checked,
              expression: "checked"
            }
          ],
          domProps: {
            value: this.checked ? true : null,
            checked: this.checked
          }
        }),
        h(
          "label",
          {
            staticClass: "custom-control-label",
            class: this.customProps.labelClass,
            attrs: {
              for: this.customProps.id
            }
          },
          this.$slots.default
        )
      ]
    );
  }
});
