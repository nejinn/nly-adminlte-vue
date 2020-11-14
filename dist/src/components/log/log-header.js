import Vue from "../../utils/vue";
import { mergeData } from "vue-functional-data-merge";

const name = "NlyLogHeader";

export const props = {
  title: {
    type: String
  },
  titleClass: {
    type: String
  },
  logHeaderClass: {
    type: String
  },
  tag: {
    type: String,
    default: "div"
  },
  titleTag: {
    type: String,
    default: "div"
  }
};

export const NlyLogHeader = Vue.extend({
  name: name,
  props,
  functional: true,
  computed: {
    customTitle() {
      return this.title;
    },
    customTitleClass() {
      return this.titleClass;
    },
    customHeaderClass() {
      return this.logHeaderClass;
    }
  },
  render(h, { props, data, children }) {
    const headerVnodes = () => {
      if (props.title) {
        return h(
          props.tag,
          mergeData(data, {
            staticClass: "nly-log-header",
            class: [props.logHeaderClass]
          }),
          [
            h(
              props.titleTag,
              {
                staticClass: "nly-log-header-title",
                class: [props.titleClass]
              },
              props.title
            ),
            children
          ]
        );
      } else {
        return h(
          props.tag,
          {
            staticClass: "nly-log-header",
            class: [props.logHeaderClass]
          },
          children
        );
      }
    };
    return headerVnodes();
  }
});
