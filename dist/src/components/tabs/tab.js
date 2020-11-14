import Vue from "../../utils/vue";
import idMixin from "../../mixins/id";
import normalizeSlotMixin from "../../mixins/normalize-slot";
import NlyToastTransition from "../../utils/nly-toast-transition";

// @vue/component
export const NlyTab = /*#__PURE__*/ Vue.extend({
  name: "NlyTab",
  mixins: [idMixin, normalizeSlotMixin],
  inject: {
    nlyaTabls: {
      default: () => ({})
    }
  },
  props: {
    active: {
      type: Boolean,
      default: false
    },
    tag: {
      type: String,
      default: "div"
    },
    buttonId: {
      type: String
      // default: ''
    },
    title: {
      type: String,
      default: ""
    },
    titleItemClass: {
      // Sniffed by tabs.js and added to nav 'li.nav-item'
      type: [String, Array, Object]
      // default: null
    },
    titleLinkClass: {
      // Sniffed by tabs.js and added to nav 'a.nav-link'
      type: [String, Array, Object]
      // default: null
    },
    titleLinkAttributes: {
      type: Object
      // default: null
    },
    disabled: {
      type: Boolean,
      default: false
    },
    noBody: {
      type: Boolean,
      default: false
    },
    lazy: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      localActive: this.active && !this.disabled,
      show: false
    };
  },
  computed: {
    tabClasses() {
      return [
        {
          active: this.localActive,
          disabled: this.disabled,
          "card-body": this.nlyaTabls.card && !this.noBody
        },
        // Apply <b-tabs> `activeTabClass` styles when this tab is active
        this.localActive ? this.nlyaTabls.activeTabClass : null
      ];
    },
    controlledBy() {
      return this.buttonId || this.safeId("__Nly_tab_button__");
    },
    computedNoFade() {
      return !(this.nlyaTabls.fade || false);
    },
    computedLazy() {
      return this.nlyaTabls.lazy || this.lazy;
    },
    _isTab() {
      // For parent sniffing of child
      return true;
    }
  },
  watch: {
    localActive(newVal) {
      // Make 'active' prop work with `.sync` modifier
      this.$emit("update:active", newVal);
    },
    active(newVal, oldVal) {
      if (newVal !== oldVal) {
        if (newVal) {
          // If activated post mount
          this.activate();
        } else {
          /* istanbul ignore next */
          if (!this.deactivate()) {
            // Tab couldn't be deactivated, so we reset the synced active prop
            // Deactivation will fail if no other tabs to activate
            this.$emit("update:active", this.localActive);
          }
        }
      }
    },
    disabled(newVal, oldVal) {
      if (newVal !== oldVal) {
        if (newVal && this.localActive && this.nlyaTabls.firstTab) {
          this.localActive = false;
          this.nlyaTabls.firstTab();
        }
      }
    }
  },
  mounted() {
    // Inform b-tabs of our presence
    this.registerTab();
    // Initially show on mount if active and not disabled
    this.show = this.localActive;
  },
  updated() {
    // Force the tab button content to update (since slots are not reactive)
    // Only done if we have a title slot, as the title prop is reactive
    if (this.hasNormalizedSlot("title") && this.nlyaTabls.updateButton) {
      this.nlyaTabls.updateButton(this);
    }
  },
  destroyed() {
    // inform b-tabs of our departure
    this.unregisterTab();
  },
  methods: {
    // Private methods
    registerTab() {
      // Inform `b-tabs` of our presence
      this.nlyaTabls.registerTab && this.nlyaTabls.registerTab(this);
    },
    unregisterTab() {
      // Inform `b-tabs` of our departure
      this.nlyaTabls.unregisterTab && this.nlyaTabls.unregisterTab(this);
    },
    // Public methods
    activate() {
      if (this.nlyaTabls.activateTab && !this.disabled) {
        return this.nlyaTabls.activateTab(this);
      } else {
        // Not inside a <b-tabs> component or tab is disabled
        return false;
      }
    },
    deactivate() {
      if (this.nlyaTabls.deactivateTab && this.localActive) {
        return this.nlyaTabls.deactivateTab(this);
      } else {
        // Not inside a <b-tabs> component or not active to begin with
        return false;
      }
    }
  },
  render(h) {
    const content = h(
      this.tag,
      {
        ref: "panel",
        staticClass: "tab-pane",
        class: this.tabClasses,
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: this.localActive,
            expression: "localActive"
          }
        ],
        attrs: {
          role: "tabpanel",
          id: this.safeId(),
          "aria-hidden": this.localActive ? "false" : "true",
          "aria-labelledby": this.controlledBy || null
        }
      },
      // Render content lazily if requested
      [
        this.localActive || !this.computedLazy
          ? this.normalizeSlot("default")
          : h()
      ]
    );
    return h(
      NlyToastTransition,
      { props: { mode: "out-in", noFade: this.computedNoFade } },
      [content]
    );
  }
});
