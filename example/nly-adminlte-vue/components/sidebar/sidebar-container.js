import Vue from "../../utils/vue";
import { nlyGetOptionsByKeyEqual } from "../../utils/get-options";
import { breakPointOptions } from "../../utils/nly-config";
import {
  sidebarElevationOptions,
  sidebarContainerVariantOpitons
} from "../../utils/nly-config";

const name = "NlySidebarContainer";

export const NlySidebarContainer = Vue.extend({
  name: name,
  props: {
    variant: {
      type: String,
      default: "darkPrimary"
    },
    hover: {
      type: Boolean,
      default: true
    },
    elevation: {
      type: String,
      default: "xl"
    },
    //边侧栏最小化
    sideMini: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    breakPointNumber() {
      return nlyGetOptionsByKeyEqual(breakPointOptions, this.breakPoint);
    },
    sideMiniClass: function() {
      return this.sideMini ? "sidebar-mini" : "";
    },
    customVariant() {
      return nlyGetOptionsByKeyEqual(
        sidebarContainerVariantOpitons,
        this.variant
      );
    },
    customHover() {
      return this.hover ? "" : "sidebar-no-expand";
    },
    customElevation() {
      return nlyGetOptionsByKeyEqual(sidebarElevationOptions, this.elevation);
    }
  },
  methods: {
    setBodyCollapseClassName() {
      if (this.sideMini) {
        const bodyWidth = document.body.clientWidth;
        const bodyClassName = document.body.className;

        if (bodyWidth < 992) {
          if (bodyClassName.indexOf("sidebar-collapse") == -1) {
            document.body.classList.add("sidebar-collapse");
          }
        } else {
          if (bodyClassName.indexOf("sidebar-open") !== -1) {
            document.body.classList.remove("sidebar-open");
          }
        }
      }
    },
    setBodyClassName(newval, oldval) {
      if (newval != oldval) {
        if (newval && oldval) {
          document.body.classList.add(newval);
          document.body.classList.remove(oldval);
        } else if (newval && oldval == "") {
          document.body.classList.add(newval);
        } else if (newval == "" && oldval) {
          document.body.classList.remove(oldval);
        }
      }
    }
  },
  mounted() {
    window.addEventListener(
      "resize",
      () => this.setBodyCollapseClassName(),
      false
    );
  },
  created() {
    const createdBodyClassList = [this.sideMiniClass];
    createdBodyClassList.forEach(item => {
      if (item) {
        document.body.classList.add(item);
      }
    });
    this.setBodyCollapseClassName();
  },
  beforeDestroy() {
    window.removeEventListener(
      "resize",
      this.setBodyCollapseClassName(),
      false
    );
  },
  watch: {
    sideMiniClass: function(newval, oldval) {
      this.setBodyClassName(newval, oldval);
    }
  },
  render(h) {
    return h(
      "aside",
      {
        staticClass: "main-sidebar",
        class: [this.customVariant, this.customElevation, this.customHover]
      },
      this.$slots.default
    );
  }
});
