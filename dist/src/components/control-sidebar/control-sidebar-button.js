// import Vue from "../../utils/vue";
// import { nlyGetOptionsByKeyEqual } from "../../utils/get-options";
// import { bgVariantOptions } from "../../utils/nly-config";

// const name = "NlyControlSidebarButton";

// export const NlyControlSidebarButton = Vue.extend({
//   name: name,
//   props: {
//     bgVariant: {
//       type: String
//     }
//   },
//   computed: {
//     customProps: function() {
//       return {
//         bgVariant: nlyGetOptionsByKeyEqual(bgVariantOptions, this.bgVariant)
//       };
//     }
//   },
//   methods: {
//     mouseenterFunc() {
//       this.$el.classList.remove("elevation-2");
//       this.$el.classList.add("elevation-4");
//       this.$el.style.opacity = "1";
//     },
//     mouseleaveFunc() {
//       this.$el.classList.remove("elevation-4");
//       this.$el.classList.add("elevation-2");
//       this.$el.style.opacity = "0.8";
//     }
//   },
//   render(h) {
//     return h("div", {
//       class: [this.customProps.bgVariant, "elevation-2"],
//       style: {
//         width: "40px",
//         height: "20px",
//         borderRadius: "25px",
//         marginRight: "10px",
//         marginBottom: "10px",
//         opacity: "0.8",
//         cursor: "pointer"
//       },
//       on: {
//         ...this.$listeners,
//         mouseenter: this.mouseenterFunc,
//         mouseleave: this.mouseleaveFunc
//       }
//     });
//   }
// });

import Vue from "../../utils/vue";
import { nlyGetOptionsByKeyEqual } from "../../utils/get-options";
import { bgVariantOptions, bgGradientOptions } from "../../utils/nly-config";
import { mergeData } from "vue-functional-data-merge";

export const props = {
  bgVariant: {
    type: String
  },
  bgGradientVariant: {
    type: String
  },
  tag: {
    type: String,
    default: "div"
  },
  role: {
    type: String,
    default: "button"
  },
  controlButtonClass: {
    type: String
  },
  id: {
    type: [String, Number],
    required: true
  }
};

const customClass = props => {
  const bgVariant = () =>
    nlyGetOptionsByKeyEqual(bgVariantOptions, props.bgVariant);

  const bgGradientVariant = () =>
    nlyGetOptionsByKeyEqual(bgGradientOptions, props.bgGradientVariant);

  return [bgVariant(), bgGradientVariant(), props.controlButtonClass];
};

const safeId = props => `__nly_control_button_${props.id}__`;

const name = "NlyControlSidebarButton";

export const NlyControlSidebarButton = Vue.extend({
  name: name,
  props,
  functional: true,
  render(h, context) {
    return h(
      context.props.tag,
      mergeData(context.data, {
        staticClass: "elevation-2",
        class: customClass(context.props),
        style: {
          width: "40px",
          height: "20px",
          borderRadius: "25px",
          marginRight: "10px",
          marginBottom: "10px",
          opacity: "0.8",
          cursor: "pointer"
        },
        attrs: {
          role: context.props.role,
          id: safeId(context.props)
        },
        on: {
          mouseenter: () => {
            const id = safeId(context.props);
            const vnodes = document.querySelector(`#${id}`);
            vnodes.classList.remove("elevation-2");
            vnodes.classList.add("elevation-4");
            vnodes.style.opacity = "1";
          },
          mouseleave: () => {
            const id = safeId(context.props);
            const vnodes = document.querySelector(`#${id}`);
            vnodes.classList.remove("elevation-4");
            vnodes.classList.add("elevation-2");
            vnodes.style.opacity = "0.8";
          }
        }
      }),
      context.children
    );
  }
});
