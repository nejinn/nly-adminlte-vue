import { nlyInstallFactory } from "./utils/plugins";
import { componentsPlugin } from "./components";
import { directivesPlugin } from "./directives";

const NAME = "NlyAdminlteVue";

const install = nlyInstallFactory({
  plugins: {
    componentsPlugin,
    directivesPlugin
  }
});

const NlyAdminlteVue = {
  install,
  NAME
};

export { install, NAME, NlyAdminlteVue };

export { BadgePlugin } from "./components/badge";
export { NlyBadge } from "./components/badge/badge";

export { BreadcrumbPlugin } from "./components/breadcrumb";
export { NlyBreadcrumbItem } from "./components/breadcrumb/breadcrumb-item";
export { NlyBreadcrumb } from "./components/breadcrumb/breadcrumb";

export { ButtonPlugin } from "./components/button";
export { NlyButton } from "./components/button/button";
export { NlyButtonClose } from "./components/button/button-close";

export { ButtonGroupPlugin } from "./components/button-group";
export { NlyButtonGroup } from "./components/button-group/button-group";

export { CardPlugin } from "./components/card";
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

export { CollapsePlugin } from "./components/collapse";
export { NlyCollapse } from "./components/collapse/collapse";
export { NlyCollapseTransition } from "./utils/collapse-transition";
export { NlyCollapseNoclass } from "./components/collapse/collapse-noclass";
export { NlyCollapseNoclassTransition } from "./utils/collapse-noclass-transition";

export { ContainerPlugin } from "./components/container";
export { NlyContainer } from "./components/container/container";

export { ContentPlugin } from "./components/content";
export { NlyContent } from "./components/content/content";
export { NlyContentHeader } from "./components/content/content-header";
export { NlyContentWrapper } from "./components/content/content-wrapper";

export { ControlSidebarPlugin } from "./components/control-sidebar";
export { NlyControlSidebarContainer } from "./components/control-sidebar/control-sidebar-container";
export { NlyControlSidebar } from "./components/control-sidebar/control-sidebar";
export { NlyControlSidebarButton } from "./components/control-sidebar/control-sidebar-button";

export { dropdownPlugin } from "./components/dropdown";
export { NlyDropdown } from "./components/dropdown/dropdown";
export { NlyDropdownMenu } from "./components/dropdown/dropdown-menu";

export { iconPlugin } from "./components/icon";
export { NlyIcon } from "./components/icon/icon";

export { GridPlugin } from "./components/grid";
export { NlyRow } from "./components/grid/row";
export { NlyCol } from "./components/grid/col";

export { WrapperPlugin } from "./components/wrapper";
export { NlyWrapper } from "./components/wrapper/wrapper";
export { NlyWrapperFooter } from "./components/wrapper/wrapper-footer";
export { NlyWrapperHeader } from "./components/wrapper/wrapper-header";
export { NlyWrapperSidebar } from "./components/wrapper/wrapper-sidebar";
export { NlyWrapperControlSidebar } from "./components/wrapper/wrapper-control-sidebar";
export { NlyWrapperContent } from "./components/wrapper/wrapper-content";

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

export { logPlugin } from "./components/log";
export { NlyLog } from "./components/log/log";
export { NlyLogHeader } from "./components/log/log-header";
export { NlyLogBody } from "./components/log/log-body";
export { NlyLogLine } from "./components/log/log-line";
export { NlyLogLineTree } from "./components/log/log-line-tree";
export { NlyLogTools } from "./components/log/log-tools";

export { TooltipPlugin } from "./components/tooltip";
export { NlyTooltip } from "./components/tooltip/tooltip";

export { VNlyTooltipPlugin } from "./directives/tooltip";
export { VNlyTooltip } from "./directives/tooltip/tooltip";

export { VNlyCardPlugin } from "./directives/card";
export { VNlyCardMaximized } from "./directives/card/maximized-card";

export { VNlyTogglePlugin } from "./directives/toggle";
export { VNlyToggle } from "./directives/toggle/toggle";

export { VNlyCollapseSidebarPlugin } from "./directives/sidebarcollapse";
export { VNlySidebarCollapse } from "./directives/sidebarcollapse/sidebar-collapse";
export { VNlyControlSidebarCollapse } from "./directives/sidebarcollapse/control-sidebar-collapse";

export { listGroupPlugin } from "./components/list-group";
export { NlyListGroup } from "./components/list-group/list-group";
export { NlyListGroupItem } from "./components/list-group/list-group-item";

export { modalPlugin } from "./components/modal";
export { NlyModal } from "./components/modal/modal";

export { VNlyModalPlugin } from "./directives/modal";
export { VNlyModal } from "./directives/modal/modal";

export { VNlyScrollspyPlugin } from "./directives/scrollspy";
export { VNlyScrollspy } from "./directives/scrollspy/scrollspy";

export default NlyAdminlteVue;
