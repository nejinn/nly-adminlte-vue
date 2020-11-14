import Vue from "../../utils/vue";
// import { hasClass } from "../../utils/dom";
import "overlayscrollbars/css/OverlayScrollbars.css";
import { OverlayScrollbarsComponent } from "overlayscrollbars-vue";
import { mergeData } from "vue-functional-data-merge";

const name = "NlyControlSidebarContainer";

export const NlyControlSidebarContainer = Vue.extend({
  name: name,
  functional: true,
  render(h, { data, children }) {
    return h(
      OverlayScrollbarsComponent,
      mergeData(data, {
        staticClass: "control-sidebar-content",
        props: {
          options: { scrollbars: { autoHide: "scroll" } }
        }
      }),
      children
    );
  }
});
