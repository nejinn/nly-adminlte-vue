import { mergeData } from "vue-functional-data-merge";

const name = "NlyDocsAnchoredHeading";
export default {
  name: name,
  functional: true,
  props: {
    id: {
      type: String,
      default: ""
    },
    level: {
      type: [Number, String],
      default: 2
    }
  },
  render(h, { props, data, children }) {
    const $anchor = h(
      "nly-link",
      {
        staticClass: "anchorjs-link",
        props: { to: { hash: `#${props.id}` } },
        attrs: {
          "aria-labelledby": props.id || null,
          "aria-label": props.id ? null : "Anchor"
        }
      },
      [h()]
    );
    const $content = h(
      "span",
      { staticClass: "bd-content-title font-weight-bolder" },
      [children, $anchor]
    );
    return h(
      `h${props.level}`,
      mergeData(data, {
        staticClass: "nly-no-focus-ring",
        attrs: {
          id: props.id,
          tabindex: "-1"
        }
      }),
      [$content]
    );
  }
};
