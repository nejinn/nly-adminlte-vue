import Vue from "../../utils/vue";
import { NlyToastTransition } from "../../utils/nly-toast-transition";
import { toFloat } from "../../utils/number";
import normalizeSlotMixin from "../../mixins/normalize-slot";
import { NlySpinner } from "../spinner/spinner";

const positionCover = { top: 0, left: 0, bottom: 0, right: 0 };

const name = "NlyOverlay";

export const NlyOverlay = Vue.extend({
  name: name,
  mixins: [normalizeSlotMixin],
  props: {
    sidebar: {
      type: Boolean,
      default: false
    },
    custom: {
      type: Boolean,
      default: false
    },
    dark: {
      type: Boolean,
      default: false
    },
    show: {
      type: Boolean,
      default: false
    },
    variant: {
      type: String,
      default: "light"
    },
    bgColor: {
      type: String
    },
    opacity: {
      type: [Number, String],
      default: 0.85,
      validator(value) {
        const number = toFloat(value, 0);
        return number >= 0 && number <= 1;
      }
    },
    blur: {
      type: String,
      default: "2px"
    },
    rounded: {
      type: [Boolean, String],
      default: false
    },
    noCenter: {
      type: Boolean,
      default: false
    },
    noFade: {
      type: Boolean,
      default: false
    },
    spinnerType: {
      type: String,
      default: "border"
    },
    spinnerVariant: {
      type: String
      // default: null
    },
    spinnerSmall: {
      type: Boolean,
      default: false
    },
    overlayTag: {
      type: String,
      default: "div"
    },
    wrapTag: {
      type: String,
      default: "div"
    },
    noWrap: {
      type: Boolean,
      default: false
    },
    fixed: {
      type: Boolean,
      default: false
    },
    zIndex: {
      type: [Number, String],
      default: 10
    }
  },
  computed: {
    computedRounded() {
      const rounded = this.rounded;
      return rounded === true || rounded === ""
        ? "rounded"
        : !rounded
        ? ""
        : `rounded-${rounded}`;
    },
    computedVariant() {
      return this.variant && !this.bgColor ? `bg-${this.variant}` : "";
    },
    overlayScope() {
      return {
        spinnerType: this.spinnerType || null,
        spinnerVariant: this.spinnerVariant || null,
        spinnerSmall: this.spinnerSmall
      };
    }
  },
  methods: {
    defaultOverlayFn({ spinnerType, spinnerVariant, spinnerSmall }) {
      return this.$createElement(NlySpinner, {
        props: {
          type: spinnerType,
          variant: spinnerVariant,
          small: spinnerSmall
        }
      });
    }
  },
  render(h) {
    let $overlay = h();
    if (this.show) {
      const scope = this.overlayScope;
      const $background = h("div", {
        staticClass: "position-absolute",
        class: [this.computedVariant, this.computedRounded],
        style: {
          ...positionCover,
          opacity: this.opacity,
          backgroundColor: this.bgColor || null,
          backdropFilter: this.blur ? `blur(${this.blur})` : null
        }
      });
      const $content = h(
        "div",
        {
          staticClass: "position-absolute",
          style: this.noCenter
            ? { ...positionCover }
            : {
                top: "50%",
                left: "50%",
                transform: "translateX(-50%) translateY(-50%)"
              }
        },
        [this.normalizeSlot("overlay", scope) || this.defaultOverlayFn(scope)]
      );
      $overlay = h(
        this.overlayTag,
        {
          key: "overlay",
          staticClass: "nly-overlay",
          class: {
            "position-absolute": !this.noWrap || (this.noWrap && !this.fixed),
            "position-fixed": this.noWrap && this.fixed
          },
          style: { ...positionCover, zIndex: this.zIndex || 10 },
          on: { click: evt => this.$emit("click", evt) }
        },
        [$background, $content]
      );
    }
    $overlay = h(
      NlyToastTransition,
      {
        props: {
          noFade: this.noFade,
          appear: true
        },
        on: {
          "after-enter": () => this.$emit("shown"),
          "after-leave": () => this.$emit("hidden")
        }
      },
      [$overlay]
    );

    if (this.noWrap) {
      return $overlay;
    }

    if (this.sidebar) {
      return h(
        this.wrapTag,
        {
          staticClass: "nly-overlay",
          attrs: {
            id: "sidebar-overlay"
          }
        },
        [$overlay]
      );
    } else if (this.custom) {
      return h(
        "div",
        {
          staticClass: "overlay",
          class: this.dark ? "dark" : ""
        },
        this.$slots.default
      );
    } else {
      return h(
        this.wrapTag,
        {
          staticClass: "nly-overlay-wrap position-relative",
          attrs: { "aria-busy": this.show ? "true" : null }
        },
        this.noWrap ? [$overlay] : [this.normalizeSlot("default"), $overlay]
      );
    }
  }
});
