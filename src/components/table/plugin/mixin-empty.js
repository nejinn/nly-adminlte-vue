import { htmlOrText } from "../../../utils/html";
import { isFunction } from "../../../utils/inspect";
import { NlyTr } from "../tr";
import { NlyTd } from "../td";

export default {
  props: {
    showEmpty: {
      type: Boolean,
      default: false
    },
    emptyText: {
      type: String,
      default: "There are no records to show"
    },
    emptyHtml: {
      type: String
    },
    emptyFilteredText: {
      type: String,
      default: "There are no records matching your request"
    },
    emptyFilteredHtml: {
      type: String
    }
  },
  methods: {
    renderEmpty() {
      const h = this.$createElement;
      const items = this.computedItems;
      let $empty;

      if (
        this.showEmpty &&
        (!items || items.length === 0) &&
        !(this.computedBusy && this.hasNormalizedSlot("table-busy"))
      ) {
        $empty = this.normalizeSlot(
          this.isFiltered ? "emptyfiltered" : "empty",
          {
            emptyFilteredHtml: this.emptyFilteredHtml,
            emptyFilteredText: this.emptyFilteredText,
            emptyHtml: this.emptyHtml,
            emptyText: this.emptyText,
            fields: this.computedFields,
            // Not sure why this is included, as it will always be an empty array
            items: this.computedItems
          }
        );
        if (!$empty) {
          $empty = h("div", {
            class: ["text-center", "my-2"],
            domProps: this.isFiltered
              ? htmlOrText(this.emptyFilteredHtml, this.emptyFilteredText)
              : htmlOrText(this.emptyHtml, this.emptyText)
          });
        }
        $empty = h(
          NlyTd,
          { props: { colspan: this.computedFields.length || null } },
          [
            h("div", { attrs: { role: "alert", "aria-live": "polite" } }, [
              $empty
            ])
          ]
        );
        $empty = h(
          NlyTr,
          {
            key: this.isFiltered ? "nly-empty-filtered-row" : "nly-empty-row",
            staticClass: "nly-table-empty-row",
            class: [
              isFunction(this.tbodyTrClass)
                ? this.tbodyTrClass(null, "row-empty")
                : this.tbodyTrClass
            ],
            attrs: isFunction(this.tbodyTrAttr)
              ? this.tbodyTrAttr(null, "row-empty")
              : this.tbodyTrAttr
          },
          [$empty]
        );
      }

      return $empty || h();
    }
  }
};
