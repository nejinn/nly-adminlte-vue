import Vue from "../../utils/vue";
import { NlyLink } from "../link";
import { NlyIcon } from "../icons/icon";
import idMixins from "../../mixins/id";
// import { NlyLogAddTransitionGroup } from "../../utils/log-add-transition-group";
import "overlayscrollbars/css/OverlayScrollbars.css";
import { OverlayScrollbarsComponent } from "overlayscrollbars-vue";
// import { OverlayScrollbarsComponent } from "overlayscrollbars-vue";

const name = "NlyLogBody";

export const NlyLogBody = Vue.extend({
  name: name,
  mixins: [idMixins],
  data() {
    return {
      lockBottom: false
    };
  },
  props: {
    scrollBottom: {
      type: Boolean,
      default: true
    },
    scrollTop: {
      type: Boolean,
      default: true
    },
    logBodyClass: {
      type: String
    },
    preClass: {
      type: String
    },
    bottomIcon: {
      type: String,
      default: "nlyfont nly-icon-logo-ionic"
    },
    bottomText: {
      type: String,
      default: "滚动到底部"
    },
    lockScrollBottom: {
      type: Boolean,
      default: true
    },
    lockBottomIcon: {
      type: String,
      default: "nlyfont nly-icon-logo-ionic"
    },
    lockBottomText: {
      type: String,
      default: "锁定底部"
    },
    topIcon: {
      type: String,
      default: "nlyfont nly-icon-logo-aperture"
    }
  },
  computed: {
    customProps() {
      return {
        scrollBottom: this.scrollBottom,
        scrollTop: this.scrollTop,
        logBodyClass: this.logBodyClass,
        preClass: this.preClass,
        topIcon: this.topIcon,
        bottomIcon: this.bottomIcon,
        bottomText: this.bottomText,
        lockScrollBottom: this.lockScrollBottom,
        lockBottomIcon: this.lockBottomIcon,
        lockBottomText: this.lockBottomText
      };
    }
  },
  mounted() {},
  methods: {
    scrollBottomFunction() {
      const preRef = `${this.safeId()}_pre`;
      this.$refs[preRef].osInstance().scroll({ y: "100%" }, 1000);
    },
    scrollTopFunction() {
      const preRef = `${this.safeId()}_pre`;
      this.$refs[preRef].osInstance().scroll({ y: "0%" }, 1000);
      this.lockBottom = false;
    },
    lockscrollBar() {
      if (this.lockBottom === true) {
        this.$nextTick(() => {
          const preRef = `${this.safeId()}_pre`;
          this.$refs[preRef].osInstance().scroll({ y: "100%" }, 500);
        });
      }
    },
    lockScrollBottomFunction() {
      this.lockBottom = this.lockBottom ? false : true;
    }
  },
  render(h) {
    const bottomVnodes = () => {
      if (this.customProps.scrollBottom) {
        return h(
          NlyLink,
          {
            staticClass: "nly-log-tail",
            on: {
              click: this.scrollBottomFunction
            }
          },
          [
            h(NlyIcon, {
              staticClass: "tail-status",
              props: {
                icon: this.customProps.bottomIcon
              }
            }),
            h(
              "span",
              {
                staticClass: "tail-label"
              },
              [
                h(
                  "svg",
                  {
                    staticClass: "icon-arrow",
                    attrs: {
                      viewBox: "0 0 15 15"
                    }
                  },
                  [
                    h("path", {
                      attrs: {
                        d: "M7.549.5v12.924m5.549-4.473L7.549 14.5 2 8.951"
                      }
                    })
                  ]
                ),
                this.customProps.bottomText
              ]
            )
          ]
        );
      }
    };

    const lockBottomVnodes = () => {
      if (this.customProps.lockScrollBottom) {
        return h(
          NlyLink,
          {
            staticClass: "nly-log-tail",
            on: {
              click: this.lockScrollBottomFunction
            }
          },
          [
            h(NlyIcon, {
              staticClass: "tail-status",
              props: {
                icon: this.customProps.lockBottomIcon
              }
            }),
            h(
              "span",
              {
                staticClass: "tail-label"
              },
              [
                h(
                  "svg",
                  {
                    staticClass: "icon-arrow",
                    attrs: {
                      viewBox: "0 0 15 15"
                    }
                  },
                  [
                    h("path", {
                      attrs: {
                        d: "M7.549.5v12.924m5.549-4.473L7.549 14.5 2 8.951"
                      }
                    })
                  ]
                ),
                this.customProps.lockBottomText
              ]
            )
          ]
        );
      }
    };

    const preVnodes = () => {
      return h(
        OverlayScrollbarsComponent,
        {
          ref: `${this.safeId()}_pre`,
          staticClass: "nly-log-body-pre",
          props: {
            options: {
              className: "os-theme-light",
              scrollbars: { autoHide: "scroll" },
              callbacks: {
                onOverflowAmountChanged: this.lockscrollBar()
              }
            }
          }
        },
        this.$slots.default
      );
    };

    const topVnodes = () => {
      if (this.customProps.scrollTop) {
        return h(
          NlyLink,
          {
            staticClass: "to-top",
            on: {
              click: this.scrollTopFunction
            }
          },
          [
            "top",
            h(NlyIcon, {
              class: [this.customProps.topIcon]
            })
          ]
        );
      }
    };

    return h(
      "div",
      {
        staticClass: "nly-log-body",
        ref: this.safeId()
      },
      [bottomVnodes(), lockBottomVnodes(), preVnodes(), topVnodes()]
    );
  }
});
