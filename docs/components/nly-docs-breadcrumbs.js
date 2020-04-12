import { nav } from "~/content";
const navLookup = nav.reduce(
  (obj, section) => ({ ...obj, [section.base.replace("/", "")]: section }),
  {}
);

const name = "NlyDocsBreadcrumbs";
export default {
  name: name,
  computed: {
    items() {
      const items = [
        { text: "首页", to: "/", icon: "nlyfont nly-icon-breadcrumb-fill" },
        { text: "文档", to: "/docs", icon: "nlyfont nly-icon-news-fill" }
      ];

      const section = this.$route.name.split("-")[1] || "";
      if (section) {
        const sectionMeta = navLookup[section] || {};
        const sectionIcon =
          (sectionMeta.title || section) === "组件"
            ? "nlyfont nly-icon-logo-pinterest"
            : (sectionMeta.title || section) === "指令"
            ? "nlyfont nly-icon-analytics"
            : (sectionMeta.title || section) === "主题设置"
            ? "nlyfont nly-icon-color-palette"
            : (sectionMeta.title || section) === "其他"
            ? "nlyfont nly-icon-filing"
            : "nlyfont nly-icon-logo-codepen";

        items.push({
          text: sectionMeta.title || section,
          to: ["/docs", section].join("/"),
          icon: sectionIcon
        });

        const slug = this.$route.params.slug || "";
        if (slug) {
          const pagesMeta = sectionMeta.pages || {};

          items.push({
            text: (pagesMeta[slug] || {}).title || slug,
            to: ["/docs", section, slug].join("/")
          });
        }
      }

      return items;
    }
  },
  render(h) {
    return h("nav", { attrs: { "aria-label": "Breadcrumbs" } }, [
      h("nly-breadcrumb", {
        staticClass: "d-inline-flex my-0 px-2 py-1 bg-transparent",
        props: {
          item: this.items
        }
      })
    ]);
  }
};
