import Vue from "./vue";
import identity from "./identity";
import { concat } from "./array";
import { removeNode, select } from "./dom";
import { isBrowser } from "./env";
import { isFunction, isString } from "./inspect";
import { HTMLElement } from "./safe-types";
import normalizeSlotMixin from "../mixins/normalize-slot";

const NlyTransporterTargetSingle = Vue.extend({
  abstract: true,
  name: "NlyTransporterTargetSingle",
  props: {
    nodes: {
      type: [Array, Function]
    }
  },
  data: vm => {
    return {
      updatedNodes: vm.nodes
    };
  },
  destroyed() {
    removeNode(this.$el);
  },
  render(h) {
    let nodes = isFunction(this.updatedNodes)
      ? this.updatedNodes({})
      : this.updatedNodes;
    nodes = concat(nodes).filter(Boolean);
    if (nodes && nodes.length > 0 && !nodes[0].text) {
      return nodes[0];
    } else {
      return h();
    }
  }
});

export const NlyTransporterSingle = Vue.extend({
  name: "NlyTransporterSingle",
  mixins: [normalizeSlotMixin],
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    container: {
      type: [String, HTMLElement],
      default: "body"
    },
    tag: {
      type: String,
      default: "div"
    }
  },
  watch: {
    disabled: {
      immediate: true,
      handler(disabled) {
        disabled ? this.unmountTarget() : this.$nextTick(this.mountTarget);
      }
    }
  },
  created() {
    this._nlya_defaultFn = null;
    this._nlya_target = null;
  },
  beforeMount() {
    this.mountTarget();
  },
  updated() {
    this.updateTarget();
  },
  beforeDestroy() {
    this.unmountTarget();
    this._nlya_defaultFn = null;
  },
  methods: {
    getContainer() {
      if (isBrowser) {
        const container = this.container;
        return isString(container) ? select(container) : container;
      } else {
        return null;
      }
    },
    mountTarget() {
      if (!this._nlya_target) {
        const container = this.getContainer();
        if (container) {
          const el = document.createElement("div");
          container.appendChild(el);
          this._nlya_target = new NlyTransporterTargetSingle({
            el,
            parent: this,
            propsData: {
              nodes: concat(this.normalizeSlot("default"))
            }
          });
        }
      }
    },
    // Update the content of the target
    updateTarget() {
      if (isBrowser && this._nlya_target) {
        const defaultFn = this.$scopedSlots.default;
        if (!this.disabled) {
          if (defaultFn && this._nlya_defaultFn !== defaultFn) {
            this._nlya_target.updatedNodes = defaultFn;
          } else if (!defaultFn) {
            this._nlya_target.updatedNodes = this.$slots.default;
          }
        }
        this._nlya_defaultFn = defaultFn;
      }
    },
    // Unmount the target
    unmountTarget() {
      if (this._nlya_target) {
        this._nlya_target.$destroy();
        this._nlya_target = null;
      }
    }
  },
  render(h) {
    if (this.disabled) {
      const nodes = concat(this.normalizeSlot("default")).filter(identity);
      if (nodes.length > 0 && !nodes[0].text) {
        return nodes[0];
      }
    }
    return h();
  }
});
