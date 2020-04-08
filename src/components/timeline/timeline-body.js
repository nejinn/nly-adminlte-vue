import Vue from "../../utils/vue";

const name = "NlyTimelineBody";

export const NlyTimelineBody = Vue.extend({
  name: name,
  props: {
    tag: {
      type: String,
      default: "div"
    },
    timelineBodyClass: {
      type: String
    }
  },
  computed: {
    customProps: function() {
      return {
        tag: this.tag,
        timelineBodyClass: this.timelineBodyClass
      };
    }
  },
  render(h) {
    return h(
      this.customProps.tag,
      {
        staticClass: "timeline-body",
        class: [this.customProps.timelineBodyClass]
      },
      this.$slots.default
    );
  }
});
