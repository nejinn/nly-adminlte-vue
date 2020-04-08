import Vue from "../../utils/vue";
import clonedeep from "lodash.clonedeep";

const name = "NlyRenderFunction";

export const NlyRenderFunction = Vue.extend({
  name: name,
  props: {
    contentToRender: Array,
    flat: Boolean
  },
  computed: {
    copiedContent() {
      return clonedeep(this.contentToRender);
    },
    content() {
      if (!this.flat) {
        return this.copiedContent;
      } else {
        return this.convertedContent[0];
      }
    },
    convertedContent() {
      return this.copiedContent.map(item => this.convertItem(item));
    }
  },
  methods: {
    convertItem(item) {
      if (typeof item === "string") {
        return item;
      }
      let newItem = [];
      newItem[0] = item._type;
      newItem[1] = {};
      newItem[1].props = this.getProps(item);

      this.$options.renderFunctionOptions.forEach(option => {
        //on option doesn't work, possible to use only nativeOn
        if (item[`_${option}`]) {
          newItem[1][option] = item[`_${option}`];
        }
      });

      if (item._children) {
        newItem[2] = item._children.map(item => this.convertItem(item));
      } else {
        newItem[2] = item._name;
      }
      return newItem;
    },
    getProps(item) {
      return Object.keys(item).reduce((itemProps, key) => {
        if (!key.includes("_")) {
          itemProps[key] = item[key];
        }
        return itemProps;
      }, {});
    }
  },
  renderFunctionOptions: [
    "attrs",
    "directives",
    "on",
    "nativeOn",
    "class",
    "style",
    "domProps",
    "scopedSlots",
    "slot",
    "key",
    "ref",
    "refInFor",
    "id"
  ],
  // eslint-disable-next-line no-unused-vars
  render() {
    const h = this.$createElement;
    let computeRenderFunction = renderFunction => {
      return renderFunction.map(item => {
        if (Array.isArray(item)) {
          return item.map(_children => {
            if (typeof _children === "string") {
              return _children;
            } else if (Array.isArray(_children)) {
              let el = h(...computeRenderFunction(_children));
              return el;
            } else if (_children.slot) {
              return this.$scopedSlots[_children.slot]();
            }
          });
        }
        return item;
      });
    };

    if (Array.isArray(this.content) && this.content.length) {
      return h(...computeRenderFunction(this.content));
    } else {
      return h(false);
    }
  }
});
