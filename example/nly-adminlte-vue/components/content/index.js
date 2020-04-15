import { nlyPluginFactory } from "../../utils/plugins";
import { NlyContentWrapper } from "./content-wrapper";
import { NlyContentHeader } from "./content-header";
import { NlyContent } from "./content";

const ContentPlugin = nlyPluginFactory({
  components: {
    NlyContentWrapper,
    NlyContentHeader,
    NlyContent
  }
});
export { ContentPlugin, NlyContentWrapper, NlyContentHeader, NlyContent };
