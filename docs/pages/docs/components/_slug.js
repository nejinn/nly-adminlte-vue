import NlyDocsAnchoredHeading from "../../../components/NlyDocsAnchoredHeading";
import NlyDocsComponentDoc from "~/components/NlyDocsComponentDoc";
import NlyDocsImportDoc from "../../../components/NlyDocsImportDoc";
import NlyDocsMainDocs from "~/components/nly-docs-main-docs";
import NlyDocsSection from "~/components/nly-docs-section";
import docsMixin from "~/plugins/docs-mixin";
import { components as componentsMeta } from "~/content";

const getReadMe = name =>
  import(
    `../../../../example/nly-adminlte-vue/components/${name}/README.md` /* webpackChunkName: "docs/components" */
  );

const name = "NlyDocsComponents";
export default {
  name: name,
  layout: "docs",
  mixins: [docsMixin],
  validate({ params }) {
    return Boolean(componentsMeta[params.slug]);
  },
  async asyncData({ params }) {
    const readme = (await getReadMe(params.slug)).default;
    const meta = componentsMeta[params.slug];
    return { meta, readme };
  },
  render(h) {
    // Reference section
    const $referenceSection = h(
      NlyDocsSection,
      { class: ["bd-component-reference"] },
      [
        // Heading
        h(
          NlyDocsAnchoredHeading,
          { props: { id: "component-reference" } },
          "组件参数"
        ),
        // Component reference information
        ...this.meta.components.map(
          ({
            component,
            events,
            rootEventListeners,
            slots,
            aliases,
            props: propsMeta,
            version
          }) =>
            h(NlyDocsComponentDoc, {
              props: {
                component,
                events,
                rootEventListeners,
                slots,
                aliases,
                propsMeta,
                version
              }
            })
        ),
        // Component importing information
        h(NlyDocsImportDoc, { props: { meta: this.meta } })
      ]
    );

    return h(
      NlyDocsMainDocs,
      {
        key: this.$route.path,
        staticClass: "bd-components",
        props: {
          readme: this.readme || "",
          meta: this.meta
        }
      },
      [$referenceSection]
    );
  }
};
