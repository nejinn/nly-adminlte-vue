import Vue from "../../utils/vue";

// Mixins
import hasListenerMixin from "../../mixins/has-listener";
import idMixin from "../../mixins/id";
import normalizeSlotMixin from "../../mixins/normalize-slot";

// Table helper Mixins
import itemsMixin from "./plugin/mixin-items";
import stackedMixin from "./plugin/mixin-stacked";
import filteringMixin from "./plugin/mixin-filtering";
import sortingMixin from "./plugin/mixin-sorting";
import paginationMixin from "./plugin/mixin-pagination";
import captionMixin from "./plugin/mixin-caption";
import colgroupMixin from "./plugin/mixin-colgroup";
import theadMixin from "./plugin/mixin-thead";
import tfootMixin from "./plugin/mixin-tfoot";
import tbodyMixin from "./plugin/mixin-tbody";
import emptyMixin from "./plugin/mixin-empty";
import topRowMixin from "./plugin/mixin-top-row";
import bottomRowMixin from "./plugin/mixin-bottom-row";
import busyMixin from "./plugin/mixin-busy";
import selectableMixin from "./plugin/mixin-selectable";
import providerMixin from "./plugin/mixin-provider";

// table 渲染mixins
import tableRendererMixin from "./plugin/mixin-table-renderer";

const name = "NlyTable";

export const NlyTable = Vue.extend({
  name: name,
  // Order of mixins is important!
  // They are merged from first to last, followed by this component.
  mixins: [
    // Required Mixins
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
    stackedMixin,
    filteringMixin,
    sortingMixin,
    paginationMixin,
    captionMixin,
    colgroupMixin,
    selectableMixin,
    emptyMixin,
    topRowMixin,
    bottomRowMixin,
    busyMixin,
    providerMixin
  ]
  // render function provided by table-renderer mixin
});
