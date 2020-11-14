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
import { NlyIcon } from "../icons/icon";
import { NlyOverlay } from "../overlay/overlay";
import { nlyCardId } from "../../utils/mixin-id";
import { mergeData } from "vue-functional-data-merge";

export const props = {
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
};

const customAttrs = props => {
  const id = () => nlyCardId(props.id);
  return {
    id: id()
  };
};

const customClass = props => {
  const headerVariant = () =>
    nlyGetOptionsByKeyEqual(cardVariantOptions, props.headerVariant);
  const headerOutline = () => (props.headerOutline ? "card-outline" : "");
  const cardOutlineTabs = props.cardOutlineTabs ? "card-outline-tabs" : "";
  const cardTabs = props.cardTabs ? "card-tabs" : "";
  const textVariant = () =>
    nlyGetOptionsByKeyEqual(textVariantOptions, props.textVariant);
  const bgVariant = () =>
    nlyGetOptionsByKeyEqual(bgVariantOptions, props.bgVariant);
  const bgGradientVariant = () =>
    nlyGetOptionsByKeyEqual(bgGradientOptions, props.bgGradientVariant);
  const heightControl = props.heightControl ? "height-control" : "";
  const cardClass = props.cardClass;

  return [
    headerVariant(),
    headerOutline(),
    cardOutlineTabs,
    cardTabs,
    textVariant(),
    bgVariant(),
    bgGradientVariant(),
    heightControl,
    cardClass
  ];
};

const name = "NlyCard";

export const NlyCard = Vue.extend({
  name: name,
  props,
  functional: true,
  render(h, { props, data, children }) {
    const overlayArray = () => {
      if (props.loadingContent) {
        return h(
          NlyOverlay,
          {
            props: {
              custom: true,
              dark: props.dark
            }
          },
          [loadingContentArray()]
        );
      } else {
        return h(
          NlyOverlay,
          {
            props: {
              custom: true,
              dark: props.dark
            }
          },
          [loadingIcon()]
        );
      }
    };

    const loadingContentArray = () => {
      return h(
        props.loadingContentTag,
        {
          class: [props.loadingContentClass]
        },
        props.loadingContent
      );
    };

    const loadingIcon = () => {
      return h(NlyIcon, {
        props: {
          icon: props.loadingIcon
        }
      });
    };

    const loadingImgArray = () => {
      return h("img", {
        attrs: {
          alt: "loading-img",
          src: props.loadingImgSrc
        },
        staticClass: "loading-img",
        class: [props.loadingImgClass]
      });
    };

    const loadingArray = () => {
      if (props.loading && !props.loadingImg) {
        return [children, overlayArray()];
      } else if (props.loading && props.loadingImg) {
        return [children, loadingImgArray()];
      } else {
        return children;
      }
    };
    return h(
      props.tag,
      mergeData(data, {
        attrs: customAttrs(props),
        staticClass: "card",
        class: customClass(props)
      }),
      loadingArray()
    );
  }
});
