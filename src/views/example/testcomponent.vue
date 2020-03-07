<template>
  <nly-content-wrapper>
    <nly-content-header>
      <nly-container fluid>
        <nly-row class="mb-2">
          <nly-col sm="6">
            <h1>nly-badge</h1>
          </nly-col>
        </nly-row>
      </nly-container>
    </nly-content-header>
    <nly-content>
      <ul
        class="nav nav-pills nav-sidebar flex-column bg-info nav-child-indent"
        data-widget="treeview"
        role="menu"
        data-accordion="false"
      >
        <li
          :class="
            testshow
              ? 'nav-item has-treeview menu-open'
              : 'nav-item has-treeview '
          "
        >
          <a href="#" class="nav-link" @click="testshowclick">
            <i class="nav-icon fas fa-tachometer-alt"></i>
            <p>
              Dashboard
              <i class="right fas fa-angle-left"></i>
            </p>
          </a>
          <nly-collapse-noclass-transition>
            <ul v-show="testshow" class="nav nav-treeview" id="lll">
              <li class="nav-item">
                <a href="../../index.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Dashboard v1</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="../../index2.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Dashboard v2</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="../../index3.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Dashboard v3</p>
                </a>
              </li>
            </ul>
          </nly-collapse-noclass-transition>
        </li>
      </ul>
    </nly-content>
  </nly-content-wrapper>
</template>

<script>
export default {
  data() {
    return {
      testshow: false
    };
  },
  methods: {
    testshowclick() {
      if (this.testshow) {
        this.testshow = false;
      } else {
        this.testshow = true;
      }
    },
    beforeEnter: function(el) {
      el.style.transition = "all 0.5s";
      if (!el.dataset) el.dataset = {};

      el.dataset.oldPaddingTop = el.style.paddingTop;
      el.dataset.oldPaddingBottom = el.style.paddingBottom;

      el.style.height = 0;
      el.style.paddingTop = 0;
      el.style.paddingBottom = 0;
    },
    enter: function(el) {
      el.dataset.oldOverflow = el.style.overflow;
      if (el.scrollHeight !== 0) {
        el.style.height = el.scrollHeight + "px";
        el.style.paddingTop = el.dataset.oldPaddingTop;
        el.style.paddingBottom = el.dataset.oldPaddingBottom;
      } else {
        el.style.height = "";
        el.style.paddingTop = el.dataset.oldPaddingTop;
        el.style.paddingBottom = el.dataset.oldPaddingBottom;
      }
      el.style.overflow = "hidden";
    },
    afterEnter: function(el) {
      el.style.transition = "";
      el.style.height = "";
      el.style.overflow = el.dataset.oldOverflow;
      el.style.display = "block";
    },
    beforeLeave: function(el) {
      console.log(1);
      if (!el.dataset) el.dataset = {};
      el.dataset.oldPaddingTop = el.style.paddingTop;
      el.dataset.oldPaddingBottom = el.style.paddingBottom;
      el.dataset.oldOverflow = el.style.overflow;

      el.style.height = el.scrollHeight + "px";
      el.style.overflow = "hidden";
    },

    leave: function(el) {
      if (el.scrollHeight !== 0) {
        console.log(2);
        el.style.transition = "all 0.5s";
        el.style.height = 0;
        el.style.paddingTop = 0;
        el.style.paddingBottom = 0;
      }
    },
    afterLeave: function(el) {
      el.style.transition = "";
      el.style.height = "";
      el.style.overflow = el.dataset.oldOverflow;
      el.style.paddingTop = el.dataset.oldPaddingTop;
      el.style.paddingBottom = el.dataset.oldPaddingBottom;
    }
  }
};
</script>
