const name = "NlyDocsFeedback";
export default {
  name: name,
  data() {
    return {
      baseUrl: "https://github.com/nejinn/nly-adminlte-vue"
    };
  },
  computed: {
    show() {
      const name = this.$route.name;
      const slug = this.$route.params.slug;
      return slug || name === "docs" || name === "docs-icons";
    },
    reportIssueUrl() {
      // Select issue template
      return `${this.baseUrl}/issues/new?template=DOCS_ISSUE_TEMPLATE.md`;
    },
    editPageUrl() {
      const name = this.$route.name;
      const slug = this.$route.params.slug;
      let path = "";
      if (name === "docs") {
        path = `docs/markdown/intro/README.md`;
      } else if (name === "docs-components-slug") {
        path = `src/components/${slug}/README.md`;
      } else if (name === "docs-icons") {
        path = `src/icons/README.md`;
      } else if (name === "docs-directives-slug") {
        path = `src/directives/${slug}/README.md`;
      } else if (name === "docs-reference-slug") {
        path = `docs/markdown/reference/${slug}/README.md`;
      } else if (name === "docs-misc-slug") {
        if (slug === "changelog") {
          path = "CHANGELOG.md";
        } else if (slug === "contributing") {
          path = "CONTRIBUTING.md";
        } else if (slug === "settings") {
          path = "docs/markdown/misc/settings/README.md";
        }
      }
      return `${this.baseUrl}/tree/dev/${path}`;
    }
  },
  render(h) {
    if (!this.show) {
      return h();
    }
    const $reportIssueButton = h(
      "nly-button",
      {
        props: {
          variant: "outlineInfo",
          href: this.reportIssueUrl,
          target: "_blank"
        }
      },
      "提交 issue"
    );
    const $editPageButton = h(
      "nly-button",
      {
        props: {
          variant: "outlineInfo",
          href: this.editPageUrl,
          target: "_blank"
        }
      },
      "修改本页"
    );
    return h("nly-button-group", { props: { size: "sm" } }, [
      $reportIssueButton,
      $editPageButton
    ]);
  }
};
