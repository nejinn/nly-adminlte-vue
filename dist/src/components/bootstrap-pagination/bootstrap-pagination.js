import Vue from "../../utils/vue";
import { NlyEvent } from "../../utils/nly-event.class";
import { getComponentConfig } from "../../utils/config";
import { attemptFocus, isVisible } from "../../utils/dom";
import { isUndefinedOrNull } from "../../utils/inspect";
import { mathCeil, mathMax } from "../../utils/math";
import { toInteger } from "../../utils/number";
import paginationMixin from "../../mixins/pagination";

// --- Constants ---

const DEFAULT_PER_PAGE = 20;
const DEFAULT_TOTAL_ROWS = 0;

const name = "NlyBootstrapPagination";

const props = {
  size: {
    type: String,
    default: () => getComponentConfig(name, "size")
  },
  perPage: {
    type: [Number, String],
    default: DEFAULT_PER_PAGE
  },
  totalRows: {
    type: [Number, String],
    default: DEFAULT_TOTAL_ROWS
  },
  ariaControls: {
    type: String
  }
};

const sanitizePerPage = val => mathMax(toInteger(val) || DEFAULT_PER_PAGE, 1);

const sanitizeTotalRows = val =>
  mathMax(toInteger(val) || DEFAULT_TOTAL_ROWS, 0);

export const NlyBootstrapPagination = Vue.extend({
  name: name,
  mixins: [paginationMixin],
  props,
  computed: {
    numberOfPages() {
      const result = mathCeil(
        sanitizeTotalRows(this.totalRows) / sanitizePerPage(this.perPage)
      );
      return result < 1 ? 1 : result;
    },
    pageSizeNumberOfPages() {
      return {
        perPage: sanitizePerPage(this.perPage),
        totalRows: sanitizeTotalRows(this.totalRows),
        numberOfPages: this.numberOfPages
      };
    }
  },
  watch: {
    pageSizeNumberOfPages(newVal, oldVal) {
      if (!isUndefinedOrNull(oldVal)) {
        if (
          newVal.perPage !== oldVal.perPage &&
          newVal.totalRows === oldVal.totalRows
        ) {
          this.currentPage = 1;
        } else if (
          newVal.numberOfPages !== oldVal.numberOfPages &&
          this.currentPage > newVal.numberOfPages
        ) {
          this.currentPage = 1;
        }
      }
      this.localNumberOfPages = newVal.numberOfPages;
    }
  },
  created() {
    this.localNumberOfPages = this.numberOfPages;
    const currentPage = toInteger(this.value, 0);
    if (currentPage > 0) {
      this.currentPage = currentPage;
    } else {
      this.$nextTick(() => {
        this.currentPage = 0;
      });
    }
  },
  mounted() {
    this.localNumberOfPages = this.numberOfPages;
  },
  methods: {
    onClick(evt, pageNumber) {
      if (pageNumber === this.currentPage) {
        return;
      }

      const { target } = evt;
      const clickEvt = new NlyEvent("page-click", {
        cancelable: true,
        vueTarget: this,
        target
      });
      this.$emit(clickEvt.type, clickEvt, pageNumber);
      if (clickEvt.defaultPrevented) {
        return;
      }
      this.currentPage = pageNumber;
      this.$emit("change", this.currentPage);

      this.$nextTick(() => {
        if (isVisible(target) && this.$el.contains(target)) {
          attemptFocus(target);
        } else {
          this.focusCurrent();
        }
      });
    },
    makePage(pageNum) {
      return pageNum;
    },
    /* istanbul ignore next */
    linkProps() {
      return {};
    }
  }
});
