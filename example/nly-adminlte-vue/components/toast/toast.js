import Vue from "../../utils/vue";
import { Portal, Wormhole } from "portal-vue";
import NlyToastTransition from "../../utils/nly-toast-transition";
import { NlyEvent } from "../../utils/nly-event.class";
import { getComponentConfig } from "../../utils/config";
import { requestAF, eventOn, eventOff } from "../../utils/dom";
import { toInteger } from "../../utils/number";
import idMixin from "../../mixins/id";
import listenOnRootMixin from "../../mixins/listen-on-root";
import normalizeSlotMixin from "../../mixins/normalize-slot";
import scopedStyleAttrsMixin from "../../mixins/scoped-style-attrs";
import { NlyToaster } from "./toaster";
import { NlyButtonClose } from "../button/button-close";
import { NlyLink } from "../link/link";

const NAME = "NlyToast";

const MIN_DURATION = 1000;

const EVENT_OPTIONS = { passive: true, capture: false };

export const props = {
  id: {
    type: String,
    default: null
  },
  title: {
    type: String,
    default: null
  },
  toaster: {
    type: String,
    default: () => getComponentConfig(NAME, "toaster")
  },
  visible: {
    type: Boolean,
    default: false
  },
  variant: {
    type: String,
    default: () => getComponentConfig(NAME, "variant")
  },
  isStatus: {
    type: Boolean,
    default: false
  },
  appendToast: {
    type: Boolean,
    default: false
  },
  noAutoHide: {
    type: Boolean,
    default: false
  },
  autoHideDelay: {
    type: [Number, String],
    default: () => getComponentConfig(NAME, "autoHideDelay")
  },
  noCloseButton: {
    type: Boolean,
    default: false
  },
  noFade: {
    type: Boolean,
    default: false
  },
  noHoverPause: {
    type: Boolean,
    default: false
  },
  solid: {
    type: Boolean,
    default: false
  },
  toastClass: {
    type: [String, Object, Array],
    default: () => getComponentConfig(NAME, "toastClass")
  },
  headerClass: {
    type: [String, Object, Array],
    default: () => getComponentConfig(NAME, "headerClass")
  },
  bodyClass: {
    type: [String, Object, Array],
    default: () => getComponentConfig(NAME, "bodyClass")
  },
  href: {
    type: String,
    default: null
  },
  to: {
    type: [String, Object],
    default: null
  },
  static: {
    type: Boolean,
    default: false
  }
};

