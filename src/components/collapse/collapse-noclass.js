import Vue from "../../utils/vue";
import idMixin from "../../mixins/id";
import listenOnRootMixin from "../../mixins/listen-on-root";
import normalizeSlotMixin from "../../mixins/normalize-slot";
import { isBrowser } from "../../utils/env";
import { NlyCollapseNoclassTransition } from "../../utils/collapse-noclass-transition";
import {
  addClass,
  hasClass,
  removeClass,
  closest,
  matches,
  getCS,
  eventOn,
  eventOff
} from "../../utils/dom";

// Events we emit on $root
const EVENT_STATE = "nly::collapse::state";
const EVENT_ACCORDION = "nly::collapse::accordion";
// Private event we emit on `$root` to ensure the toggle state is
// always synced. It gets emitted even if the state has not changed!
// This event is NOT to be documented as people should not be using it
const EVENT_STATE_SYNC = "nly::collapse::sync::state";
// Events we listen to on `$root`
const EVENT_TOGGLE = "nlya::toggle::collapse";
const EVENT_STATE_REQUEST = "nly::request::collapse::state";

// Event listener options
const EventOptions = { passive: true, capture: false };

const name = "NlyCollapseNoclass";
export const NlyCollapseNoclass = Vue.extend({
  name: name,
  mixins: [idMixin, listenOnRootMixin, normalizeSlotMixin],
  model: {
    prop: "visible",
    event: "input"
  },
  props: {
    isNav: {
      type: Boolean,
      default: false
    },
    accordion: {
      type: String,
      default: null
    },
    visible: {
      type: Boolean,
      default: false
    },
    tag: {
      type: String,
      default: "div"
    },
    appear: {
      type: Boolean,
      default: false
    },
    collapseClass: {
      type: String
    }
  },
  data() {
    return {
      show: this.visible,
      transitioning: false
    };
  },
  computed: {
    customCollapseClass: function() {
      return this.collapseClass;
    }
  },
  watch: {
    visible(newVal) {
      if (newVal !== this.show) {
        this.show = newVal;
      }
    },
    show(newVal, oldVal) {
      if (newVal !== oldVal) {
        this.emitState();
      }
    }
  },
  created() {
    this.show = this.visible;
  },
  mounted() {
    this.show = this.visible;
    // Listen for toggle events to open/close us
    this.listenOnRoot(EVENT_TOGGLE, this.handleToggleEvt);
    // Listen to other collapses for accordion events
    this.listenOnRoot(EVENT_ACCORDION, this.handleAccordionEvt);
    if (this.isNav) {
      // Set up handlers
      this.setWindowEvents(true);
      this.handleResize();
    }
    this.$nextTick(() => {
      this.emitState();
    });
    // Listen for "Sync state" requests from `v-nly-toggle`
    this.listenOnRoot(EVENT_STATE_REQUEST, id => {
      if (id === this.safeId()) {
        this.$nextTick(this.emitSync);
      }
    });
  },
  updated() {
    // Emit a private event every time this component updates to ensure
    // the toggle button is in sync with the collapse's state
    // It is emitted regardless if the visible state changes
    this.emitSync();
  },
  deactivated() /* istanbul ignore next */ {
    if (this.isNav) {
      this.setWindowEvents(false);
    }
  },
  activated() /* istanbul ignore next */ {
    if (this.isNav) {
      this.setWindowEvents(true);
    }
    this.emitSync();
  },
  beforeDestroy() {
    // Trigger state emit if needed
    this.show = false;
    if (this.isNav && isBrowser) {
      this.setWindowEvents(false);
    }
  },
  methods: {
    setWindowEvents(on) {
      const method = on ? eventOn : eventOff;
      method(window, "resize", this.handleResize, EventOptions);
      method(window, "orientationchange", this.handleResize, EventOptions);
    },
    toggle() {
      this.show = !this.show;
    },
    // eslint-disable-next-line no-unused-vars
    onEnter(el) {
      this.transitioning = true;
      // This should be moved out so we can add cancellable events
      this.$emit("show");
    },
    // eslint-disable-next-line no-unused-vars
    onAfterEnter(el) {
      this.transitioning = false;
      this.$emit("shown");
    },
    // eslint-disable-next-line no-unused-vars
    onLeave(el) {
      this.transitioning = true;
      // This should be moved out so we can add cancellable events
      this.$emit("hide");
    },
    // eslint-disable-next-line no-unused-vars
    onAfterLeave(el) {
      this.transitioning = false;
      this.$emit("hidden");
    },
    emitState() {
      this.$emit("input", this.show);
      // Let `v-nly-toggle` know the state of this collapse
      this.$root.$emit(EVENT_STATE, this.safeId(), this.show);
      if (this.accordion && this.show) {
        // Tell the other collapses in this accordion to close
        this.$root.$emit(EVENT_ACCORDION, this.safeId(), this.accordion);
      }
    },
    emitSync() {
      // Emit a private event every time this component updates to ensure
      // the toggle button is in sync with the collapse's state
      // It is emitted regardless if the visible state changes
      this.$root.$emit(EVENT_STATE_SYNC, this.safeId(), this.show);
    },
    checkDisplayBlock() {
      // Check to see if the collapse has `display: block !important` set
      // We can't set `display: none` directly on `this.$el`, as it would
      // trigger a new transition to start (or cancel a current one)
      const restore = hasClass(this.$el, "show");
      removeClass(this.$el, "show");
      const isBlock = getCS(this.$el).display === "block";
      if (restore) {
        addClass(this.$el, "show");
      }
      return isBlock;
    },
    clickHandler(evt) {
      // If we are in a nav/navbar, close the collapse when non-disabled link clicked
      const el = evt.target;
      if (!this.isNav || !el || getCS(this.$el).display !== "block") {
        /* istanbul ignore next: can't test getComputedStyle in JSDOM */
        return;
      }
      if (
        matches(el, ".nav-link,.dropdown-item") ||
        closest(".nav-link,.dropdown-item", el)
      ) {
        if (!this.checkDisplayBlock()) {
          // Only close the collapse if it is not forced to be `display: block !important`
          this.show = false;
        }
      }
    },
    handleToggleEvt(target) {
      if (target !== this.safeId()) {
        return;
      }
      this.toggle();
    },
    handleAccordionEvt(openedId, accordion) {
      if (!this.accordion || accordion !== this.accordion) {
        return;
      }
      if (openedId === this.safeId()) {
        // Open this collapse if not shown
        if (!this.show) {
          this.toggle();
        }
      } else {
        // Close this collapse if shown
        if (this.show) {
          this.toggle();
        }
      }
    },
    handleResize() {
      // Handler for orientation/resize to set collapsed state in nav/navbar
      this.show = getCS(this.$el).display === "block";
    }
  },
  render(h) {
    const scope = {
      visible: this.show,
      close: () => (this.show = false)
    };
    const content = h(
      this.tag,
      {
        directives: [{ name: "show", value: this.show }],
        attrs: { id: this.safeId() },
        on: { click: this.clickHandler }
      },
      [this.normalizeSlot("default", scope)]
    );
    return h(
      NlyCollapseNoclassTransition,
      {
        on: {
          enter: this.onEnter,
          afterEnter: this.onAfterEnter,
          leave: this.onLeave,
          afterLeave: this.onAfterLeave
        }
      },
      [content]
    );
  }
});
