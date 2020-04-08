import Vue from "../../utils/vue";
// import { hasClass } from "../../utils/dom";
import "overlayscrollbars/css/OverlayScrollbars.css";
import { OverlayScrollbarsComponent } from "overlayscrollbars-vue";

const name = "NlyControlSidebar";

export const NlyControlSidebar = Vue.extend({
  name: name,
  props: {
    scrollbar: {
      type: Boolean,
      default: true
    }
  },
  // methods: {
  //   getScrollbars() {
  //     if (hasClass(document.body, "layout-fixed")) {
  //       return "h";
  //     }
  //   }
  // },
  computed: {
    customScrollbar: function() {
      return this.scrollbar;
    }
  },
  render(h) {
    const scrollbarArray = h(
      OverlayScrollbarsComponent,
      {
        staticClass: "control-sidebar-content",
        props: {
          options: { scrollbars: { autoHide: "scroll" } }
        }
      },
      this.$slots.default
    );

    const unscrollbarArray = h(
      "div",
      {
        staticClass: "control-sidebar-content"
      },
      this.$slots.default
    );

    const controlSidebarArray = this.customScrollbar
      ? scrollbarArray
      : unscrollbarArray;

    return controlSidebarArray;
  }
});
