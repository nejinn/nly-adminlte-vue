import { nlyPluginFactory } from "../../utils/plugins";
import { NlyTimeline } from "./timeline";
import { NlyTimelineLabel } from "./timeline-label";
import { NlyTimelineContent } from "./timeline-content";
import { NlyTimelineItem } from "./timeline-item";
import { NlyTimelineHeader } from "./timeline-header";
import { NlyTimelineBody } from "./timeline-body";
import { NlyTimelineFooter } from "./timeline-footer";

const timelinePlugin = nlyPluginFactory({
  components: {
    NlyTimeline,
    NlyTimelineLabel,
    NlyTimelineContent,
    NlyTimelineItem,
    NlyTimelineHeader,
    NlyTimelineBody,
    NlyTimelineFooter
  }
});

export {
  timelinePlugin,
  NlyTimeline,
  NlyTimelineLabel,
  NlyTimelineContent,
  NlyTimelineItem,
  NlyTimelineHeader,
  NlyTimelineBody,
  NlyTimelineFooter
};
