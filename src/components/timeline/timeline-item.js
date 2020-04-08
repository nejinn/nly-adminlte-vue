{
  /* <div class="timeline-item">
  <span class="time">
    <i class="fas fa-clock"></i> 12:05
  </span>
  <h3 class="timeline-header">
    <a href="#">Support Team</a> sent you an email
  </h3>

  <div class="timeline-body">
    Etsy doostang zoodles disqus groupon greplin oooj voxy zoodles, weebly ning
    heekya handango imeem plugg dopplr jibjab, movity jajah plickers sifteo
    edmodo ifttt zimbra. Babblely odeo kaboodle quora plaxo ideeli hulu weebly
    balihoo...
  </div>
  <div class="timeline-footer">
    <a class="btn btn-primary btn-sm">Read more</a>
    <a class="btn btn-danger btn-sm">Delete</a>
  </div>
</div>; */
}

import Vue from "../../utils/vue";
import { NlyIcon } from "../icon";

const name = "NlyTimelineItem";

export const NlyTimelineItem = Vue.extend({
  name: name,
  props: {
    time: {
      type: String
    },
    timeIcon: {
      type: String
    },
    timeTag: {
      type: String,
      default: "span"
    },
    itemTag: {
      type: String,
      default: "div"
    },
    itemClass: {
      type: String
    },
    timeClass: {
      type: String
    }
  },
  computed: {
    customProps: function() {
      return {
        time: this.time,
        timeIcon: this.timeIcon,
        timeTag: this.timeTag,
        timeClass: this.timeClass,
        itemClass: this.itemClass,
        itemTag: this.itemTag
      };
    }
  },
  render(h) {
    const timeArray = () => {
      if (this.customProps.time) {
        if (this.customProps.timeIcon) {
          return h(
            this.customProps.timeTag,
            {
              staticClass: ["time"],
              class: [this.customProps.timeClass]
            },
            [
              h(NlyIcon, {
                props: {
                  icon: this.customProps.timeIcon
                }
              }),
              this.customProps.time
            ]
          );
        } else {
          return h(
            this.customProps.timeTag,
            {
              staticClass: ["time"],
              class: [this.customProps.timeClass]
            },
            this.customProps.time
          );
        }
      }
    };

    return h(
      this.customProps.itemTag,
      {
        staticClass: ["timeline-item"],
        class: [this.customProps.itemClass]
      },
      [timeArray(), this.$slots.default]
    );
  }
});
