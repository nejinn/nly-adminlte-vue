import Vue from "../../../utils/vue";

import { PortalTarget } from "portal-vue";

// const OPTIONS_OBJECT_DEPRECATED_MSG =
//   'Setting prop "options" to an object is deprecated. Use the array format instead.';

export const NlySearchSelectPortal = Vue.extend({
  name: "NlySearchSelectPortal",
  props: {
    name: {
      type: String,
      required: true
    },
    id: {
      type: String
    }
  },
  data() {
    return {
      localValue: this.value,
      portalName: this.name
    };
  },
  beforeMount() {
    this.portalName = this.name;
  },
  destroyed() {
    if (this.$el && this.$el.parentNode) {
      this.$el.parentNode.removeChild(this.$el);
    }
  },
  render(h) {
    var self = this;
    return h(PortalTarget, {
      props: {
        tag: "span",
        name: self.portalName
      },
      attrs: {
        id: self.id
      }
    });
  }
});
