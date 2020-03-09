import { nlyPluginFactory } from "../../utils/plugins";
import { NlyControlSidebarContainer } from "./control-sidebar-container";
import { NlyControlSidebar } from "./control-sidebar";

const controlSidebarPlugin = nlyPluginFactory({
  components: {
    NlyControlSidebarContainer,
    NlyControlSidebar
  }
});

export { controlSidebarPlugin, NlyControlSidebarContainer, NlyControlSidebar };
