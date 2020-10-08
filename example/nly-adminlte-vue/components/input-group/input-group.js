import Vue from "../../utils/vue";
import { mergeData } from "vue-functional-data-merge";
import { hasNormalizedSlot, normalizeSlot } from "../../utils/normalize-slot";
import { htmlOrText } from "../../utils/html";
import { NlyInputGroupAppend } from "../input-group/input-group-append";
import { NlyInputGroupPrepend } from "./input-group-prepend";
import { NlyInputGroupText } from "./input-group-text";

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
  }
};

export const NlyInputGroup = Vue.extend({
  name: name,
  props,
  functional: true,
  render(h, { props, data, slots, scopedSlots }) {
    const { prepend, prependHtml, append, appendHtml, size } = props;
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

    return h(
      props.tag,
      mergeData(data, {
        staticClass: "input-group",
        class: { [`input-group-${size}`]: size },
        attrs: {
          id: props.id || null,
          role: "group"
        }
      }),
      [
        $prepend,
        normalizeSlot("default", slotScope, $scopedSlots, $slots),
        normalizeSlot("date", slotScope, $scopedSlots, $slots),
        $append
      ]
    );
  }
});
