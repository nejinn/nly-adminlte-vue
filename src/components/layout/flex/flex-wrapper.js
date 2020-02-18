import Vue from "../../utils/vue";
export var NlyFlexWrapper = Vue.extend({
  name: "NlyFlexWrapper",
  mounted() {
    window.onresize = () => {
      return (() => {
        var bodyWidth = document.body.clientWidth;
        var bodyClassName = document.body.className;

        if (bodyWidth < 992) {
          if (bodyClassName.indexOf("sidebar-collapse") == -1) {
            document.body.classList.add("sidebar-collapse");
          }
        } else {
          if (bodyClassName.indexOf("sidebar-collapse") != -1) {
            document.body.classList.remove("sidebar-collapse");
          }
        }
      })();
    };
  },
  created() {
    document.body.className =
      "sidebar-mini layout-fixed layout-navbar-fixed layout-footer-fixed";
  },
  render(h) {
    return h(
      "div",
      {
        class: "wrapper"
      },
      this.$slots.default
    );
  }
});
