import Vue from "../../utils/vue";
import { nlyGetOptionsByKeyEqual } from "../../utils/get-options";
import { btnGroupSizeOptions } from "../../utils/nly-config";

const name = "NlyButtonGroupMixins";

export const NlyButtonGroupMixins = Vue.extend({
  name: name,
  props: {
    vertical: {
      type: Boolean,
      default: false
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
      return nlyGetOptionsByKeyEqual(btnGroupSizeOptions, this.size);
    },
    customTag: function() {
      return this.tag;
    }
  }
});
