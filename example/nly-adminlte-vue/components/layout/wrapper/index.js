import { nlyPluginFactory } from "../../../utils/plugins";
import { NlyContainerWrapper } from "./container-wrapper";
import { NlyWrapper } from "./wrapper";

const wrapperPlugin = nlyPluginFactory({
  components: {
    NlyContainerWrapper,
    NlyWrapper
  }
});
export { wrapperPlugin, NlyContainerWrapper, NlyWrapper };
