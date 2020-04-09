import NlyAnchoredHeading from "../../../components/NlyAnchoredHeading";
import NlyImportDoc from "../../../components/NlyImportDoc";
import MainDocs from "~/components/main-docs";
import Section from "~/components/section";
import docsMixin from "~/plugins/docs-mixin";
import { directives as directivesMeta } from "~/content";

const getReadMe = name =>
  import(
    `~/../src/directives/${name}/README.md` /* webpackChunkName: "docs/directives" */
  );

// @vue/component
export default {
  name: "BDVDirectives",
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
      Section,
      { class: ["bd-component-reference"] },
      [
        // Heading
        h(
          NlyAnchoredHeading,
          { props: { id: "directive-reference" } },
          "Directive reference"
        ),
        // Directive importing information
        h(NlyImportDoc, { props: { meta: this.meta } })
      ]
    );

    return h(
      MainDocs,
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
