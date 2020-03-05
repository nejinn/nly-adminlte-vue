/**
 * **** card-group ****
 * .card-group 卡片组
 * .card-deck 水平卡片组
 * .card-columns 垂直卡片组。超过一行无法排列，就会垂直排列
 * .accordion
 *
 * **** card ****
 * .card  card基础类
 * .card-info card-* 背景颜色类，给header添加背景色 card-*一类颜色只能作用于header
 * .card-outline 在有card-info情况下，给header添加顶部border,header背景色为白色，没有则无效
 * .card-outline-tabs 作用于header中的a标签，放在 card div的class中。鼠标悬浮a标签时a标签出现顶部border
 * .card-tabs
 * .text-light 文字颜色
 * .bg-* 背景颜色，整个card一起设置。header中会被card-*一类颜色覆盖
 * .bg-gradient-* 渐变背景色
 * .height-control 控制body高度，最大300px
 *
 * **** card-img ****
 * .card-img 四个圆角
 * .card-img-top top圆角
 * .card-img-buttom buttom圆角
 * 当body,header,footer设置.card-img-overlay的时候，图片作为背景图片。避免三个同时有card-img-overlay，会堆叠
 *
 * **** card-body ****
 * .card-body 基础类
 * .bg-*
 * .card-img-overlay 把card-img作为背景图
 * .text-light 文字颜色
 *
 * **** card-header ****
 * .card-header 基础类
 * .bg-*
 * .card-img-overlay 把card-img作为背景图
 * .text-light 文字颜色
 *
 * **** card-tool ****
 * .card-tool 基础类
 * .card-tool只能放在header中且只能是header的子元素
 *
 * card-tool下可以用btn-group show，将高亮。在没有card-*的情况下
 * btn-group show
 *
 * **** card-footer ****
 * .card-footer 基础类
 * .bg-*
 * .card-img-overlay 把card-img作为背景图
 * .text-light 文字颜色
 *
 * **** card-title ****
 * .card-title 基础类
 * .text-light 文字颜色
 *
 * **** card-subtitle ****
 * .card-subtitle 基础类
 * .text-light 文字颜色
 *
 * **** card-text ****
 * .card-text 基础类
 * .text-light 文字颜色
 *
 * **** card-link ****
 * .card-link link标签
 *
 * **** card-comments ****
 * bg-*
 * text-light
 *
 * **** card-comments-img
 * img-circle
 *
 * **** comment-text ****
 * text-light
 *
 * **** card-comments-username
 * text-light
 *
 */

import Vue from "../../utils/vue";
import {
  bgGradientOptions,
  cardVariantOptions,
  textVariantOptions,
  bgVariantOptions
} from "../../utils/nly-config";
import { nlyGetOptionsByKeyEqual } from "../../utils/get-options";
import { NlyIcon } from "../icon/icon";
import { NlyOverlay } from "../overlay/overlay";
import { nlyCardId } from "../../utils/mixin-id";

const name = "NlyCard";

export const NlyCard = Vue.extend({
  name: name,
  props: {
    headerVariant: {
      type: String
    },
    headerOutline: {
      type: Boolean,
      default: false
    },
    cardOutlineTabs: {
      type: Boolean,
      default: false
    },
    cardTabs: {
      type: Boolean,
      default: false
    },
    textVariant: {
      type: String
    },
    bgVariant: {
      type: String
    },
    bgGradientVariant: {
      type: String
    },
    heightControl: {
      type: Boolean,
      default: false
    },
    cardClass: {
      type: String
    },
    loading: {
      type: Boolean,
      default: false
    },
    loadingContent: {
      type: String
    },
    loadingContentTag: {
      type: String,
      default: "p"
    },
    loadingContentClass: {
      type: String
    },
    loadingIcon: {
      type: String,
      default: "fas fa-2x fa-sync-alt fa-spin"
    },
    loadingImg: {
      type: Boolean,
      default: false
    },
    loadingImgSrc: {
      type: String
    },
    loadingImgClass: {
      type: String
    },
    tag: {
      type: String,
      default: "div"
    },
    dark: {
      type: Boolean,
      default: false
    },
    id: {
      type: String
    }
  },
  computed: {
    customProps: function() {
      return {
        headerVariant: nlyGetOptionsByKeyEqual(
          cardVariantOptions,
          this.headerVariant
        ),
        headerOutline: this.headerOutline ? "card-outline" : "",
        cardOutlineTabs: this.cardOutlineTabs ? "card-outline-tabs" : "",
        cardTabs: this.cardTabs ? "card-tabs" : "",
        textVariant: nlyGetOptionsByKeyEqual(
          textVariantOptions,
          this.textVariant
        ),
        bgVariant: nlyGetOptionsByKeyEqual(bgVariantOptions, this.bgVariant),
        bgGradientVariant: nlyGetOptionsByKeyEqual(
          bgGradientOptions,
          this.bgGradientVariant
        ),
        heightControl: this.heightControl ? "height-control" : "",
        cardClass: this.cardClass,
        loading: this.loading,
        loadingContent: this.loadingContent,
        loadingContentTag: this.loadingContentTag,
        loadingContentClass: this.loadingContentClass,
        loadingIcon: this.loadingIcon,
        loadingImg: this.loadingImg,
        loadingImgSrc: this.loadingImgSrc,
        loadingImgClass: this.loadingImgClass,
        tag: this.tag,
        dark: this.dark,
        id: nlyCardId(this.id)
      };
    }
  },
  render(h) {
    const overlayArray = () => {
      if (this.customProps.loadingContent) {
        return h(
          NlyOverlay,
          {
            props: {
              dark: this.customProps.dark
            }
          },
          [loadingContentArray()]
        );
      } else {
        return h(
          NlyOverlay,
          {
            props: {
              dark: this.customProps.dark
            }
          },
          [loadingIcon()]
        );
      }
    };

    const loadingContentArray = () => {
      return h(
        this.customProps.loadingContentTag,
        {
          class: [this.customProps.loadingContentClass]
        },
        this.customProps.loadingContent
      );
    };

    const loadingIcon = () => {
      return h(NlyIcon, {
        props: {
          icon: this.customProps.loadingIcon
        }
      });
    };

    const loadingImgArray = () => {
      return h("img", {
        attrs: {
          alt: "loading-img",
          src: this.customProps.loadingImgSrc
        },
        staticClass: "loading-img",
        class: [this.customProps.loadingImgClass]
      });
    };

    const loadingArray = () => {
      if (this.customProps.loading && !this.customProps.loadingImg) {
        return [this.$slots.default, overlayArray()];
      } else if (!this.customProps.loading && this.customProps.loadingImg) {
        return [this.$slots.default, loadingImgArray()];
      } else if (this.customProps.loading && this.customProps.loadingImg) {
        return [this.$slots.default, loadingImgArray(), overlayArray()];
      } else {
        return [this.$slots.default];
      }
    };
    return h(
      this.customProps.tag,
      {
        attrs: {
          id: this.customProps.id
        },
        staticClass: "card",
        class: [
          this.customProps.headerVariant,
          this.customProps.headerOutline,
          this.customProps.cardOutlineTabs,
          this.customProps.cardTabs,
          this.customProps.textVariant,
          this.customProps.bgVariant,
          this.customProps.bgGradientVariant,
          this.customProps.heightControl,
          this.customProps.cardClass
        ]
      },
      [loadingArray()]
    );
  }
});
