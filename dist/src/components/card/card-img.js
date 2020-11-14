import Vue from "../../utils/vue";
import { mergeData } from "vue-functional-data-merge";

export const props = {
  top: {
    type: Boolean,
    default: false
  },
  bottom: {
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
  const bottom = props.bottom ? "card-img-bottom" : "";
  const baseClass = !props.top && !props.bottom ? "card-img" : "";
  const cardImgClass = props.cardImgClass;

  return [top, bottom, baseClass, cardImgClass];
};

const name = "NlyCardImg";

export const NlyCardImg = Vue.extend({
  name: name,
  props,
  functional: true,
  render(h, { props, data, children }) {
    return h(
      "img",
      mergeData(data, {
        class: customClass(props),
        attrs: {
          src: props.src
        }
      }),
      children
    );
  }
});
