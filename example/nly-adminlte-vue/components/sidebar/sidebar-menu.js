import { NlySidebar } from "./sidebar";
import { NlySidebarBrand } from "./sidebar-brand";
import { NlySidebarBrandimg } from "./sidebar-brandimg";
import { NlySidebarContainer } from "./sidebar-container";
import { NlySidebarNav } from "./sidebar-nav";
import { NlySidebarNavHeader } from "./sidebar-nav-header";
import { NlySidebarNavItem } from "./sidebar-nav-item";
import { NlySidebarNavTree } from "./sidebar-nav-tree";
import { NlySidebarUserpanel } from "./sidebar-userpanel";
import { NlySidebarUserpanelImg } from "./sidebar-userpanel-img";
import { NlySidebarUserpanelInfo } from "./sidebar-userpanel-info";
import { NlySidebarBrandtext } from "./siderbar-brandtext";
import { NlyRenderFunction } from "../render-function";
import Vue from "../../utils/vue";
import clonedeep from "lodash.clonedeep";
import { activeParentTree } from "../../utils/recursion";

const name = "NlySidebarMenu";

export const NlySidebarMenu = Vue.extend({
  name: name,
  components: {
    "nly-sidebar-nav": NlySidebarNav,
    "nly-sidebar-nav-header": NlySidebarNavHeader,
    "nly-sidebar-nav-item": NlySidebarNavItem,
    "nly-sidebar-nav-tree": NlySidebarNavTree
  },
  props: {
    sidebarList: {
      type: Array,
      default: () => []
    },
    exact: {
      type: Boolean,
      default: false
    },
    //边侧栏最小化
    sideMini: {
      type: Boolean,
      default: false
    },
    containerVariant: {
      type: String,
      default: "darkPrimary"
    },
    containerHover: {
      type: Boolean,
      default: true
    },
    containerElevation: {
      type: String,
      default: "xl"
    },
    brandSize: {
      type: String
    },
    brandVariant: {
      type: String
    },
    brandElevation: {
      type: String
    },
    brandHref: {
      type: String,
      default: null
    },
    brandRel: {
      type: String,
      default: null
    },
    brandTarget: {
      type: String,
      default: "_self"
    },
    brandActive: {
      type: Boolean,
      default: false
    },
    branDisabled: {
      type: Boolean,
      default: false
    },
    brandTo: {
      type: [String, Object],
      default: null
    },
    brandAppend: {
      type: Boolean,
      default: false
    },
    brandReplace: {
      type: Boolean,
      default: false
    },
    brandEvent: {
      type: [String, Array],
      default: "click"
    },
    brandActiveClass: {
      type: String
    },
    brandRouterTag: {
      type: String,
      default: "a"
    },
    brandNoPrefetch: {
      type: Boolean,
      default: false
    },
    brandImgSrc: {
      type: String
    },
    brandImgClass: {
      type: String
    },
    brandImgAlt: {
      type: String
    },
    brandImgCircle: {
      type: Boolean,
      default: false
    },
    brandImgElevation: {
      type: Boolean,
      default: false
    },
    brandTextClass: {
      type: String,
      default: null
    },
    brandTextTag: {
      type: String,
      default: "span"
    },
    brandTextWeight: {
      type: Boolean,
      default: true
    },
    brandText: {
      type: String,
      default: null
    },
    userSrc: {
      type: String
    },
    userCircle: {
      type: Boolean,
      default: true
    },
    userElevation: {
      type: String,
      default: "md"
    },
    userAlt: {
      type: String
    },
    userImgClass: {
      type: String
    },
    infoClass: {
      type: String
    },
    infoHref: {
      type: String,
      default: null
    },
    infoRel: {
      type: String,
      default: null
    },
    infoTarget: {
      type: String,
      default: "_self"
    },
    infoActive: {
      type: Boolean,
      default: false
    },
    infoDisabled: {
      type: Boolean,
      default: false
    },
    infoTo: {
      type: [String, Object],
      default: null
    },
    infoAppend: {
      type: Boolean,
      default: false
    },
    infoReplace: {
      type: Boolean,
      default: false
    },
    infoEvent: {
      type: [String, Array],
      default: "click"
    },
    infoActiveClass: {
      type: String
    },
    infoRouterTag: {
      type: String,
      default: "a"
    },
    infoNoPrefetch: {
      type: Boolean,
      default: false
    },
    infoText: {
      type: String
    },
    scrollbar: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    checkVisible(val) {
      let avtiveKey = undefined;
      // 获取当前激活的 item 的 key
      const transActiveArrayFunc = dataArray =>
        dataArray.map(item => {
          const { dataGroup, _key, exact, _children, to, _type } = item;
          if (
            [
              "nly-sidebar-nav-tree",
              "nly-sidebar-nav",
              "nly-sidebar-nav-item"
            ].indexOf(_type) !== -1
          ) {
            if (dataGroup === undefined) {
              throw new Error("dataGroup is required");
            }
            if (_key === undefined) {
              throw new Error("_key is required");
            }
            if (exact === undefined) {
              throw new Error("exact is required");
            }
            if (this.$route !== undefined && to !== undefined) {
              const { name } = to;
              if (name === this.$route.name || to === this.$route.path) {
                avtiveKey = _key;
              }
            }
            if (_children) {
              transActiveArrayFunc(_children);
              return item;
            }
            return item;
          } else {
            if (_children) {
              transActiveArrayFunc(_children);
              return item;
            }
            return item;
          }
        });

      // 获取转化之后的 sidebarlist
      let transActiveArray = transActiveArrayFunc(val);
      // 获取当前激活子节点的所有 type 为 tree 的父节点
      if (avtiveKey) {
        let activeParentArray = activeParentTree(transActiveArray, avtiveKey);
        const sidebrArray = visibleList =>
          visibleList.map(item => {
            const { _type } = item;
            if (_type === "nly-sidebar-nav-tree") {
              const { _children, _key } = item;
              if (_children) {
                const visibleTree = [];
                activeParentArray.forEach(childrenItem => {
                  visibleTree.push(childrenItem._key);
                });
                item["active"] = false;
                item["visible"] = false;
                if (visibleTree.indexOf(_key) !== -1) {
                  item["active"] = true;
                  item["visible"] = true;
                }
                sidebrArray(_children);
                delete item.dataGroup;
                return item;
              }
            } else if (_type === "nly-sidebar-nav") {
              const { _children } = item;
              if (_children) {
                sidebrArray(_children);
                delete item.dataGroup;
                return item;
              }
            } else if (_type === "nly-sidebar-nav-item") {
              delete item.dataGroup;
              return item;
            } else {
              const { _children } = item;
              if (_children) {
                sidebrArray(_children);
                return item;
              }
              return item;
            }
          });
        return sidebrArray(transActiveArray);
      } else {
        return val;
      }
    }
  },
  render(h) {
    let $brand = h();
    if (this.brandImgSrc) {
      $brand = h(
        NlySidebarBrand,
        {
          props: {
            size: this.brandSize,
            variant: this.brandVariant,
            elevation: this.brandElevation,
            href: this.brandHref,
            rel: this.brandHref,
            target: this.brandTarget,
            active: this.brandActive,
            disabled: this.branDisabled,
            to: this.brandTo,
            append: this.brandAppend,
            replace: this.brandReplace,
            event: this.brandEvent,
            activeClass: this.brandActiveClass,
            routerTag: this.brandRouterTag,
            noPrefetch: this.brandNoPrefetch
          }
        },
        [
          h(
            NlySidebarBrandimg,
            {
              props: {
                src: this.brandImgSrc,
                sidebarBrandimgClass: this.brandImgClass,
                alt: this.brandImgAlt,
                circle: this.brandImgCircle,
                elevation: this.brandImgElevation
              }
            },
            [
              h(
                NlySidebarBrandtext,
                {
                  props: {
                    textClass: this.brandTextClass,
                    tag: this.brandTextTag,
                    weight: this.brandTextWeight
                  }
                },
                this.brandText
              )
            ]
          )
        ]
      );
    }

    let $userInfo = h();

    if (this.userSrc) {
      $userInfo = h(
        NlySidebarUserpanel,
        {
          class: ["mt-3", "pb-3", "mb-3", "d-flex"]
        }[
          (h(NlySidebarUserpanelImg, {
            props: {
              src: this.userSrc,
              circle: this.userCircle,
              elevation: this.userElevation,
              alt: this.userAlt,
              imgClass: this.userImgClass
            }
          }),
          [
            h(
              NlySidebarUserpanelInfo,
              {
                props: {
                  infoClass: this.infoClass,
                  href: this.infoHref,
                  rel: this.infoRel,
                  target: this.infoTarget,
                  active: this.infoActive,
                  disabled: this.infoDisabled,
                  to: this.infoTo,
                  append: this.infoAppend,
                  replace: this.infoReplace,
                  event: this.infoEvent,
                  activeClass: this.infoActiveClass,
                  routerTag: this.infoRouterTag,
                  noPrefetch: this.infoNoPrefetch
                }
              },
              this.infoText
            )
          ])
        ]
      );
    }

    let $sidebar = h();

    if (this.sidebarList) {
      if (this.exact) {
        let convertSidebarList = clonedeep(this.sidebarList);
        let checkVisible = this.checkVisible(convertSidebarList);
        $sidebar = h(NlyRenderFunction, {
          props: {
            flat: true,
            contentToRender: checkVisible
          }
        });
      } else {
        $sidebar = h(NlyRenderFunction, {
          props: {
            flat: true,
            contentToRender: this.sidebarList
          }
        });
      }
    }
    let $wrapper = h(
      NlySidebarContainer,
      {
        props: {
          containerVariant: this.containerVariant,
          containerHover: this.containerHover,
          containerElevation: this.containerElevation,
          //边侧栏最小化
          sideMini: this.sideMini
        }
      },
      [
        $brand,
        $userInfo,
        h(
          NlySidebar,
          {
            props: {
              scrollbar: this.scrollbar
            }
          },
          [$sidebar]
        )
      ]
    );

    return $wrapper;
  }
});
