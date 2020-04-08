import Vue from "../../utils/vue";

// Mixins
import hasListenerMixin from "../../mixins/has-listener";
import idMixin from "../../mixins/id";
import normalizeSlotMixin from "../../mixins/normalize-slot";

// Table helper Mixins
import itemsMixin from "./plugin/mixin-items";
import captionMixin from "./plugin/mixin-caption";
import colgroupMixin from "./plugin/mixin-colgroup";
import stackedMixin from "./plugin/mixin-stacked";
import theadMixin from "./plugin/mixin-thead";
import tfootMixin from "./plugin/mixin-tfoot";
import tbodyMixin from "./plugin/mixin-tbody";

// Main table renderer mixin
import tableRendererMixin from "./plugin/mixin-table-renderer";

// @vue/component
const name = "NlyTableLite";
export const NlyTableLite = Vue.extend({
  name: name,
  // Order of mixins is important!
  // They are merged from first to last, followed by this component.
  mixins: [
    // Required mixins
    hasListenerMixin,
    idMixin,
    normalizeSlotMixin,
    itemsMixin,
    tableRendererMixin,
    stackedMixin,
    theadMixin,
    tfootMixin,
    tbodyMixin,
    // Features Mixins
    // These are pretty lightweight, and are useful for lightweight tables
    captionMixin,
    colgroupMixin
  ]
  // render function provided by table-renderer mixin
});
