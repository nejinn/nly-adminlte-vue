import Vue from "../../utils/vue";

const name = "NlyTimeline";

export const NlyTimeline = Vue.extend({
  name: name,
  props: {
    inverse: {
      type: Boolean,
      default: false
    },
    tag: {
      type: String,
      default: "div"
    }
  },
  computed: {
    customProps: function() {
      return {
        inverse: this.inverse ? "timeline-inverse" : "",
        tag: this.tag
      };
    }
  },
  render(h) {
    return h(
      this.customProps.tag,
      {
        staticClass: "timeline",
        class: [this.customProps.inverse]
      },
      this.$slots.default
    );
  }
});
