import {
  assign,
  defineProperty,
  defineProperties,
  readonlyDescriptor
} from "./object";

class NlyEvent {
  constructor(type, eventInit = {}) {
    if (!type) {
      throw new TypeError(
        `Failed to construct '${this.constructor.name}'. 1 argument required, ${arguments.length} given.`
      );
    }

    assign(this, NlyEvent.Defaults, this.constructor.Defaults, eventInit, {
      type
    });

    defineProperties(this, {
      type: readonlyDescriptor(),
      cancelable: readonlyDescriptor(),
      nativeEvent: readonlyDescriptor(),
      target: readonlyDescriptor(),
      relatedTarget: readonlyDescriptor(),
      vueTarget: readonlyDescriptor(),
      componentId: readonlyDescriptor()
    });

    let defaultPrevented = false;
    this.preventDefault = function preventDefault() {
      if (this.cancelable) {
        defaultPrevented = true;
      }
    };

    defineProperty(this, "defaultPrevented", {
      enumerable: true,
      get() {
        return defaultPrevented;
      }
    });
  }

  static get Defaults() {
    return {
      type: "",
      cancelable: true,
      nativeEvent: null,
      target: null,
      relatedTarget: null,
      vueTarget: null,
      componentId: null
    };
  }
}

export { NlyEvent };
