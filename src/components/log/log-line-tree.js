import Vue from "../../utils/vue";
import listenOnRootMixin from "../../mixins/listen-on-root";
import { NlyCollapseNoclass } from "../collapse/collapse-noclass";
import idMIxins from "../../mixins/id";
import { NlyLogLine } from "./log-line";
import { NlyLink } from "../link/link";

const EVENT_TOGGLE = "nly::toggle::collapse";

const EVENT_STATE = "nly::collapse::state";

const EVENT_STATE_SYNC = "nly::collapse::sync::state";

const name = "NlyLogLineTree";

export const NlyLogLineTree = Vue.extend({
  name: name,
  model: {
    prop: "visible",
    event: "input"
  },
  mixins: [listenOnRootMixin, idMIxins],
  data() {
    return {
      toggleState: this.visible
    };
  },
  props: {
    duration: {
      type: String
    },
    durationClass: {
      type: String
    },
    line: {
      type: String
    },
    lineClass: {
      type: String
    },
    text: {
      type: String
    },
    textClass: {
      type: String
    },
    title: {
      type: String
    },
    titleClass: {
      type: String
    },
    icon: {
      type: String,
      default: "nlyfont nly-icon-arrow-bottom"
    },
    iconClass: {
      type: String
    },
    visible: {
      type: Boolean,
      default: false
    },
    logLineClass: {
      type: String
    },
    highLight: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    customLogLineProps() {
      return {
        duration: this.duration,
        durationClass: this.durationClass,
        line: this.line,
        lineClass: this.lineClass,
        text: this.text,
        textClass: this.textClass,
        title: this.title,
        titleClass: this.titleClass,
        icon: this.icon,
        iconClass: this.iconClass,
        logLineClass: this.logLineClass,
        highLight: this.highLight
      };
    },
    customVisible() {
      return this.visible;
    }
  },
  created() {
    // 监听root 事件，获取初始toggleState值
    this.listenOnRoot(EVENT_STATE, this.handleStateEvt);
    this.listenOnRoot(EVENT_STATE_SYNC, this.handleStateEvt);
  },
  methods: {
    onClick(evt) {
      this.$emit("click", evt);
      if (!evt.defaultPrevented) {
        this.$root.$emit(EVENT_TOGGLE, this.safeId());
      }
    },
    handleStateEvt(id, state) {
      if (id === this.safeId()) {
        this.toggleState = state;
      }
    }
  },
  render(h) {
    const treeVnodes = h(
      NlyCollapseNoclass,
      {
        attrs: {
          id: this.safeId()
        },
        style: {
          display: this.customVisible ? "block" : "none"
        }
      },
      this.$slots.default
    );

    const logLineVnodes = h(
      NlyLink,
      {
        staticClass: "tree",
        on: {
          click: this.onClick
        }
      },
      [
        h(NlyLogLine, {
          props: this.customLogLineProps
        })
      ]
    );
    return h(
      "div",
      {
        staticClass: "nly-log-line-tree",
        class: this.toggleState ? "open" : "collapsed",
        style: { cursor: "pointer" }
      },
      [logLineVnodes, treeVnodes]
    );
  }
});
