import Vue from "../../utils/vue";

import { NlySearchSelectItem } from "./plugin/search-select-item";
import { NlySearchSelectMultipleContainer } from "./plugin/search-select-multiple-container";
import { NlySearchSelectSingleContainer } from "./plugin/search-select-single-container";
// import { NlySearchSelectMultipleItem } from "./plugin/search-select-multiple-item";
// import { NlySearchSelectSingleItem } from "./plugin/search-select-single-item";

const name = "NlySearchSelect";

export const NlySearchSelect = Vue.extend({
  name: name,
  props: {
    id: {
      type: String,
      default: null
    }
  }
});
