import NlyDocsBreadcrumbs from "../components/nly-docs-breadcrumbs";
import NlyDocsFeedback from "../components/nly-docs-feedback";
import NlyDocsFooter from "../components/NlyDocsFooter";
import NlyDocsHeader from "../components/NlyDocsHeader";
import NlyDocsSearch from "../components/NlyDocsSearch";
import NlyDocsSidebar from "~/components/NlyDocsSidebar";
import NlyDocsToc from "~/components/NlyDocsToc";

const name = "NlyDocsLayout";
export default {
  name: name,
  data() {
    return {
      hasToc: false
    };
  },
  created() {
    this.$root.$on("docs-set-toc", toc => {
      // Only needed so we can set/clear aria-hidden on the TOC nav wrapper
      this.hasToc = Boolean(toc && toc.toc);
    });
  },
  render(h) {
    // Header
    const $header = h(NlyDocsHeader);

    // Sidebar column
    const $sidebarCol = h(
      "nly-col",
      {
        staticClass: "bd-sidebar border-bottom-0",
        props: { xs: "12", md: "3", xl: "2" }
      },
      [h(NlyDocsSearch), h(NlyDocsSidebar)]
    );

    // Content column
    const $contentCol = h(
      "nly-col",
      {
        staticClass: "bd-content",
        class: ["pb-md-3", "pl-md-5"],
        props: { xs: "12", md: "9", xl: "8" }
      },
      [
        h(NlyDocsBreadcrumbs, {
          class: ["float-left", "mt-2", "mb-0", "mb-lg-2"]
        }),
        h(NlyDocsFeedback, {
          class: ["float-right", "mt-2", "mb-0", "mb-lg-2"]
        }),
        h("div", { class: ["clearfix", "d-block"], ref: "clearfix" }),
        h("nuxt")
      ]
    );

    // TOC column
    const $tocCol = h(
      "nly-col",
      {
        staticClass: "bd-toc",
        class: ["d-none", "d-xl-block"],
        props: { tag: "nav", xl: "2" },
        attrs: {
          "aria-label": "Secondary navigation",
          "aria-hidden": this.hasToc ? null : "true"
        }
      },
      [h(NlyDocsToc)]
    );

    // Container
    const $container = h("nly-container", { props: { fluid: true } }, [
      h("nly-row", { class: ["flex-xl-nowrap2"] }, [
        $sidebarCol,
        $contentCol,
        $tocCol
      ])
    ]);

    // Footer
    const $footer = h(NlyDocsFooter, { props: { isDocs: true } });

    return h("div", [$header, $container, $footer]);
  }
};
