import NlyDocsSectionToc from "~/components/NlyDocsSectionToc";
import docsMixin from "~/plugins/docs-mixin";

// @vue/component
export default {
  name: "NlyDocsReferenceIndex",
  extends: NlyDocsSectionToc,
  mixins: [docsMixin]
};
