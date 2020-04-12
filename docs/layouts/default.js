import NlyDocsFooter from "../components/NlyDocsFooter";
import NlyDocsHeader from "../components/NlyDocsHeader";

export default {
  name: "NlyDocsDefaultLayout",
  functional: true,
  render: h => [h(NlyDocsHeader), h("nuxt"), h(NlyDocsFooter)]
};
