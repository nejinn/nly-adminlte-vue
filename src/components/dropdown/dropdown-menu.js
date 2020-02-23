import Vue from "../utils/vue";
import { nlyDropdownMenuId } from "../utils/mixin-id";

export var NlyDropdownMenu = Vue.extend({
  name: "NlyDropdownMenu",
  props: {
    tag: {
      type: String,
      default: "div"
    },
    dropdownMenuClass: {
      type: String
    },
    role: {
      type: String,
      default: "menu"
    },
    id: {
      type: String,
      required: true
    }
  },
  computed: {
    customTag: function() {
      return this.tag;
    },
    customRole: function() {
      return this.role;
    },
    customDropdownMenuClass: function() {
      return this.dropdownMenuClass;
    },
    customId: function() {
      return nlyDropdownMenuId(this.id);
    }
  },
  mounted() {
    console.log(this);
  },
  render(h) {
    return h(
      this.customTag,
      {
        attrs: {
          role: this.customRole,
          id: this.customId
        },
        staticClass: "dropdown-menu"
      },
      this.$slots.default
    );
  }
});
