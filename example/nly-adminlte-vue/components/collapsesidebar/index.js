import { nlyPluginFactory } from "../../utils/plugins";
import { NlyCollapseWrapper } from "./collapse-wrapper";
import { NlyCollapseHeader } from "./collapse-header";
import { NlyCollapseSidebar } from "./collapse-sidebar";
import { NlyCollapseMain } from "./collapse-main";
import { NlyCollapseFooter } from "./collapse-footer";

const CollapseSidebarPlugins = nlyPluginFactory({
  components: {
    NlyCollapseWrapper,
    NlyCollapseHeader,
    NlyCollapseSidebar,
    NlyCollapseMain,
    NlyCollapseFooter
  }
});
export {
  CollapseSidebarPlugins,
  NlyCollapseWrapper,
  NlyCollapseHeader,
  NlyCollapseSidebar,
  NlyCollapseMain,
  NlyCollapseFooter
};
