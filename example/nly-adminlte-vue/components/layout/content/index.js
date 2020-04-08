import { nlyPluginFactory } from "../../../utils/plugins";
import { NlyContentWrapper } from "./content-wrapper";
import { NlyContentHeader } from "./content-header";
import { NlyContent } from "./content";

const contentPlugin = nlyPluginFactory({
  components: {
    NlyContentWrapper,
    NlyContentHeader,
    NlyContent
  }
});
export { contentPlugin, NlyContentWrapper, NlyContentHeader, NlyContent };
