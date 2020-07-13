import Vue from "../../utils/vue";
import { PortalTarget, Wormhole } from "portal-vue";
import { getComponentConfig } from "../../utils/config";
import { removeClass, requestAF } from "../../utils/dom";
import { warn } from "../../utils/warn";

const NAME = "NlyToaster";

export const props = {
  name: {
    type: String,
    required: true
  },
  ariaLive: {
    type: String,
    default: () => getComponentConfig(NAME, "ariaLive")
  },
  ariaAtomic: {
    type: String,
    default: () => getComponentConfig(NAME, "ariaAtomic") // Allowed: 'true' or 'false' or null
  },
  role: {
    type: String,
    default: () => getComponentConfig(NAME, "role")
  }
};

export const DefaultTransition = Vue.extend({
  data() {
    return {
      name: "nly-toaster"
    };
  },
  methods: {
    onAfterEnter(el) {
      requestAF(() => {
        removeClass(el, `${this.name}-enter-to`);
      });
    }
  },
  render(h) {
    return h(
      "transition-group",
      {
        props: { tag: "div", name: this.name },
        on: { afterEnter: this.onAfterEnter }
      },
      this.$slots.default
    );
  }
});

export const NlyToaster = Vue.extend({
  name: NAME,
  props,
  data() {
    return {
      doRender: false,
      dead: false,
      staticName: this.name
    };
  },
  beforeMount() {
    this.staticName = this.name;
    if (Wormhole.hasTarget(this.staticName)) {
      warn(
        `A "<portal-target>" with name "${this.name}" already exists in the document.`,
        "NlyToaster"
      );
      this.dead = true;
    } else {
      this.doRender = true;
      this.$once("hook:beforeDestroy", () => {
        this.$root.$emit("nlya::toaster::destroyed", this.staticName);
      });
    }
  },
  destroyed() {
    if (this.$el && this.$el.parentNode) {
      this.$el.parentNode.removeChild(this.$el);
    }
  },
  render(h) {
    let $toaster = h("div", {
      class: ["d-none", { "nly-dead-toaster": this.dead }]
    });
    if (this.doRender) {
      const $target = h(PortalTarget, {
        staticClass: "nly-toaster-slot",
        props: {
          name: this.staticName,
          multiple: true,
          tag: "div",
          slim: false,
          transition: DefaultTransition
        }
      });
      $toaster = h(
        "div",
        {
          staticClass: "nly-toaster",
          class: [this.staticName],
          attrs: {
            id: this.staticName,
            role: this.role || null,
            "aria-live": this.ariaLive,
            "aria-atomic": this.ariaAtomic
          }
        },
        [$target]
      );
    }
    return $toaster;
  }
});
