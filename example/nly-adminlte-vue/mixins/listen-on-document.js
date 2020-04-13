import { arrayIncludes } from "../utils/array";
import { isBrowser } from "../utils/env";
import { EVENT_OPTIONS_NO_CAPTURE, eventOn, eventOff } from "../utils/events";
import { isString, isFunction } from "../utils/inspect";
import { keys } from "../utils/object";

const PROP = "$_nlya_documentHandlers_";

export default {
  created() {
    if (!isBrowser) {
      return;
    }
    this[PROP] = {};
    this.$once("hook:beforeDestroy", () => {
      const items = this[PROP] || {};

      delete this[PROP];
      keys(items).forEach(evtName => {
        const handlers = items[evtName] || [];
        handlers.forEach(handler =>
          eventOff(document, evtName, handler, EVENT_OPTIONS_NO_CAPTURE)
        );
      });
    });
  },
  methods: {
    listenDocument(on, evtName, handler) {
      on
        ? this.listenOnDocument(evtName, handler)
        : this.listenOffDocument(evtName, handler);
    },
    listenOnDocument(evtName, handler) {
      if (this[PROP] && isString(evtName) && isFunction(handler)) {
        this[PROP][evtName] = this[PROP][evtName] || [];
        if (!arrayIncludes(this[PROP][evtName], handler)) {
          this[PROP][evtName].push(handler);
          eventOn(document, evtName, handler, EVENT_OPTIONS_NO_CAPTURE);
        }
      }
    },
    listenOffDocument(evtName, handler) {
      if (this[PROP] && isString(evtName) && isFunction(handler)) {
        eventOff(document, evtName, handler, EVENT_OPTIONS_NO_CAPTURE);
        this[PROP][evtName] = (this[PROP][evtName] || []).filter(
          h => h !== handler
        );
      }
    }
  }
};
