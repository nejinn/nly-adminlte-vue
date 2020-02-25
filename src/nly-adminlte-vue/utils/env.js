export const hasWindowSupport = typeof window !== "undefined";
export const hasDocumentSupport = typeof document !== "undefined";
export const hasNavigatorSupport = typeof navigator !== "undefined";
export const hasPromiseSupport = typeof Promise !== "undefined";
export const hasMutationObserverSupport =
  typeof MutationObserver !== "undefined" ||
  typeof WebKitMutationObserver !== "undefined" ||
  typeof MozMutationObserver !== "undefined";

export const isBrowser =
  hasWindowSupport && hasDocumentSupport && hasNavigatorSupport;

export const userAgent = isBrowser
  ? window.navigator.userAgent.toLowerCase()
  : "";

export const isJSDOM = userAgent.indexOf("jsdom") > 0;
export const isIE = /msie|trident/.test(userAgent);

export const hasPassiveEventSupport = (() => {
  let passiveEventSupported = false;
  if (isBrowser) {
    try {
      const options = {
        // eslint-disable-next-line getter-return
        get passive() {
          passiveEventSupported = true;
        }
      };
      window.addEventListener("test", options, options);
      window.removeEventListener("test", options, options);
    } catch (err) {
      passiveEventSupported = false;
    }
  }
  return passiveEventSupported;
})();

export const hasTouchSupport =
  isBrowser &&
  ("ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0);

export const hasPointerEventSupport =
  isBrowser && Boolean(window.PointerEvent || window.MSPointerEvent);

export const hasIntersectionObserverSupport =
  isBrowser &&
  "IntersectionObserver" in window &&
  "IntersectionObserverEntry" in window &&
  "intersectionRatio" in window.IntersectionObserverEntry.prototype;

export const getEnv = (key, fallback = null) => {
  const env =
    typeof process !== "undefined" && process ? process.env || {} : {};
  if (!key) {
    return env;
  }
  return env[key] || fallback;
};

export const getNoWarn = () => getEnv("BOOTSTRAP_VUE_NO_WARN");
