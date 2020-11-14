import NlyDocsMain from "~/components/nly-docs-main";
import NlyDocsQuickLinks from "./NlyDocsQuickLinks";
import NlyDocsSection from "~/components/nly-docs-section";
import { parseReadme } from "~/utils";
import { mergeData } from "vue-functional-data-merge";

export default {
  name: "NlyDocsMainDocs",
  functional: true,
  props: {
    tag: {
      type: String,
      default: "main"
    },
    readme: {
      type: String,
      default: ""
    },
    meta: {
      type: Object,
      default: null
    }
  },
  render(h, { props, data, children }) {
    const { tag, readme, meta } = props;
    const { titleLead, body } = parseReadme(readme || "");
    const { version } = meta || {};

    // Lead section
    const $leadSection = h(NlyDocsSection, {
      props: { tag: "header", play: false },
      domProps: { innerHTML: titleLead || "" }
    });

    // Available since section
    let $availableSinceSection = h();
    if (version) {
      $availableSinceSection = h(NlyDocsSection, { props: { play: false } }, [
        h("p", { staticClass: "font-italic" }, [
          h("code", { staticClass: "text-nowrap" }, `v${version}`),
          " 版本以上 nly-adminlte-vue 才有此组件 "
        ])
      ]);
    }

    // Quick links
    const $quickLinks = h(NlyDocsQuickLinks);

    // Body section
    const $bodySection = h(NlyDocsSection, {
      props: { play: true },
      domProps: { innerHTML: body || "" }
    });

    return h(NlyDocsMain, mergeData(data, { props: { tag } }), [
      $leadSection,
      $availableSinceSection,
      $quickLinks,
      $bodySection,
      children
    ]);
  }
};
