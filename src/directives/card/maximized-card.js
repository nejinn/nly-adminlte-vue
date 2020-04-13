import { nlyCardId } from "../../utils/mixin-id";
import { toInteger } from "../../utils/number";

import { changeAfterIcon, changeBeforeIcon } from "../../utils/card";

export const YNlyCardMaximized = {
  bind(el, binding, vnode) {
    const cardMaximizedId = nlyCardId(Object.keys(binding.modifiers)[0]);
    el.onclick = () => {
      if (binding.value !== undefined) {
        const beforeIcon = binding.value.beforeIcon || null;
        const afterIcon = binding.value.afterIcon || null;
        const order = toInteger(binding.value.order);
        const componentInstanceChildren = vnode.children;
        const cardMaximizedDom = document.querySelector(`#${cardMaximizedId}`);
        const htmlDom = document.querySelector("html");
        const cardMaximizedDomOffsetHeight = cardMaximizedDom.offsetHeight;
        const cardMaximizedDomOffsetWidth = cardMaximizedDom.offsetWidth;
        if (cardMaximizedDom.className.indexOf("maximized-card") == -1) {
          cardMaximizedDom.style.transition = "all 0.15s ease 0s";
          cardMaximizedDom.style.height = `${cardMaximizedDomOffsetHeight}PX`;
          cardMaximizedDom.style.width = `${cardMaximizedDomOffsetWidth}px`;
          changeBeforeIcon(componentInstanceChildren, afterIcon, order);
          setTimeout(() => {
            cardMaximizedDom.classList.add("maximized-card");
            htmlDom.classList.add("maximized-card");
          }, 20);
        } else {
          cardMaximizedDom.style.transition = "all 0.15s ease 0s";
          cardMaximizedDom.style.height = "inherit";
          cardMaximizedDom.style.width = "inherit";
          changeAfterIcon(componentInstanceChildren, beforeIcon, order);
          setTimeout(() => {
            cardMaximizedDom.classList.remove("maximized-card");
            htmlDom.classList.remove("maximized-card");
          }, 20);
        }
      } else {
        const cardMaximizedDom = document.querySelector(`#${cardMaximizedId}`);
        const htmlDom = document.querySelector("html");
        const cardMaximizedDomOffsetHeight = cardMaximizedDom.offsetHeight;
        const cardMaximizedDomOffsetWidth = cardMaximizedDom.offsetWidth;
        if (cardMaximizedDom.className.indexOf("maximized-card") == -1) {
          cardMaximizedDom.style.transition = "all 0.15s ease 0s";
          cardMaximizedDom.style.height = `${cardMaximizedDomOffsetHeight}PX`;
          cardMaximizedDom.style.width = `${cardMaximizedDomOffsetWidth}px`;
          setTimeout(() => {
            cardMaximizedDom.classList.add("maximized-card");
            htmlDom.classList.add("maximized-card");
          }, 20);
        } else {
          cardMaximizedDom.style.transition = "all 0.15s ease 0s";
          cardMaximizedDom.style.height = "inherit";
          cardMaximizedDom.style.width = "inherit";
          setTimeout(() => {
            cardMaximizedDom.classList.remove("maximized-card");
            htmlDom.classList.remove("maximized-card");
          }, 20);
        }
      }
    };
  }
};
