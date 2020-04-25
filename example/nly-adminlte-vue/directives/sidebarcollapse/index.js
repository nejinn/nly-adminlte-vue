import { nlyPluginFactory } from "../../utils/plugins";
import { VNlySidebarCollapse } from "./sidebar-collapse";
import { VNlyControlSidebarCollapse } from "./control-sidebar-collapse";

const VNlyCollapseSidebarPlugin = nlyPluginFactory({
  directives: {
    VNlySidebarCollapse,
    VNlyControlSidebarCollapse
  }
});

export {
  VNlyCollapseSidebarPlugin,
  VNlySidebarCollapse,
  VNlyControlSidebarCollapse
};
