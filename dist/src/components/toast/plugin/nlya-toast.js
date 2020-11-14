import { concat } from "../../../utils/array";
import { getComponentConfig } from "../../../utils/config";
import { requestAF } from "../../../utils/dom";
import { isUndefined, isString } from "../../../utils/inspect";
import {
  assign,
  defineProperties,
  defineProperty,
  keys,
  omit,
  readonlyDescriptor
} from "../../../utils/object";
import { nlyPluginFactory } from "../../../utils/plugins";
import { warn, warnNotClient } from "../../../utils/warn";
import { NlyToast, props as toastProps } from "../toast";

const PROP_NAME = "$nlyaToast";
const PROP_NAME_PRIV = "_nlya__toast";

const BASE_PROPS = ["id", ...keys(omit(toastProps, ["static", "visible"]))];

const propsToSlots = {
  toastContent: "default",
  title: "toast-title"
};

const filterOptions = options => {
  return BASE_PROPS.reduce((memo, key) => {
    if (!isUndefined(options[key])) {
      memo[key] = options[key];
    }
    return memo;
  }, {});
};

const plugin = Vue => {
  const NlyToastPop = Vue.extend({
    name: "NlyToastPop",
    extends: NlyToast,
    destroyed() {
      if (this.$el && this.$el.parentNode) {
        this.$el.parentNode.removeChild(this.$el);
      }
    },
    mounted() {
      const self = this;
      const handleDestroy = () => {
        self.localShow = false;
        self.doRender = false;
        self.$nextTick(() => {
          self.$nextTick(() => {
            requestAF(() => {
              self.$destroy();
            });
          });
        });
      };
      this.$parent.$once("hook:destroyed", handleDestroy);
      this.$once("hidden", handleDestroy);
      this.listenOnRoot("nlya::toaster::destroyed", toaster => {
        if (toaster === self.toaster) {
          handleDestroy();
        }
      });
    }
  });

  const makeToast = (props, $parent) => {
    if (warnNotClient(PROP_NAME)) {
      return;
    }

    const toast = new NlyToastPop({
      parent: $parent,
      propsData: {
        ...filterOptions(getComponentConfig("NlyToast") || {}),

        ...omit(props, keys(propsToSlots)),

        static: false,
        visible: true
      }
    });

    keys(propsToSlots).forEach(prop => {
      let value = props[prop];
      if (!isUndefined(value)) {
        if (prop === "title" && isString(value)) {
          value = [$parent.$createElement("strong", { class: "mr-2" }, value)];
        }
        toast.$slots[propsToSlots[prop]] = concat(value);
      }
    });

    const div = document.createElement("div");
    document.body.appendChild(div);
    toast.$mount(div);
  };

  class NlyaToast {
    constructor(vm) {
      assign(this, { _vm: vm, _root: vm.$root });

      defineProperties(this, {
        _vm: readonlyDescriptor(),
        _root: readonlyDescriptor()
      });
    }

    toast(content, options = {}) {
      if (!content || warnNotClient(PROP_NAME)) {
        return;
      }
      makeToast({ ...filterOptions(options), toastContent: content }, this._vm);
    }

    show(id) {
      if (id) {
        this._root.$emit("nlya::show::toast", id);
      }
    }

    hide(id = null) {
      this._root.$emit("nlya::hide::toast", id);
    }
  }

  Vue.mixin({
    beforeCreate() {
      this[PROP_NAME_PRIV] = new NlyaToast(this);
    }
  });

  // eslint-disable-next-line no-prototype-builtins
  if (!Vue.prototype.hasOwnProperty(PROP_NAME)) {
    defineProperty(Vue.prototype, PROP_NAME, {
      get() {
        if (!this || !this[PROP_NAME_PRIV]) {
          warn(
            `"${PROP_NAME}" must be accessed from a Vue instance "this" context.`,
            "NlyToast"
          );
        }
        return this[PROP_NAME_PRIV];
      }
    });
  }
};

export const NLYAToastPlugin = nlyPluginFactory({
  plugins: { plugin }
});
