/* <div class="content-wrapper" style="min-height: 268px;"></div>; */

import Vue from "../../utils/vue";
export var NlyCollapseMain = Vue.extend({
  name: "NlyCollapseMain",
  //   data() {
  //     return {
  //       instanceStyle: { minHeight: "auto" }
  //     };
  //   },
  created() {},
  //   methods: {
  //     setInstanceStyleHeight() {
  //       const bodyHeight = document.body.clientHeight;
  //       console.log(bodyHeight);
  //       const instanceMinHeight = bodyHeight <= 380 ? "380px" : bodyHeight + "px";
  //       console.log(instanceMinHeight);
  //       return { minHeight: instanceMinHeight };
  //     }
  //   },
  //   computed: {
  //     instanceStyle: function() {
  //       return this.setInstanceStyleHeight();
  //     }
  //   },
  //   mounted() {
  //     window.addEventListener(
  //       "resize",
  //       () => this.setInstanceStyleHeight(),
  //       false
  //     );
  //   },
  render(h) {
    return h(
      "div",
      {
        staticClass: "content-wrapper"
        // style: this.instanceStyle
      },
      this.$slots.default
    );
  }
});
