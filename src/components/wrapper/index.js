import { nlyPluginFactory } from "../../utils/plugins";
import { NlyWrapper } from "./wrapper";
import { NlyWrapperFooter } from "./wrapper-footer";
import { NlyWrapperHeader } from "./wrapper-header";
import { NlyWrapperControlSidebar } from "./wrapper-control-sidebar";
import { NlyWrapperContent } from "./wrapper-content";
import { VNlyControlSidebarCollapse } from "../../directives/sidebar-collapse";
import { VNlySidebarCollapse } from "../../directives/sidebar-collapse";

const WrapperPlugin = nlyPluginFactory({
  components: {
    NlyWrapper,
    NlyWrapperFooter,
    NlyWrapperHeader,
    NlyWrapperControlSidebar,
    NlyWrapperContent,
    directives: { VNlyControlSidebarCollapse, VNlySidebarCollapse }
  }
});

export {
  WrapperPlugin,
  NlyWrapper,
  NlyWrapperFooter,
  NlyWrapperHeader,
  NlyWrapperControlSidebar,
  NlyWrapperContent
};
