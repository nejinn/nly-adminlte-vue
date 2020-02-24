export default {
  inheritAttrs: false,
  props: {
    duration: {
      type: [Number, Object],
      default: 300
    },
    delay: {
      type: [Number, Object],
      default: 0
    },
    group: Boolean,
    tag: {
      type: String,
      default: "span"
    },
    origin: {
      type: String,
      default: ""
    },
    styles: {
      type: Object,
      default: () => {
        return {
          animationFillMode: "both",
          animationTimingFunction: "ease-out"
        };
      }
    }
  },
  computed: {
    componentType() {
      return this.group ? "transition-group" : "transition";
    },
    hooks() {
      return {
        ...this.$listeners,
        beforeEnter: this.beforeEnter,
        afterEnter: el => {
          this.cleanUpStyles(el);
          this.$emit("after-enter", el);
        },
        beforeLeave: this.beforeLeave,
        leave: this.leave,
        afterLeave: el => {
          this.cleanUpStyles(el);
          this.$emit("after-leave", el);
        }
      };
    }
  },
  methods: {
    beforeEnter(el) {
      let enterDuration = this.duration.enter
        ? this.duration.enter
        : this.duration;
      el.style.animationDuration = `${enterDuration}ms`;

      let enterDelay = this.delay.enter ? this.delay.enter : this.delay;
      el.style.animationDelay = `${enterDelay}ms`;

      this.setStyles(el);
      this.$emit("before-enter", el);
    },
    cleanUpStyles(el) {
      Object.keys(this.styles).forEach(key => {
        const styleValue = this.styles[key];
        if (styleValue) {
          el.style[key] = "";
        }
      });
      el.style.animationDuration = "";
      el.style.animationDelay = "";
    },
    beforeLeave(el) {
      let leaveDuration = this.duration.leave
        ? this.duration.leave
        : this.duration;
      el.style.animationDuration = `${leaveDuration}ms`;

      let leaveDelay = this.delay.leave ? this.delay.leave : this.delay;
      el.style.animationDelay = `${leaveDelay}ms`;

      this.setStyles(el);
      this.$emit("before-leave", el);
    },
    leave(el, done) {
      this.setAbsolutePosition(el);
      this.$emit("leave", el, done);
    },
    setStyles(el) {
      this.setTransformOrigin(el);
      Object.keys(this.styles).forEach(key => {
        const styleValue = this.styles[key];
        if (styleValue) {
          el.style[key] = styleValue;
        }
      });
    },
    setAbsolutePosition(el) {
      if (this.group) {
        el.style.position = "absolute";
      }
      return this;
    },
    setTransformOrigin(el) {
      if (this.origin) {
        el.style.transformOrigin = this.origin;
      }
      return this;
    }
  }
};
