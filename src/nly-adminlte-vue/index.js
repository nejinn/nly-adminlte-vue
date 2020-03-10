import { nlyInstallFactory } from "./utils/plugins";
import { nlyComponentsPlugin } from "./components";
import { directivesPlugin } from "./directives";

const NAME = "NlyAdminlteVue";

const install = nlyInstallFactory({
  plugins: {
    nlyComponentsPlugin,
    directivesPlugin
  }
});

const NlyAdminlteVue = {
  install,
  NAME
};

export { install, NAME, NlyAdminlteVue };

export { badgePlugin } from "./components/badge";
export { NlyBadge } from "./components/badge";

export { buttonPlugin } from "./components/button";
export { NlyButtonGroup } from "./components/button";
export { NlyButton } from "./components/button";
export { NlyButtonClose } from "./components/button";

export { cardPlugin } from "./components/card";
export { NlyCardGroup } from "./components/card";
export { NlyCard } from "./components/card";
export { NlyCardHeader } from "./components/card";
export { NlyCardBody } from "./components/card";
export { NlyCardTitle } from "./components/card";
export { NlyCardFooter } from "./components/card";
export { NlyCardSubtitle } from "./components/card";
export { NlyCardImg } from "./components/card";
export { NlyCardTool } from "./components/card";
export { NlyCardText } from "./components/card";

export { collapsePlugin } from "./components/collapse";
export { NlyCollapse } from "./components/collapse";
export { NlyCollapseTransition } from "./components/collapse";
export { NlyCollapseNoclass } from "./components/collapse";
export { NlyCollapseNoclassTransition } from "./components/collapse";

export { controlSidebarPlugin } from "./components/controlsidebar";
export { NlyControlSidebarContainer } from "./components/controlsidebar";
export { NlyControlSidebar } from "./components/controlsidebar";

export { dropdownPlugin } from "./components/dropdown";
export { NlyDropdown } from "./components/dropdown";
export { NlyDropdownMenu } from "./components/dropdown";

export { iconPlugin } from "./components/icon";
export { NlyIcon } from "./components/icon";

export { containerPlugin } from "./components/layout/container";
export { NlyContainer } from "./components/layout/container";

export { contentPlugin } from "./components/layout/content";
export { NlyContent } from "./components/layout/content";
export { NlyContentHeader } from "./components/layout/content";
export { NlyContentWrapper } from "./components/layout/content";

export { gridPlugin } from "./components/layout/grid";
export { NlyRow } from "./components/layout/grid";
export { NlyCol } from "./components/layout/grid";

export { wrapperPlugin } from "./components/layout/wrapper";
export { NlyContainerWrapper } from "./components/layout/wrapper";
export { NlyWrapper } from "./components/layout/wrapper";

export { linkPlugin } from "./components/link";
export { NlyLink } from "./components/link";

export { navPlugin } from "./components/nav";
export { NlyNav } from "./components/nav";
export { NlyNavItem } from "./components/nav";
export { NlyNavDropdown } from "./components/nav";

export { navbarPlugin } from "./components/navbar";
export { NlyNavbar } from "./components/navbar";
export { NlyNavbarNav } from "./components/navbar";
export { NlyNavbarBrand } from "./components/navbar";
export { NlyNavbarBrandtext } from "./components/navbar";
export { NlyNavbarToggle } from "./components/navbar";

export { overlayPlugin } from "./components/overlay";
export { NlyOverlay } from "./components/overlay";

export { progressPlugin } from "./components/progress";
export { NlyProgress } from "./components/progress";
export { NlyProgressBar } from "./components/progress";

export { sidebarPlugin } from "./components/sidebar";
export { NlySidebarContainer } from "./components/sidebar";
export { NlySidebarBrand } from "./components/sidebar";
export { NlySidebarBrandimg } from "./components/sidebar";
export { NlySidebarBrandtext } from "./components/sidebar";
export { NlySidebar } from "./components/sidebar";
export { NlySidebarUserpanel } from "./components/sidebar";
export { NlySidebarUserpanelImg } from "./components/sidebar";
export { NlySidebarUserpanelInfo } from "./components/sidebar";
export { NlySidebarNav } from "./components/sidebar";
export { NlySidebarNavItem } from "./components/sidebar";
export { NlySidebarNavTree } from "./components/sidebar";
export { NlySidebarNavHeader } from "./components/sidebar";

export { spinnerPlugin } from "./components/spinner";
export { NlySpinner } from "./components/spinner";

export { switchPlugin } from "./components/switch";
export { NlySwitch } from "./components/switch";
export { NlyBootstrapSwitch } from "./components/switch";

export { toastPlugin } from "./components/toast";
export { NlyToast } from "./components/toast";
export { NlyToaster } from "./components/toast";
export { NLYAToastPlugin } from "./components/toast";

export { cardDirectivePlugin } from "./directives/card";
export { NlyCardMaximized } from "./directives/card";

export { collapseSidebarPlugins } from "./components/layout/collapsesidebar";

export { toggleDirectivePlugin } from "./directives/toggle";
export { NlyToggle } from "./directives/toggle";

export { collapseSidebarDirectivePlugin } from "./directives/sidebarcollapse";
export { NlySidebarCollapse } from "./directives/sidebarcollapse";
export { NlyControlSidebarCollapse } from "./directives/sidebarcollapse";

export default NlyAdminlteVue;
