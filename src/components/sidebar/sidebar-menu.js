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
import { NlySidebarWrapper } from "./sidebar-wrapper";
import { NlySidebarBrandtext } from "./siderbar-brandtext";
import { NlyRenderFunction } from "../render-function";
import Vue from "../../utils/vue";

const name = "NlySidebarMenu";

export const customType = {
  wrapper: NlySidebarWrapper
};

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
    brandExact: {
      type: Boolean,
      default: false
    },
    brandExactActiveClass: {
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
    brandImgSidebarBrandimgClass: {
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
    textClass: {
      type: String,
      default: null
    },
    textTag: {
      type: String,
      default: "span"
    },
    textWeight: {
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
    infoExact: {
      type: Boolean,
      default: false
    },
    infoExactActiveClass: {
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
  render(h) {
    console.log(this.sidebarList);
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
            exact: this.brandExact,
            exactActiveClass: this.brandExactActiveClass,
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
                sidebarBrandimgClass: this.brandImgSidebarBrandimgClass,
                alt: this.brandImgAlt,
                circle: this.brandImgCircle,
                elevation: this.brandImgElevation
              }
            },
            h(
              NlySidebarBrandtext,
              {
                props: {
                  textClass: this.textClass,
                  tag: this.textTag,
                  weight: this.textWeight
                }
              },
              this.brandText
            )
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
                exact: this.infoExact,
                exactActiveClass: this.infoExactActiveClass,
                routerTag: this.infoRouterTag,
                noPrefetch: this.infoNoPrefetch
              }
            },
            this.infoText
          ))
        ]
      );
    }

    let $sidebar = h();

    if (this.sidebarList) {
      $sidebar = h(NlyRenderFunction, {
        props: {
          flat: true,
          contentToRender: this.sidebarList
        }
      });
    }
    let $wrapper = h(
      NlySidebarContainer,
      {
        props: {
          containerVariant: this.containerVariant,
          containerHover: this.containerHover,
          containerElevation: this.containerElevation
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

    console.log($sidebar, $wrapper);

    return $wrapper;
  }
});