export const NlyToast = Vue.extend({
  name: NAME,
  mixins: [
    idMixin,
    listenOnRootMixin,
    normalizeSlotMixin,
    scopedStyleAttrsMixin
  ],
  inheritAttrs: false,
  model: {
    prop: "visible",
    event: "change"
  },
  props,
  data() {
    return {
      isMounted: false,
      doRender: false,
      localShow: false,
      isTransitioning: false,
      isHiding: false,
      order: 0,
      timer: null,
      dismissStarted: 0,
      resumeDismiss: 0
    };
  },
  computed: {
    bToastClasses() {
      return {
        "nly-toast-solid": this.solid,
        "nly-toast-append": this.appendToast,
        "nly-toast-prepend": !this.appendToast,
        [`nly-toast-${this.variant}`]: this.variant
      };
    },
    slotScope() {
      return {
        hide: this.hide
      };
    },
    computedDuration() {
      return Math.max(toInteger(this.autoHideDelay) || 0, MIN_DURATION);
    },
    computedToaster() {
      return String(this.toaster);
    },
    transitionHandlers() {
      return {
        beforeEnter: this.onBeforeEnter,
        afterEnter: this.onAfterEnter,
        beforeLeave: this.onBeforeLeave,
        afterLeave: this.onAfterLeave
      };
    }
  },
  watch: {
    visible(newVal) {
      newVal ? this.show() : this.hide();
    },
    localShow(newVal) {
      if (newVal !== this.visible) {
        this.$emit("change", newVal);
      }
    },
    // eslint-disable-next-line no-unused-vars
    toaster(newVal) {
      this.$nextTick(this.ensureToaster);
    },
    static(newVal) {
      if (newVal && this.localShow) {
        this.ensureToaster();
      }
    }
  },
  mounted() {
    this.isMounted = true;
    this.$nextTick(() => {
      if (this.visible) {
        requestAF(() => {
          this.show();
        });
      }
    });
    // Listen for global $root show events
    this.listenOnRoot("nly::show::toast", id => {
      if (id === this.safeId()) {
        this.show();
      }
    });
    // Listen for global $root hide events
    this.listenOnRoot("nly::hide::toast", id => {
      if (!id || id === this.safeId()) {
        this.hide();
      }
    });
    this.listenOnRoot("nly::toaster::destroyed", toaster => {
      if (toaster === this.computedToaster) {
        this.hide();
      }
    });
  },
  beforeDestroy() {
    this.clearDismissTimer();
  },
  methods: {
    show() {
      if (!this.localShow) {
        this.ensureToaster();
        const showEvt = this.buildEvent("show");
        this.emitEvent(showEvt);
        this.dismissStarted = this.resumeDismiss = 0;
        this.order = Date.now() * (this.appendToast ? 1 : -1);
        this.isHiding = false;
        this.doRender = true;
        this.$nextTick(() => {
          requestAF(() => {
            this.localShow = true;
          });
        });
      }
    },
    hide() {
      if (this.localShow) {
        const hideEvt = this.buildEvent("hide");
        this.emitEvent(hideEvt);
        this.setHoverHandler(false);
        this.dismissStarted = this.resumeDismiss = 0;
        this.clearDismissTimer();
        this.isHiding = true;
        requestAF(() => {
          this.localShow = false;
        });
      }
    },
    buildEvent(type, opts = {}) {
      return new NlyEvent(type, {
        cancelable: false,
        target: this.$el || null,
        relatedTarget: null,
        ...opts,
        vueTarget: this,
        componentId: this.safeId()
      });
    },
    emitEvent(nlyaEvt) {
      const type = nlyaEvt.type;
      this.$root.$emit(`nly::toast:${type}`, nlyaEvt);
      this.$emit(type, nlyaEvt);
    },
    ensureToaster() {
      if (this.static) {
        return;
      }
      if (!Wormhole.hasTarget(this.computedToaster)) {
        const div = document.createElement("div");
        document.body.appendChild(div);
        const toaster = new NlyToaster({
          parent: this.$root,
          propsData: {
            name: this.computedToaster
          }
        });
        toaster.$mount(div);
      }
    },
    startDismissTimer() {
      this.clearDismissTimer();
      if (!this.noAutoHide) {
        this.timer = setTimeout(
          this.hide,
          this.resumeDismiss || this.computedDuration
        );
        this.dismissStarted = Date.now();
        this.resumeDismiss = 0;
      }
    },
    clearDismissTimer() {
      clearTimeout(this.timer);
      this.timer = null;
    },
    setHoverHandler(on) {
      const method = on ? eventOn : eventOff;
      const el = this.$refs["nly-toast"];
      method(el, "mouseenter", this.onPause, EVENT_OPTIONS);
      method(el, "mouseleave", this.onUnPause, EVENT_OPTIONS);
    },
    // eslint-disable-next-line no-unused-vars
    onPause(evt) {
      if (
        this.noAutoHide ||
        this.noHoverPause ||
        !this.timer ||
        this.resumeDismiss
      ) {
        return;
      }
      const passed = Date.now() - this.dismissStarted;
      if (passed > 0) {
        this.clearDismissTimer();
        this.resumeDismiss = Math.max(
          this.computedDuration - passed,
          MIN_DURATION
        );
      }
    },
    // eslint-disable-next-line no-unused-vars
    onUnPause(evt) {
      if (this.noAutoHide || this.noHoverPause || !this.resumeDismiss) {
        this.resumeDismiss = this.dismissStarted = 0;
        return;
      }
      this.startDismissTimer();
    },
    onLinkClick() {
      this.$nextTick(() => {
        requestAF(() => {
          this.hide();
        });
      });
    },
    onBeforeEnter() {
      this.isTransitioning = true;
    },
    onAfterEnter() {
      this.isTransitioning = false;
      const hiddenEvt = this.buildEvent("shown");
      this.emitEvent(hiddenEvt);
      this.startDismissTimer();
      this.setHoverHandler(true);
    },
    onBeforeLeave() {
      this.isTransitioning = true;
    },
    onAfterLeave() {
      this.isTransitioning = false;
      this.order = 0;
      this.resumeDismiss = this.dismissStarted = 0;
      const hiddenEvt = this.buildEvent("hidden");
      this.emitEvent(hiddenEvt);
      this.doRender = false;
    },
    makeToast(h) {
      const $headerContent = [];
      const $title = this.normalizeSlot("toast-title", this.slotScope);
      if ($title) {
        $headerContent.push($title);
      } else if (this.title) {
        $headerContent.push(h("strong", { staticClass: "mr-2" }, this.title));
      }
      if (!this.noCloseButton) {
        $headerContent.push(
          h(NlyButtonClose, {
            staticClass: "ml-auto mb-1",
            on: {
              // eslint-disable-next-line no-unused-vars
              click: evt => {
                this.hide();
              }
            }
          })
        );
      }
      let $header = h();
      if ($headerContent.length > 0) {
        $header = h(
          "header",
          { staticClass: "toast-header", class: this.headerClass },
          $headerContent
        );
      }
      const isLink = this.href || this.to;
      const $body = h(
        isLink ? NlyLink : "div",
        {
          staticClass: "toast-body",
          class: this.bodyClass,
          props: isLink ? { to: this.to, href: this.href } : {},
          on: isLink ? { click: this.onLinkClick } : {}
        },
        [this.normalizeSlot("default", this.slotScope) || h()]
      );
      const $toast = h(
        "div",
        {
          key: `toast-${this._uid}`,
          ref: "toast",
          staticClass: "toast",
          class: this.toastClass,
          attrs: {
            ...this.$attrs,
            tabindex: "0",
            id: this.safeId()
          }
        },
        [$header, $body]
      );
      return $toast;
    }
  },
  render(h) {
    if (!this.doRender || !this.isMounted) {
      return h();
    }
    const name = `nly-toast-${this._uid}`;
    const scopedStyleAttrs = !this.static ? this.scopedStyleAttrs : {};

    return h(
      Portal,
      {
        props: {
          name: name,
          to: this.computedToaster,
          order: this.order,
          slim: true,
          disabled: this.static
        }
      },
      [
        h(
          "div",
          {
            key: name,
            ref: "nly-toast",
            staticClass: "nly-toast",
            class: this.bToastClasses,
            attrs: {
              ...scopedStyleAttrs,
              id: this.safeId("_toast_outer"),
              role: this.isHiding ? null : this.isStatus ? "status" : "alert",
              "aria-live": this.isHiding
                ? null
                : this.isStatus
                ? "polite"
                : "assertive",
              "aria-atomic": this.isHiding ? null : "true"
            }
          },
          [
            h(
              NlyToastTransition,
              { props: { noFade: this.noFade }, on: this.transitionHandlers },
              [this.localShow ? this.makeToast(h) : h()]
            )
          ]
        )
      ]
    );
  }
});
