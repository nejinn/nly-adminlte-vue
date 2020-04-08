import Vue from "../../utils/vue";
import { nlyGetOptionsByKeyEqual } from "../../utils/get-options";
import { bgVariantOptions } from "../../utils/nly-config";

const name = "NlyControlSidebarButton";

export const NlyControlSidebarButton = Vue.extend({
  name: name,
  props: {
    bgVariant: {
      type: String
    }
  },
  computed: {
    customProps: function() {
      return {
        bgVariant: nlyGetOptionsByKeyEqual(bgVariantOptions, this.bgVariant)
      };
    }
  },
  methods: {
    mouseenterFunc() {
      this.$el.classList.remove("elevation-2");
      this.$el.classList.add("elevation-4");
      this.$el.style.opacity = "1";
    },
    mouseleaveFunc() {
      this.$el.classList.remove("elevation-4");
      this.$el.classList.add("elevation-2");
      this.$el.style.opacity = "0.8";
    }
  },
  render(h) {
    return h("div", {
      class: [this.customProps.bgVariant, "elevation-2"],
      style: {
        width: "40px",
        height: "20px",
        borderRadius: "25px",
        marginRight: "10px",
        marginBottom: "10px",
        opacity: "0.8",
        cursor: "pointer"
      },
      on: {
        mouseenter: this.mouseenterFunc,
        mouseleave: this.mouseleaveFunc
      }
    });
  }
});
