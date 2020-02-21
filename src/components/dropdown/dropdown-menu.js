import Vue from "../utils/vue";
{
  /* <div
  class="dropdown-menu"
  role="menu"
  x-placement="bottom-start"
  style="position: absolute; will-change: transform; top: 0px; left: 0px; transform: translate3d(68px, 38px, 0px);"
></div>; */
}

export var NlyDropdownMenu = Vue.extend({
  name: "NlyDropdownMenu",
  data() {
    return {
      domSize: {
        clientHeight: "",
        clientLeft: "",
        clientTop: "",
        clientWidth: ""
      }
    };
  },
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
    }
  },
  mounted() {
    this.$el.style.display = "block";
    this.domSize.clientHeight = this.$el.clientHeight;
    this.domSize.clientLeft = this.$el.clientLeft;
    this.domSize.clientTop = this.$el.clientTop;
    this.domSize.clientWidth = this.$el.clientWidth;

    console.log(this.domSize.clientLeft);
    this.$el.style.display = "";
    // console.log(this);
  },
  render(h) {
    return h(
      this.customTag,
      {
        attrs: {
          role: this.customRole
        },
        staticClass: "dropdown-menu"
      },
      this.$slots.default
    );
  }
});
