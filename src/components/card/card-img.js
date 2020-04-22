import Vue from "../../utils/vue";
import { mergeData } from "vue-functional-data-merge";

export const props = {
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
};

const customClass = props => {
  const top = props.top ? "card-img-top" : "";
  const buttom = props.buttom ? "card-img-buttom" : "";
  const baseClass = !props.top && !props.buttom ? "card-img" : "";
  const cardImgClass = props.cardImgClass;

  return [top, buttom, baseClass, cardImgClass];
};

const name = "NlyCardImg";

export const NlyCardImg = Vue.extend({
  name: name,
  props,
  functional: true,
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
  render(h, { props, data, children }) {
    return h(
      "img",
      mergeData(data, {
        class: customClass(props),
        src: props.src
      }),
      children
    );
  }
});
