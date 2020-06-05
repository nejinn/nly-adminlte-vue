import Vue from "../../utils/vue";
import { mergeData } from "vue-functional-data-merge";

const name = "NlyLogLine";

export const props = {
  duration: {
    type: String
  },
  durationClass: {
    type: String
  },
  line: {
    type: [String, Number]
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
    type: String
  },
  iconClass: {
    type: String
  },
  logLineClass: {
    type: String
  },
  highLight: {
    type: Boolean,
    default: false
  },
  tag: {
    type: String,
    default: "div"
  }
};

export const NlyLogLine = Vue.extend({
  name: name,
  props,
  functional: true,
  computed: {
    customLogLineClass() {
      return this.logLineClass;
    },
    customDuration() {
      return this.duration;
    },
    customDurationClass() {
      return this.durationClass;
    },
    customLine() {
      return this.line;
    },
    customLineClass() {
      return this.lineClass;
    },
    customText() {
      return this.text;
    },
    customTextClass() {
      return this.textClass;
    },
    customTitle() {
      return this.title;
    },
    customTitleClass() {
      return this.titleClass;
    },
    customIcon() {
      return this.icon;
    },
    customIconClass() {
      return this.iconClass;
    },
    customHighLight() {
      return this.highLight ? "highlight" : "";
    }
  },
  render(h, { props, data, children }) {
    const durationVnodes = () => {
      if (props.customDuration) {
        return h(
          "span",
          {
            staticClass: "duration",
            class: [props.durationClass]
          },
          props.duration
        );
      }
    };

    const lineVnodes = () => {
      if (props.line || props.line === 0) {
        return h(
          "span",
          {
            staticClass: "index",
            class: [props.lineClass]
          },
          props.line
        );
      }
    };

    const textVnodes = () => {
      if (props.text) {
        return h(
          "span",
          {
            staticClass: "text",
            class: [props.textClass]
          },
          props.text
        );
      } else {
        return h(
          "span",
          {
            class: [props.textClass]
          },
          children
        );
      }
    };

    const titleVnodes = () => {
      if (props.title) {
        return h(
          "span",
          {
            staticClass: "title",
            class: [props.titleClass]
          },
          props.title
        );
      }
    };

    const iconVnode = () => {
      if (props.icon) {
        return h("span", {
          staticClass: "left",
          class: [props.icon, props.iconClass]
        });
      }
    };

    return h(
      props.tag,
      mergeData(data, {
        staticClass: "nly-log-line",
        class: [props.logLineClass, props.highLight ? "highlight" : ""]
      }),

      [iconVnode(), lineVnodes(), durationVnodes(), titleVnodes(), textVnodes()]
    );
  }
});
