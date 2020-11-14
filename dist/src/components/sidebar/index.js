import { nlyPluginFactory } from "../../utils/plugins";
import { NlySidebarContainer } from "./sidebar-container";
import { NlySidebarBrand } from "./sidebar-brand";
import { NlySidebarBrandimg } from "./sidebar-brandimg";
import { NlySidebarBrandtext } from "./siderbar-brandtext";
import { NlySidebar } from "./sidebar";
import { NlySidebarUserpanel } from "./sidebar-userpanel";
import { NlySidebarUserpanelImg } from "./sidebar-userpanel-img";
import { NlySidebarUserpanelInfo } from "./sidebar-userpanel-info";
import { NlySidebarNav } from "./sidebar-nav";
import { NlySidebarNavItem } from "./sidebar-nav-item";
import { NlySidebarNavTree } from "./sidebar-nav-tree";
import { NlySidebarNavHeader } from "./sidebar-nav-header";

const SidebarPlugin = nlyPluginFactory({
  components: {
    NlySidebarContainer,
    NlySidebarBrand,
    NlySidebarBrandimg,
    NlySidebarBrandtext,
    NlySidebar,
    NlySidebarUserpanel,
    NlySidebarUserpanelImg,
    NlySidebarUserpanelInfo,
    NlySidebarNav,
    NlySidebarNavItem,
    NlySidebarNavTree,
    NlySidebarNavHeader
  }
});

export {
  SidebarPlugin,
  NlySidebarContainer,
  NlySidebarBrand,
  NlySidebarBrandimg,
  NlySidebarBrandtext,
  NlySidebar,
  NlySidebarUserpanel,
  NlySidebarUserpanelImg,
  NlySidebarUserpanelInfo,
  NlySidebarNav,
  NlySidebarNavItem,
  NlySidebarNavTree,
  NlySidebarNavHeader
};
