import Vue from "../../utils/vue";
import { nlyGetOptionsByKeyEqual } from "../../utils/get-options";
import { breakPointOptions } from "../../utils/nly-config";
import {
  sidebarElevationOptions,
  sidebarContainerVariantOpitons
} from "../../utils/nly-config";

const name = "NlyWrapperSidebar";

export const NlyWrapperSidebar = Vue.extend({
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
    },
    //layout fixed or boxed
    layout: {
      type: String
    },
    // navbar fixed
    navbarFixed: {
      type: Boolean,
      default: false
    },
    //footer fixed
    footerFixed: {
      type: Boolean,
      default: false
    },
    //top nav
    topNav: {
      type: Boolean,
      default: false
    },
    containerClass: {
      type: String
    }
  },
  computed: {
    breakPointNumber() {
      return nlyGetOptionsByKeyEqual(breakPointOptions, this.breakPoint);
    },
    sideMiniClass: function() {
      return this.sideMini ? "sidebar-mini" : "";
    },
    layoutClass: function() {
      return this.layout == "fixed"
        ? "layout-fixed"
        : this.layout
        ? "layout-boxed"
        : "";
    },
    navbarFixedClass: function() {
      return this.navbarFixed ? "layout-navbar-fixed" : "";
    },
    footerFixedClass: function() {
      return this.footerFixed ? "layout-footer-fixed" : "";
    },
    topNavClass: function() {
      return this.topNav ? "layout-top-nav" : "";
    },
    containerBodyClass: function() {
      return this.containerClass;
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
    const createdBodyClassList = [
      this.sideMiniClass,
      this.layoutClass,
      this.navbarFixedClass,
      this.footerFixed,
      this.topNavClass,
      this.containerBodyClass
    ];
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
    },
    layoutClass: function(newval, oldval) {
      this.setBodyClassName(newval, oldval);
    },
    navbarFixedClass: function(newval, oldval) {
      this.setBodyClassName(newval, oldval);
    },
    footerFixedClass: function(newval, oldval) {
      this.setBodyClassName(newval, oldval);
    },
    topNavClass: function(newval, oldval) {
      this.setBodyClassName(newval, oldval);
    },
    containerBodyClass: function(newval, oldval) {
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
