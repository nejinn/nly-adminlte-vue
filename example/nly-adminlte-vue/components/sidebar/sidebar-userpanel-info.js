import Vue from "../../utils/vue";
import { NlyLink, propsFactory as linkPropsFactory } from "../link/link";
// import { mergeData } from "vue-functional-data-merge";

export const props = linkPropsFactory();

const name = "NlySidebarUserpanelInfo";

export const NlySidebarUserpanelInfo = Vue.extend({
  name: name,
  props: {
    infoClass: {
      type: String
    },
    ...props
  },
  computed: {
    customInfoClass: function() {
      return this.infoClass;
    },
    computedProps() {
      return { ...this.$props };
    }
  },
  render(h) {
    return h(
      "div",
      {
        staticClass: "info"
      },
      [
        h(
          NlyLink,
          {
            staticClass: "d-block",
            class: this.customInfoClass,
            props: this.computedProps
          },
          this.$slots.default
        )
      ]
    );
  }
});
