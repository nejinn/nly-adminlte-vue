import { nlyPluginFactory } from "../../../utils/plugins";
import { NlyCollapseWrapper } from "./collapse-wrapper";
import { NlyCollapseHeader } from "./collapse-header";
import { NlyCollapseSidebar } from "./collapse-sidebar";
import { NlyCollapseMain } from "./collapse-main";
import { NlyCollapseFooter } from "./collapse-footer";

const collapseSidebarPlugins = nlyPluginFactory({
  components: {
    NlyCollapseWrapper,
    NlyCollapseHeader,
    NlyCollapseSidebar,
    NlyCollapseMain,
    NlyCollapseFooter
  }
});
export {
  collapseSidebarPlugins,
  NlyCollapseWrapper,
  NlyCollapseHeader,
  NlyCollapseSidebar,
  NlyCollapseMain,
  NlyCollapseFooter
};
