import Vue from "../../utils/vue";
import { mergeData } from "vue-functional-data-merge";
import { getComponentConfig } from "../../utils/config";
import { isEvent } from "../../utils/inspect";
import { hasNormalizedSlot, normalizeSlot } from "../../utils/normalize-slot";

const NAME = "NlyButtonClose";

const props = {
  content: {
    type: String,
    default: () => getComponentConfig(NAME, "content")
  },
  disabled: {
    type: Boolean,
    default: false
  },
  ariaLabel: {
    type: String,
    default: () => getComponentConfig(NAME, "ariaLabel")
  },
  textVariant: {
    type: String,
    default: () => getComponentConfig(NAME, "textVariant")
  }
};

export const NlyButtonClose = Vue.extend({
  name: NAME,
  functional: true,
  props,
  // eslint-disable-next-line no-unused-vars
  render(h, { props, data, listeners, slots, scopedSlots }) {
    const $slots = slots();
    const $scopedSlots = scopedSlots || {};

    const componentData = {
      staticClass: "close",
      class: {
        [`text-${props.textVariant}`]: props.textVariant
      },
      attrs: {
        type: "button",
        disabled: props.disabled,
        "aria-label": props.ariaLabel ? String(props.ariaLabel) : null
      },
      on: {
        click(evt) {
          if (props.disabled && isEvent(evt)) {
            evt.stopPropagation();
            evt.preventDefault();
          }
        }
      }
    };
    if (!hasNormalizedSlot("default", $scopedSlots, $slots)) {
      componentData.domProps = { innerHTML: props.content };
    }
    return h(
      "button",
      mergeData(data, componentData),
      normalizeSlot("default", {}, $scopedSlots, $slots)
    );
  }
});
