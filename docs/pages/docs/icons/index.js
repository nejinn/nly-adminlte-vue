import { parseReadme } from "~/utils";
import NlyDocsMain from "~/components/nly-docs-main";
import NlyDocsQuickLinks from "~/components/NlyDocsQuickLinks";
import NlyDocsSection from "~/components/nly-docs-section";
import docsMixin from "~/plugins/docs-mixin";
import { defaultConfig } from "~/content";
import meta from "../../../../src/icons/package.json";
import readme from "../../../../src/icons/README.md";

const { titleLead, body } = parseReadme(readme);

// @vue/component
export default {
  name: "BDVDocs",
  layout: "docs",
  components: {
    NlyDocsMain,
    NlyDocsQuickLinks,
    NlyDocsSection
  },
  mixins: [docsMixin],
  data() {
    return {
      //   bootstrapVersion,
      //   bootstrapVersionMinor: bootstrapVersion.replace(minorRE, "$1"),
      //   bootstrapVersionMajor: bootstrapVersion.replace(majorRE, "$1"),
      defaultConfig,
      titleLead,
      body,
      readme
    };
  },
  computed: {
    // hrefBootstrapBrowserDevices() {
    //   const minorVersion = this.bootstrapVersionMinor;
    //   return `//getbootstrap.com/docs/${minorVersion}/getting-started/browsers-devices`;
    // },
    meta() {
      return meta;
    }
  },
  // We use a string template here so that the docs README can do interpolation
  template: `
    <NlyDocsMain>
      <NlyDocsSection tag="header">${titleLead}</NlyDocsSection>
      <NlyDocsQuickLinks key="quick-/docs"></NlyDocsQuickLinks>
      <NlyDocsSection>
        <nly-row><nly-col>${body}</nly-col></nly-row>
        <nly-row><nly-col></nly-col></nly-row>
      </NlyDocsSection>
    </NlyDocsMain>`
};
