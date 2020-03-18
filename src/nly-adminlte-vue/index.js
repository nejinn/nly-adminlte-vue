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
export { NlyBadge } from "./components/badge/badge";

export { buttonPlugin } from "./components/button";
export { NlyButtonGroup } from "./components/button/button-group";
export { NlyButton } from "./components/button/button";
export { NlyButtonClose } from "./components/button/button-close";

export { cardPlugin } from "./components/card";
export { NlyCardGroup } from "./components/card/card-group";
export { NlyCard } from "./components/card/card";
export { NlyCardHeader } from "./components/card/card-header";
export { NlyCardBody } from "./components/card/card-body";
export { NlyCardTitle } from "./components/card/card-title";
export { NlyCardFooter } from "./components/card/card-footer";
export { NlyCardSubtitle } from "./components/card/card-subtitle";
export { NlyCardImg } from "./components/card/card-img";
export { NlyCardTool } from "./components/card/card-tool";
export { NlyCardText } from "./components/card/card-text";

export { collapsePlugin } from "./components/collapse";
export { NlyCollapse } from "./components/collapse/collapse";
export { NlyCollapseTransition } from "./utils/collapse-transition";
export { NlyCollapseNoclass } from "./components/collapse/collapse-noclass";
export { NlyCollapseNoclassTransition } from "./utils/collapse-noclass-transition";

export { controlSidebarPlugin } from "./components/controlsidebar";
export { NlyControlSidebarContainer } from "./components/controlsidebar/control-sidebar-container";
export { NlyControlSidebar } from "./components/controlsidebar/control-sidebar";
export { NlyControlSidebarButton } from "./components/controlsidebar/control-sidebar-button";

export { dropdownPlugin } from "./components/dropdown";
export { NlyDropdown } from "./components/dropdown/dropdown";
export { NlyDropdownMenu } from "./components/dropdown/dropdown-menu";

export { iconPlugin } from "./components/icon";
export { NlyIcon } from "./components/icon/icon";

export { containerPlugin } from "./components/layout/container";
export { NlyContainer } from "./components/layout/container/container";

export { contentPlugin } from "./components/layout/content";
export { NlyContent } from "./components/layout/content/content";
export { NlyContentHeader } from "./components/layout/content/content-header";
export { NlyContentWrapper } from "./components/layout/content/content-wrapper";

export { gridPlugin } from "./components/layout/grid";
export { NlyRow } from "./components/layout/grid/row";
export { NlyCol } from "./components/layout/grid/col";

export { wrapperPlugin } from "./components/layout/wrapper";
export { NlyContainerWrapper } from "./components/layout/wrapper/container-wrapper";
export { NlyWrapper } from "./components/layout/wrapper/wrapper";

export { linkPlugin } from "./components/link";
export { NlyLink } from "./components/link/link";

export { navPlugin } from "./components/nav";
export { NlyNav } from "./components/nav/nav";
export { NlyNavItem } from "./components/nav/nav-item";
export { NlyNavDropdown } from "./components/nav/nav-dropdown";

export { navbarPlugin } from "./components/navbar";
export { NlyNavbar } from "./components/navbar/navbar";
export { NlyNavbarNav } from "./components/navbar/navbar-nav";
export { NlyNavbarBrand } from "./components/navbar/navbar-brand";
export { NlyNavbarBrandtext } from "./components/navbar/navbar-brandtext";
export { NlyNavbarToggle } from "./components/navbar/navbar-toggle";

export { overlayPlugin } from "./components/overlay";
export { NlyOverlay } from "./components/overlay/overlay";

export { progressPlugin } from "./components/progress";
export { NlyProgress } from "./components/progress/progress";
export { NlyProgressBar } from "./components/progress/progress-bar";
export { NlyProgressDescription } from "./components/progress/progress-description";

export { sidebarPlugin } from "./components/sidebar";
export { NlySidebarContainer } from "./components/sidebar/sidebar-container";
export { NlySidebarBrand } from "./components/sidebar/sidebar-brand";
export { NlySidebarBrandimg } from "./components/sidebar/sidebar-brandimg";
export { NlySidebarBrandtext } from "./components/sidebar/siderbar-brandtext";
export { NlySidebar } from "./components/sidebar/sidebar";
export { NlySidebarUserpanel } from "./components/sidebar/sidebar-userpanel";
export { NlySidebarUserpanelImg } from "./components/sidebar/sidebar-userpanel-img";
export { NlySidebarUserpanelInfo } from "./components/sidebar/sidebar-userpanel-info";
export { NlySidebarNav } from "./components/sidebar/sidebar-nav";
export { NlySidebarNavItem } from "./components/sidebar/sidebar-nav-item";
export { NlySidebarNavTree } from "./components/sidebar/sidebar-nav-tree";
export { NlySidebarNavHeader } from "./components/sidebar/sidebar-nav-header";

export { spinnerPlugin } from "./components/spinner";
export { NlySpinner } from "./components/spinner/spinner";

export { switchPlugin } from "./components/switch";
export { NlySwitch } from "./components/switch/switch";
export { NlyBootstrapSwitch } from "./components/switch/bootstrap-switch";

export { toastPlugin } from "./components/toast";
export { NlyToast } from "./components/toast/toast";
export { NlyToaster } from "./components/toast/toaster";
export { NLYAToastPlugin } from "./components/toast/";

export { timelinePlugin } from "./components/timeline";
export { NlyTimeline } from "./components/timeline/timeline";
export { NlyTimelineLabel } from "./components/timeline/timeline-label";
export { NlyTimelineContent } from "./components/timeline/timeline-content";
export { NlyTimelineItem } from "./components/timeline/timeline-item";
export { NlyTimelineHeader } from "./components/timeline/timeline-header";
export { NlyTimelineBody } from "./components/timeline/timeline-body";
export { NlyTimelineFooter } from "./components/timeline/timeline-footer";

export { breadcrumbPlugin } from "./components/breadcrumb";
export { NlyBreadcrumbItem } from "./components/breadcrumb/breadcrumb-item";
export { NlyBreadcrumb } from "./components/breadcrumb/breadcrumb";

export { infoboxPlugin } from "./components/info-box";
export { NlyInfobox } from "./components/info-box/infobox";
export { NlyInfoboxIcon } from "./components/info-box/infobox-icon";
export { NlyInfoboxBody } from "./components/info-box/infobox-body";
export { NlyInfoboxText } from "./components/info-box/infobox-text";
export { NlyInfoboxNumber } from "./components/info-box/infobox-number";

export { paginationPlugin } from "./components/pagination";
export { NlyPagination } from "./components/pagination/pagination";

export { renderFunctionPlugin } from "./components/render-function";
export { NlyRenderFunction } from "./components/render-function/render-function";

export { tooltipPlugin } from "./components/tooltip";
export { NlyTooltip } from "./components/tooltip/tooltip";

export { cardDirectivePlugin } from "./directives/card";
export { NlyCardMaximized } from "./directives/card/maximized-card";

export { collapseSidebarPlugins } from "./components/layout/collapsesidebar";

export { toggleDirectivePlugin } from "./directives/toggle";
export { NlyToggle } from "./directives/toggle/toggle";

export { collapseSidebarDirectivePlugin } from "./directives/sidebarcollapse";
export { NlySidebarCollapse } from "./directives/sidebarcollapse/sidebar-collapse";
export { NlyControlSidebarCollapse } from "./directives/sidebarcollapse/control-sidebar-collapse";

export default NlyAdminlteVue;
