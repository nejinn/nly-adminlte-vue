import NlyDocsAnchoredHeading from "../../../components/NlyDocsAnchoredHeading";
import NlyDocsImportDoc from "../../../components/NlyDocsImportDoc";
import NlyDocsMainDocs from "~/components/nly-docs-main-docs";
import NlyDocsSection from "~/components/nly-docs-section";
import docsMixin from "~/plugins/docs-mixin";
import { directives as directivesMeta } from "~/content";

const getReadMe = name =>
  import(
    `../../../../example/nly-adminlte-vue/directives/${name}/README.md` /* webpackChunkName: "docs/directives" */
  );

const name = "NlyDocsDirectives";
export default {
  name: name,
  layout: "docs",
  mixins: [docsMixin],
  validate({ params }) {
    return Boolean(directivesMeta[params.slug]);
  },
  async asyncData({ params }) {
    const readme = (await getReadMe(params.slug)).default;
    const meta = directivesMeta[params.slug];
    return { meta, readme };
  },
  render(h) {
    const $referenceSection = h(
      NlyDocsSection,
      { class: ["bd-component-reference"] },
      [
        // Heading
        h(
          NlyDocsAnchoredHeading,
          { props: { id: "directive-reference" } },
          "Directive reference"
        ),
        // Directive importing information
        h(NlyDocsImportDoc, { props: { meta: this.meta } })
      ]
    );

    return h(
      NlyDocsMainDocs,
      {
        staticClass: "bd-components",
        props: {
          readme: this.readme,
          meta: this.meta
        }
      },
      [$referenceSection]
    );
  }
};
