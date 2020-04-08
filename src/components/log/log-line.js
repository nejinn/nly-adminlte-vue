import Vue from "../../utils/vue";

const name = "NlyLogLine";

export const NlyLogLine = Vue.extend({
  name: name,
  props: {
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
    }
  },
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
  render(h) {
    const durationVnodes = () => {
      if (this.customDuration) {
        return h(
          "span",
          {
            staticClass: "duration",
            class: [this.customDurationClass]
          },
          this.customDuration
        );
      }
    };

    const lineVnodes = () => {
      if (this.customLine || this.customLine === 0) {
        return h(
          "span",
          {
            staticClass: "index",
            class: [this.customLineClass]
          },
          this.customLine
        );
      }
    };

    const textVnodes = () => {
      if (this.customText) {
        return h(
          "span",
          {
            staticClass: "text",
            class: [this.customTextClass]
          },
          this.customText
        );
      } else {
        return h(
          "span",
          {
            class: [this.customTextClass]
          },
          this.$slots.default
        );
      }
    };

    const titleVnodes = () => {
      if (this.customTitle) {
        return h(
          "span",
          {
            staticClass: "title",
            class: [this.customTitleClass]
          },
          this.customTitle
        );
      }
    };

    const iconVnode = () => {
      if (this.customIcon) {
        return h("span", {
          staticClass: "left",
          class: [this.customIcon, this.customIconClass]
        });
      }
    };

    return h(
      "div",
      {
        staticClass: "nly-log-line",
        class: [this.customLogLineClass, this.customHighLight]
      },
      [iconVnode(), lineVnodes(), durationVnodes(), titleVnodes(), textVnodes()]
    );
  }
});
