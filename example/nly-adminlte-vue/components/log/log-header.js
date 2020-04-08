import Vue from "../../utils/vue";

const name = "NlyLogHeader";

export const NlyLogHeader = Vue.extend({
  name: name,
  props: {
    title: {
      type: String
    },
    titleClass: {
      type: String
    },
    logHeaderClass: {
      type: String
    }
  },
  computed: {
    customTitle() {
      return this.title;
    },
    customTitleClass() {
      return this.titleClass;
    },
    customHeaderClass() {
      return this.logHeaderClass;
    }
  },
  render(h) {
    const headerVnodes = () => {
      if (this.title) {
        return h(
          "div",
          {
            staticClass: "nly-log-header",
            class: [this.customHeaderClass]
          },
          [
            h(
              "div",
              {
                staticClass: "nly-log-header-title",
                class: [this.customTitleClass]
              },
              this.customTitle
            ),
            this.$slots.default
          ]
        );
      } else {
        return h(
          "div",
          {
            staticClass: "nly-log-header"
          },
          this.$slots.default
        );
      }
    };

    return headerVnodes();
  }
});
