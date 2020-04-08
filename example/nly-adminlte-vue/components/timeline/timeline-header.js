import Vue from "../../utils/vue";

const name = "NlyTimelineHeader";

export const NlyTimelineHeader = Vue.extend({
  name: name,
  props: {
    tag: {
      type: String,
      default: "h3"
    },
    timelineHeaderClass: {
      type: String
    }
  },
  computed: {
    customProps: function() {
      return {
        tag: this.tag,
        timelineHeaderClass: this.timelineHeaderClass
      };
    }
  },
  render(h) {
    return h(
      this.customProps.tag,
      {
        staticClass: "timeline-header",
        class: [this.customProps.timelineHeaderClass]
      },
      this.$slots.default
    );
  }
});
