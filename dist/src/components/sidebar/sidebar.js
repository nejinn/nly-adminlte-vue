import Vue from "../../utils/vue";
import "overlayscrollbars/css/OverlayScrollbars.css";
import { OverlayScrollbarsComponent } from "overlayscrollbars-vue";

const name = "NlySidebar";

export const NlySidebar = Vue.extend({
  name: name,
  props: {
    scrollbar: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    customScrollbar: function() {
      return this.scrollbar;
    }
  },
  render(h) {
    const scrollbarArray = h(
      OverlayScrollbarsComponent,
      {
        staticClass: "sidebar",
        props: {
          options: { scrollbars: { autoHide: "scroll" } }
        }
      },
      this.$slots.default
    );

    const unscrollbarArray = h(
      "div",
      {
        staticClass: "sidebar"
      },
      this.$slots.default
    );

    const controlSidebarArray = this.customScrollbar
      ? scrollbarArray
      : unscrollbarArray;

    return controlSidebarArray;
  }
});
