import Vue from "../utils/vue";
import { nlyGetOptionsByKeyEqual } from "../utils/get-options";

const name = "NlyButtonGroupMixins";

const sizeOptions = {
  sm: "btn-group-sm",
  lg: "btn-group-lg"
};
export const NlyButtonGroupMixins = Vue.extend({
  name: name,
  props: {
    vertical: {
      type: Boolean
    },
    size: {
      type: String
    },
    tag: {
      type: String,
      default: "div"
    }
  },
  computed: {
    customVertical: function() {
      return this.vertical ? "btn-group-vertical" : "btn-group";
    },
    customSize: function() {
      return nlyGetOptionsByKeyEqual(sizeOptions, this.size);
    },
    customTag: function() {
      return this.tag;
    }
  }
});
