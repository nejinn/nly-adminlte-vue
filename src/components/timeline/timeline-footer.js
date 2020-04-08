import Vue from "../../utils/vue";

const name = "NlyTimelineFooter";

export const NlyTimelineFooter = Vue.extend({
  name: name,
  props: {
    tag: {
      type: String,
      default: "div"
    },
    timelineFooterClass: {
      type: String
    }
  },
  computed: {
    customProps: function() {
      return {
        tag: this.tag,
        timelineFooterClass: this.timelineFooterClass
      };
    }
  },
  render(h) {
    return h(
      this.customProps.tag,
      {
        staticClass: "timeline-footer",
        class: [this.customProps.timelineFooterClass]
      },
      this.$slots.default
    );
  }
});
