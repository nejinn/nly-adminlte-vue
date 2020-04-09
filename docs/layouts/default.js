import Footer from "~/components/footer";
import NlyHeader from "../components/NlyHeader";

export default {
  name: "BVDefaultLayout",
  functional: true,
  render: h => [h(NlyHeader), h("nuxt"), h(Footer)]
};
