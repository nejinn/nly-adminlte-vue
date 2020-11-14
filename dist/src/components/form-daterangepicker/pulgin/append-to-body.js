export const VNlyAppendToBody = {
  inserted(el, bindings, { context }) {
    if (context.appendToBody) {
      const {
        height,
        top,
        left,
        width,
        right
      } = context.$refs.toggle.getBoundingClientRect();

      el.unbindPosition = context.calculatePosition(el, context, {
        width: width,
        top: window.scrollY + top + height,
        left: window.scrollX + left,
        right: right
      });

      document.body.appendChild(el);
    } else {
      context.$refs.toggle.appendChild(el);
    }
  },

  unbind(el, bindings, { context }) {
    if (context.appendToBody) {
      if (el.unbindPosition && typeof el.unbindPosition === "function") {
        el.unbindPosition();
      }
      if (el.parentNode) {
        el.parentNode.removeChild(el);
      }
    }
  }
};
