import Vue from "../../utils/vue";
import listenOnRootMixin from "../../mixins/listen-on-root";
import normalizeSlotMixin from "../../mixins/normalize-slot";

const name = "NlyNavbarToggle";

const EVENT_TOGGLE = "nlya::toggle::collapse";

const EVENT_STATE = "nlya::collapse::state";

const EVENT_STATE_SYNC = "nlya::collapse::sync::state";

export const NlyNavbarToggle = Vue.extend({
  name: name,
  mixins: [listenOnRootMixin, normalizeSlotMixin],
  data() {
    return {
      toggleState: false
    };
  },
  props: {
    label: {
      type: String,
      default: "Nly Toggle navigation"
    },
    target: {
      type: String,
      required: true
    },
    navbarClass: {
      type: String
    }
  },
  computed: {
    customLabel: function() {
      return this.label;
    },
    customTarget: function() {
      return this.target;
    },
    customNavbarClass: function() {
      return this.navbarClass;
    }
  },
  created() {
    this.listenOnRoot(EVENT_STATE, this.handleStateEvt);
    this.listenOnRoot(EVENT_STATE_SYNC, this.handleStateEvt);
  },
  methods: {
    onClick(evt) {
      this.$emit("click", evt);
      if (!evt.defaultPrevented) {
        this.$root.$emit(EVENT_TOGGLE, this.customTarget);
      }
    },
    handleStateEvt(id, state) {
      if (id === this.customTarget) {
        this.toggleState = state;
      }
    }
  },
  render(h) {
    return h(
      "button",
      {
        class: ["navbar-toggler", this.customNavbarClass],
        attrs: {
          type: "button",
          "aria-label": this.customLabel,
          "aria-controls": this.customTarget,
          "aria-expanded": this.toggleState ? "true" : "false",
          "data-target": `#${this.customTarget}`
        },
        on: { click: this.onClick }
      },
      [
        this.normalizeSlot("default") ||
          h("span", { class: ["navbar-toggler-icon"] })
      ]
    );
  }
});
