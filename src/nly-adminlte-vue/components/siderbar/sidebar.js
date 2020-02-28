import Vue from "../../utils/vue";
import { hasClass } from "../../utils/dom";
import "overlayscrollbars/css/OverlayScrollbars.css";
import { OverlayScrollbarsComponent } from "overlayscrollbars-vue";

const name = "NlySidebar";

export const NlySidebar = Vue.extend({
  name: name,
  mounted() {
    console.log(document.body.className);
    const aaa = hasClass(document.body, "layout-fixed");
    console.log(aaa);
  },
  methods: {
    getScrollbars() {
      if (hasClass(document.body, "layout-fixed")) {
        return "h";
      }
    }
  },
  render(h) {
    return h(
      OverlayScrollbarsComponent,
      {
        staticClass: "sidebar",
        props: {
          options: { scrollbars: { autoHide: "scroll" } }
        }
      },
      this.$slots.default
    );
  }
});
