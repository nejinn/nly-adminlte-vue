import Vue from "../../../utils/vue";

const name = "NlyContainer";

export const NlyContainer = Vue.extend({
  name: name,
  props: {
    fluid: {
      type: Boolean,
      default: false
    },
    containerClass: {
      type: String
    },
    tag: {
      type: String,
      default: "div"
    }
  },
  computed: {
    customFluid: function() {
      return this.fluid ? "container-fluid" : "container";
    },
    customContainerClass: function() {
      return this.containerClass;
    },
    customTag: function() {
      return this.tag;
    }
  },
  render(h) {
    return h(
      this.customTag,
      {
        class: [this.customFluid, this.customContainerClass]
      },
      this.$slots.default
    );
  }
});
