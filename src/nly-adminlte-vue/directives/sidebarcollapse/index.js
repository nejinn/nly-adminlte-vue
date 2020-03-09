import { nlyPluginFactory } from "../../utils/plugins";
import { NlySidebarCollapse } from "./sidebar-collapse";
import { NlyControlSidebarCollapse } from "./control-sidebar-collapse";

const collapseSidebarDirectivePlugin = nlyPluginFactory({
  directives: {
    NlySidebarCollapse,
    NlyControlSidebarCollapse
  }
});

export {
  collapseSidebarDirectivePlugin,
  NlySidebarCollapse,
  NlyControlSidebarCollapse
};
