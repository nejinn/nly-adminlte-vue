import Vue from "../../../utils/vue";

const name = "NlyCollapseFooter";

export const NlyCollapseFooter = Vue.extend({
  name: name,
  props: {
    size: {
      type: String
    }
  },
  computed: {
    footerFontSizeClass: function() {
      return this.size == "sm" ? "text-sm" : this.size == "lg" ? "text-lg" : "";
    }
  },
  render(h) {
    return h(
      "footer",
      {
        staticClass: "main-footer",
        class: [this.footerFontSizeClass]
      },
      this.$slots.default
    );
  }
});
