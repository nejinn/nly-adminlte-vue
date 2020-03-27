import Vue from "../../utils/vue";
import { NlyLink } from "../link";
import { NlyIcon } from "../icon";
import idMixins from "../../mixins/id";
import { NlyLogAddTransitionGroup } from "../../utils/log-add-transition-group";

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
    topIcon: {
      type: String,
      default: "nlyfont nly-icon-logo-aperture"
    },
    transiton: {
      type: Boolean,
      default: true
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
        transiton: this.transiton
      };
    }
  },
  mounted() {
    this.lockscrollBar();
  },
  updated() {
    this.lockscrollBar();
  },
  methods: {
    scrollBottomFunction() {
      const preRef = `${this.safeId()}_pre`;
      if (this.$refs[preRef].scrollTop < this.$refs[preRef].scrollHeight)
        this.$refs[preRef].scrollTop = this.$refs[preRef].scrollHeight;
      this.lockBottom = true;
    },
    scrollTopFunction() {
      const preRef = `${this.safeId()}_pre`;
      this.$refs[preRef].scrollTop = 0;
      this.lockBottom = false;
    },
    lockscrollBar() {
      this.$nextTick(() => {
        if (this.lockBottom) {
          const preRef = `${this.safeId()}_pre`;
          this.$refs[preRef].scrollTop = this.$refs[preRef].scrollHeight;
        }
      });
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
    const preVnodes = () => {
      if (this.customProps.transiton) {
        return h("pre", { ref: `${this.safeId()}_pre` }, [
          h(NlyLogAddTransitionGroup, this.$slots.default)
        ]);
      } else {
        return h("pre", { ref: `${this.safeId()}_pre` }, this.$slots.default);
      }
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
      [bottomVnodes(), preVnodes(), topVnodes()]
    );
  }
});
