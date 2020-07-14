import Vue from "../../utils/vue";
import { mergeData } from "vue-functional-data-merge";
import KeyCodes from "../../utils/key-codes";
import pluckProps from "../../utils/pluck-props";
import { concat } from "../../utils/array";
import { addClass, removeClass } from "../../utils/dom";
import { isBoolean, isEvent, isFunction } from "../../utils/inspect";
import { keys } from "../../utils/object";
import { toString } from "../../utils/string";
import { NlyLink, propsFactory as linkPropsFactory } from "../link/link";

import { nlyGetOptionsByKeyEqual } from "../../utils/get-options";
import {
  btnVariantOptinos,
  btnSizeOptions,
  btnShapeOptions,
  bgGradientOptions,
  bgVariantOptions
} from "../../utils/nly-config";

const btnProps = {
  block: {
    type: Boolean,
    default: false
  },
  variant: {
    type: String,
    default: "default"
  },
  bgVariant: {
    type: String
  },
  size: {
    type: String
  },
  type: {
    type: String,
    default: "button"
  },
  shape: {
    type: String
  },
  disabled: {
    type: Boolean,
    default: false
  },
  bgGradientVariant: {
    type: String
  },
  buttonClass: {
    type: String
  },
  tool: {
    type: Boolean,
    default: false
  },
  app: {
    type: Boolean,
    default: false
  },
  tag: {
    type: String,
    default: "button"
  },
  pressed: {
    type: Boolean,
    default: null
  },
  isNavbar: {
    type: Boolean,
    default: false
  }
};

const linkProps = linkPropsFactory();
delete linkProps.href.default;
delete linkProps.to.default;
const linkPropKeys = keys(linkProps);

export const props = { ...linkProps, ...btnProps };

const tagIs = (tag, name) =>
  toString(tag).toLowerCase() === toString(name).toLowerCase();

const handleFocus = evt => {
  if (evt.type === "focusin") {
    addClass(evt.target, "focus");
  } else if (evt.type === "focusout") {
    removeClass(evt.target, "focus");
  }
};

const isLink = props => props.href || props.to || tagIs(props.tag, "a");

const isToggle = props => isBoolean(props.pressed);

const isButton = props =>
  !(isLink(props) || (props.tag && !tagIs(props.tag, "button")));

const isNonStandardTag = props => !isLink(props) && !isButton(props);

const customClass = props => {
  const btnVariant = () => {
    if (!props.bgVariant && !props.bgGradientVariant && !props.tool) {
      return nlyGetOptionsByKeyEqual(btnVariantOptinos, props.variant);
    } else {
      return null;
    }
  };

  const btnBlock = () => (props.block ? "btn-block" : null);
  const customSize = () => nlyGetOptionsByKeyEqual(btnSizeOptions, props.size);
  const btnShape = () => nlyGetOptionsByKeyEqual(btnShapeOptions, props.shape);
  const btnBgGradientVariant = () =>
    nlyGetOptionsByKeyEqual(bgGradientOptions, props.bgGradientVariant);
  const btnBgVariant = () =>
    props.bgGradientVariant
      ? null
      : nlyGetOptionsByKeyEqual(bgVariantOptions, props.bgVariant);
  const btnDisabled = () => (props.disabled ? "disabled" : null);
  const btnPressed = () => (props.pressed ? "active" : null);
  const btnTool = () => (props.tool ? "btn-tool" : null);
  const btnApp = () => (props.app ? "btn-app" : null);
  const btmCustomClass = () => props.buttonClass;

  const isNavBarClass = props.isNavbar ? "btn-navbar" : null;

  return [
    btnVariant(),
    btnBgVariant(),
    btnBgGradientVariant(),
    btnBlock(),
    customSize(),
    btnShape(),
    btnDisabled(),
    btnPressed(),
    btnTool(),
    btnApp(),
    btmCustomClass(),
    isNavBarClass
  ];
};

const computeLinkProps = props =>
  isLink(props) ? pluckProps(linkPropKeys, props) : null;

export const computeAttrs = (props, data) => {
  const button = isButton(props);
  const link = isLink(props);
  const toggle = isToggle(props);
  const nonStandardTag = isNonStandardTag(props);
  const hashLink = link && props.href === "#";
  const role = data.attrs && data.attrs.role ? data.attrs.role : null;
  let tabindex = data.attrs ? data.attrs.tabindex : null;
  if (nonStandardTag || hashLink) {
    tabindex = "0";
  }
  return {
    type: button && !link ? props.type : null,
    disabled: button ? props.disabled : null,
    role: nonStandardTag || hashLink ? "button" : role,
    "aria-disabled": nonStandardTag ? String(props.disabled) : null,
    "aria-pressed": toggle ? String(props.pressed) : null,
    autocomplete: toggle ? "off" : null,
    tabindex: props.disabled && !button ? "-1" : tabindex
  };
};

const name = "NlyButton";

export const NlyButton = Vue.extend({
  name: name,
  functional: true,
  props,
  render(h, { props, data, listeners, children }) {
    const toggle = isToggle(props);
    const link = isLink(props);
    const nonStandardTag = isNonStandardTag(props);
    const hashLink = link && props.href === "#";
    const on = {
      keydown(evt) {
        if (props.disabled || !(nonStandardTag || hashLink)) {
          return;
        }
        const { keyCode } = evt;
        if (
          keyCode === KeyCodes.SPACE ||
          (keyCode === KeyCodes.ENTER && nonStandardTag)
        ) {
          const target = evt.currentTarget || evt.target;
          evt.preventDefault();
          target.click();
        }
      },
      click(evt) {
        if (props.disabled && isEvent(evt)) {
          evt.stopPropagation();
          evt.preventDefault();
        } else if (toggle && listeners && listeners["update:pressed"]) {
          concat(listeners["update:pressed"]).forEach(fn => {
            if (isFunction(fn)) {
              fn(!props.pressed);
            }
          });
        }
      }
    };

    if (toggle) {
      on.focusin = handleFocus;
      on.focusout = handleFocus;
    }

    const componentData = {
      staticClass: "btn",
      class: customClass(props),
      props: computeLinkProps(props),
      attrs: computeAttrs(props, data),
      on
    };

    return h(
      link ? NlyLink : props.tag,
      mergeData(data, componentData),
      children
    );
  }
});
