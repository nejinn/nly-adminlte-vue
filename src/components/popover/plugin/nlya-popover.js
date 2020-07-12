// Popover "Class" (Built as a renderless Vue instance)
// Inherits from NlyaTooltip
//
// Handles trigger events, etc.
// Instantiates template on demand

import Vue from "../../../utils/vue";
import { NlyaTooltip } from "../../tooltip/plugin/nlya-tooltip";
import { NlyaPopoverTemplate } from "./nlya-popover-template";

const NAME = "NlyaPopover";

// @vue/component
export const NlyaPopover = /*#__PURE__*/ Vue.extend({
  name: NAME,
  extends: NlyaTooltip,
  computed: {
    // Overwrites NlyaTooltip
    templateType() {
      return "popover";
    }
  },
  methods: {
    getTemplate() {
      // Overwrites NlyaTooltip
      return NlyaPopoverTemplate;
    }
  }
});
