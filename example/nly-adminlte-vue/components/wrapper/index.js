import { nlyPluginFactory } from "../../utils/plugins";
import { NlyWrapper } from "./wrapper";
import { NlyWrapperFooter } from "./wrapper-footer";
import { NlyWrapperHeader } from "./wrapper-header";
import { NlyWrapperSidebar } from "./wrapper-sidebar";
import { NlyWrapperControlSidebar } from "./wrapper-control-sidebar";
import { NlyWrapperContent } from "./wrapper-content";

const WrapperPlugin = nlyPluginFactory({
  components: {
    NlyWrapper,
    NlyWrapperFooter,
    NlyWrapperHeader,
    NlyWrapperSidebar,
    NlyWrapperControlSidebar,
    NlyWrapperContent
  }
});
export {
  WrapperPlugin,
  NlyWrapper,
  NlyWrapperFooter,
  NlyWrapperHeader,
  NlyWrapperSidebar,
  NlyWrapperControlSidebar,
  NlyWrapperContent
};
