import Vue from "../../utils/vue";
import { mergeData } from "vue-functional-data-merge";
import { hasNormalizedSlot, normalizeSlot } from "../../utils/normalize-slot";
import { htmlOrText } from "../../utils/html";
import { NlyInputGroupAppend } from "../input-group/input-group-append";
import { NlyInputGroupPrepend } from "./input-group-prepend";
import { NlyInputGroupText } from "./input-group-text";
import { nlyGetOptionInclusion } from "../../utils/get-options";
import { formValidOptions } from "../../utils/nly-config";
import { NlyFormText } from "../form/form-text";
import { getComponentConfig } from "../../utils/config";
import { NlyFormFeedback } from "../form/form-feedback";

const name = "NlyInputGroup";

export const props = {
  id: {
    type: String
  },
  size: {
    type: String,
    default: null
  },
  prepend: {
    type: String
  },
  prependHtml: {
    type: String
  },
  append: {
    type: String
  },
  appendHtml: {
    type: String
  },
  tag: {
    type: String,
    default: "div"
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
  valid: {
    type: String,
    validator: valid => nlyGetOptionInclusion(formValidOptions, valid)
  },
  textTag: {
    type: String,
    default: "small"
  },
  textVariant: {
    type: String,
    default: () => getComponentConfig("NlyFormText", "textVariant")
  },
  textInline: {
    type: Boolean,
    default: false
  }
};

const validClass = props => {
  return props.valid === "valid"
    ? "is-valid"
    : props.valid === "invalid"
    ? "is-invalid"
    : props.valid === "warning"
    ? "is-warning"
    : null;
};

const sizeClass = props => {
  return `input-group-${props.size}`;
};

export const NlyInputGroup = Vue.extend({
  name: name,
  props,
  functional: true,
  render(h, { props, data, slots, scopedSlots }) {
    const { prepend, prependHtml, append, appendHtml } = props;
    const $scopedSlots = scopedSlots || {};
    const $slots = slots();
    const slotScope = {};

    let $prepend = h();
    const hasPrependSlot = hasNormalizedSlot("prepend", $scopedSlots, $slots);
    if (hasPrependSlot || prepend || prependHtml) {
      $prepend = h(NlyInputGroupPrepend, [
        hasPrependSlot
          ? normalizeSlot("prepend", slotScope, $scopedSlots, $slots)
          : h(NlyInputGroupText, { domProps: htmlOrText(prependHtml, prepend) })
      ]);
    }

    let $append = h();
    const hasAppendSlot = hasNormalizedSlot("append", $scopedSlots, $slots);
    if (hasAppendSlot || append || appendHtml) {
      $append = h(NlyInputGroupAppend, [
        hasAppendSlot
          ? normalizeSlot("append", slotScope, $scopedSlots, $slots)
          : h(NlyInputGroupText, { domProps: htmlOrText(appendHtml, append) })
      ]);
    }

    let $description = h();
    if (props.description) {
      $description = h(
        NlyFormText,
        {
          props: {
            tag: props.textTag,
            inline: props.textInline,
            textVariant: props.textVariant
          }
        },
        props.description
      );
    }

    let $invalidFeedback = h();
    if (props.invalidFeedback) {
      $invalidFeedback = h(NlyFormFeedback, {
        props: {
          state: "invalid",
          text: props.invalidFeedback
        }
      });
    }

    let $validFeedback = h();
    if (props.validFeedback) {
      $validFeedback = h(NlyFormFeedback, {
        props: {
          state: "valid",
          text: props.validFeedback
        }
      });
    }

    let $warningFeedback = h();
    if (props.warningFeedback) {
      $warningFeedback = h(NlyFormFeedback, {
        props: {
          state: "warning",
          text: props.warningFeedback
        }
      });
    }

    if (props.invalidFeedback || props.validFeedback || props.warningFeedback) {
      return h("div", [
        h(
          props.tag,
          mergeData(data, {
            staticClass: "input-group",
            class: [sizeClass(props), validClass(props)],
            attrs: {
              id: props.id || null,
              role: "group"
            }
          }),
          [
            $prepend,
            normalizeSlot("default", slotScope, $scopedSlots, $slots),
            $append
          ]
        ),
        $invalidFeedback,
        $validFeedback,
        $warningFeedback,
        $description
      ]);
    }

    return h(
      props.tag,
      mergeData(data, {
        staticClass: "input-group",
        class: [sizeClass(props), validClass(props)],
        attrs: {
          id: props.id || null,
          role: "group"
        }
      }),
      [
        $prepend,
        normalizeSlot("default", slotScope, $scopedSlots, $slots),
        $append,
        $invalidFeedback,
        $validFeedback,
        $warningFeedback,
        $description
      ]
    );
  }
});
