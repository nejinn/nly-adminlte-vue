import Vue from "../../utils/vue";

const name = "NlyCardImg";

export const NlyCardImg = Vue.extend({
  name: name,
  props: {
    top: {
      type: Boolean,
      default: false
    },
    buttom: {
      type: Boolean,
      default: false
    },
    src: {
      type: String,
      required: true
    },
    cardImgClass: {
      type: String
    }
  },
  computed: {
    customProps: function() {
      return {
        customClass: this.top
          ? "card-img-top"
          : this.buttom
          ? "card-img-buttom"
          : "card-img",
        src: this.src,
        cardImgClass: this.cardImgClass
      };
    }
  },
  render(h) {
    return h("img", {
      class: [this.customProps.customClass, this.customProps.cardImgClass],
      attrs: {
        src: this.customProps.src
      }
    });
  }
});
