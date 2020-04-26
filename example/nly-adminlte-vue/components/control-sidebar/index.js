import { nlyPluginFactory } from "../../utils/plugins";
import { NlyControlSidebarContainer } from "./control-sidebar-container";
import { NlyControlSidebar } from "./control-sidebar";
import { NlyControlSidebarButton } from "./control-sidebar-button";
import { VNlyControlSidebarCollapse } from "../../directives/sidebar-collapse";

const ControlSidebarPlugin = nlyPluginFactory({
  components: {
    NlyControlSidebarContainer,
    NlyControlSidebar,
    NlyControlSidebarButton
  },
  directives: { VNlyControlSidebarCollapse }
});

export {
  ControlSidebarPlugin,
  NlyControlSidebarContainer,
  NlyControlSidebar,
  NlyControlSidebarButton
};
