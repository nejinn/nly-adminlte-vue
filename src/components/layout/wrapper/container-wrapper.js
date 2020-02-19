import Vue from "../../utils/vue";

export var NlyContainerWrapper = Vue.extend({
  name: "NlyContainerWrapper",
  props: {
    //边侧栏最小化
    sideMini: {
      type: Boolean
    },
    //layout fixed or boxed
    layout: {
      type: String
    },
    // navbar fixed
    navbarFixed: {
      type: Boolean
    },
    //footer fixed
    footerFixed: {
      type: Boolean
    },
    //top nav
    topNav: {
      type: Boolean
    }
  },
  computed: {
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
          if (bodyClassName.indexOf("sidebar-collapse") != -1) {
            document.body.classList.remove("sidebar-collapse");
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
  created() {},
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
    }
  },
  render(h) {
    return h(
      "div",
      {
        staticClass: "wrapper"
      },
      this.$slots.default
    );
  }
});
