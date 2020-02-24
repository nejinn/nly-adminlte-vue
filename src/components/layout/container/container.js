import Vue from "../../utils/vue";

const name = "NlyContainer";

export const NlyContainer = Vue.extend({
  name: name,
  props: {
    fluid: {
      type: Boolean
    },
    containerClass: {
      type: String
    }
  },
  computed: {
    customFluid: function() {
      return this.fluid ? "container-fluid" : "container";
    },
    customContainerClass: function() {
      return this.containerClass;
    }
  },
  render(h) {
    return h(
      "div",
      {
        class: [this.customFluid, this.customContainerClass]
      },
      this.$slots.default
    );
  }
});
