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

export { BootstrapPaginationPlugin } from "./components/bootstrap-pagination";
export { NlyBootstrapPagination } from "./components/bootstrap-pagination";

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

export { DropdownPlugin } from "./components/dropdown";
export { NlyDropdown } from "./components/dropdown/dropdown";
export { NlyDropdownDivider } from "./components/dropdown/dropdown-divider";
export { NlyDropdownForm } from "./components/dropdown/dropdown-form";
export { NlyDropdownGroup } from "./components/dropdown/dropdown-group";
export { NlyDropdownHeader } from "./components/dropdown/dropdown-header";
export { NlyDropdownItem } from "./components/dropdown/dropdown-item";
export { NlyDropdownItemButton } from "./components/dropdown/dropdown-item-button";
export { NlyDropdownText } from "./components/dropdown/dropdown-text";
export { NlyDropdownFooter } from "./components/dropdown/dropdown-footer";

export { FormDaterangepickerPlugin } from "./components/form-daterangepicker";
export { NlyFormDaterangepicker } from "./components/form-daterangepicker/form-daterangepicker";
export { VNlyAppendToBody } from "./components/form-daterangepicker/pulgin/append-to-body";
export { NlyCalendar } from "./components/form-daterangepicker/pulgin/calendar";
export { NlyCalendarRangs } from "./components/form-daterangepicker/pulgin/calendar-rangs";
export { NlyCalendarTime } from "./components/form-daterangepicker/pulgin/calendar-time";
export { NlyDaterangePickerTransition } from "./components/form-daterangepicker/pulgin/transition";

export { FormCheckboxPlugin } from "./components/form-checkbox";
export { NlyFormCheckbox } from "./components/form-checkbox/form-checkbox";
export { NlyFormCheckboxGroup } from "./components/form-checkbox/form-checkbox-group";

export { FormPlugin } from "./components/form";
export { NlyForm } from "./components/form/form";
export { NlyFormFeedback } from "./components/form/form-feedback";
export { NlyFormDatalist } from "./components/form/form-datalist";
export { NlyFormText } from "./components/form/form-text";

export { FormRadioPlugin } from "./components/form-radio";
export { NlyFormRadio } from "./components/form-radio/form-radio";
export { NlyFormRadioGroup } from "./components/form-radio/form-radio-group";

export { FormGroupPlugin } from "./components/form-group";
export { NlyFormGroup } from "./components/form-group/form-group";

export { FormInputPlugin } from "./components/form-input";
export { NlyFormInput } from "./components/form-input/form-input";

export { FormSelectPlugin } from "./components/form-select";
export { NlyFormSelect } from "./components/form-select/form-select";
export { NlyFormSelectOption } from "./components/form-select/form-select-option";
export { NlyFormSelectOptionGroup } from "./components/form-select/form-select-option-group";

export { FormTagsPlugin } from "./components/form-tags";
export { NlyFormTag } from "./components/form-tags/form-tag";
export { NlyFormTags } from "./components/form-tags/form-tags";

export { GridPlugin } from "./components/grid";
export { NlyRow } from "./components/grid/row";
export { NlyCol } from "./components/grid/col";

export { InfoboxPlugin } from "./components/info-box";
export { NlyInfobox } from "./components/info-box/infobox";
export { NlyInfoboxIcon } from "./components/info-box/infobox-icon";
export { NlyInfoboxBody } from "./components/info-box/infobox-body";
export { NlyInfoboxText } from "./components/info-box/infobox-text";
export { NlyInfoboxNumber } from "./components/info-box/infobox-number";

export { InputGroupoPlugin } from "./components/input-group";
export { NlyInputGroupText } from "./components/input-group/input-group-text";
export { NlyInputGroup } from "./components/input-group/input-group";
export { NlyInputGroupPrepend } from "./components/input-group/input-group-prepend";
export { NlyInputGroupAppend } from "./components/input-group/input-group-append";
export { NlyInputGroupAdd } from "./components/input-group/input-group-add";

export { LinkPlugin } from "./components/link";
export { NlyLink } from "./components/link/link";

export { ListGroupPlugin } from "./components/list-group";
export { NlyListGroup } from "./components/list-group/list-group";
export { NlyListGroupItem } from "./components/list-group/list-group-item";

export { LogPlugin } from "./components/log";
export { NlyLog } from "./components/log/log";
export { NlyLogHeader } from "./components/log/log-header";
export { NlyLogBody } from "./components/log/log-body";
export { NlyLogLine } from "./components/log/log-line";
export { NlyLogLineTree } from "./components/log/log-line-tree";
export { NlyLogTools } from "./components/log/log-tools";

export { ModalPlugin } from "./components/modal";
export { NlyModal } from "./components/modal/modal";

export { NavPlugin } from "./components/nav";
export { NlyNav } from "./components/nav/nav";
export { NlyNavItem } from "./components/nav/nav-item";
export { NlyNavDropdown } from "./components/nav/nav-dropdown";
export { NlyNavForm } from "./components/nav/nav-form";
export { NlyNavText } from "./components/nav/nav-text";

export { NavbarPlugin } from "./components/navbar";
export { NlyNavbar } from "./components/navbar/navbar";
export { NlyNavbarNav } from "./components/navbar/navbar-nav";
export { NlyNavbarBrand } from "./components/navbar/navbar-brand";
export { NlyNavbarBrandtext } from "./components/navbar/navbar-brandtext";
export { NlyNavbarToggle } from "./components/navbar/navbar-toggle";

export { OverlayPlugin } from "./components/overlay";
export { NlyOverlay } from "./components/overlay/overlay";

export { PaginationPlugin } from "./components/pagination";
export { NlyPagination } from "./components/pagination/pagination";

export { PopoverPlugin } from "./components/popover";
export { NlyPopover } from "./components/popover/popover";

export { ProgressPlugin } from "./components/progress";
export { NlyProgress } from "./components/progress/progress";
export { NlyProgressBar } from "./components/progress/progress-bar";
export { NlyProgressDescription } from "./components/progress/progress-description";

export { RenderFunctionPlugin } from "./components/render-function";
export { NlyRenderFunction } from "./components/render-function/render-function";

export { SidebarPlugin } from "./components/sidebar";
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
export { NlySidebarMenu } from "./components/sidebar/sidebar-menu";

export { SpinnerPlugin } from "./components/spinner";
export { NlySpinner } from "./components/spinner/spinner";

export { SwitchPlugin } from "./components/switch";
export { NlySwitch } from "./components/switch/switch";
export { NlyBootstrapSwitch } from "./components/switch/bootstrap-switch";

export { TablePlugin } from "./components/table";
export { TableSimplePlugin } from "./components/table";
export { TableLitePlugin } from "./components/table";
export { NlyTable } from "./components/table/table";
export { NlyTableLite } from "./components/table/table-lite";
export { NlyTableSimple } from "./components/table/table-simple";
export { NlyTbody } from "./components/table/tbody";
export { NlyTd } from "./components/table/td";
export { NlyTfoot } from "./components/table/tfoot";
export { NlyTh } from "./components/table/th";
export { NlyThead } from "./components/table/thead";
export { NlyTr } from "./components/table/tr";

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

export { TooltipPlugin } from "./components/tooltip";
export { NlyTooltip } from "./components/tooltip/tooltip";

export { TreePlugin } from "./components/tree";
export { NlyTree } from "./components/tree/tree";
export { NlyTreeItem } from "./components/tree/tree-item";
export { NlyTreeItemTree } from "./components/tree/tree-item-tree";

export { WrapperPlugin } from "./components/wrapper";
export { NlyWrapper } from "./components/wrapper/wrapper";
export { NlyWrapperFooter } from "./components/wrapper/wrapper-footer";
export { NlyWrapperHeader } from "./components/wrapper/wrapper-header";
export { NlyWrapperControlSidebar } from "./components/wrapper/wrapper-control-sidebar";
export { NlyWrapperContent } from "./components/wrapper/wrapper-content";

export { VNlyPopoverPlugin } from "./directives/popover";
export { VNlyPopover } from "./directives/popover/popover";

export { VNlyTooltipPlugin } from "./directives/tooltip";
export { VNlyTooltip } from "./directives/tooltip/tooltip";

export { VNlyCardPlugin } from "./directives/card";
export { VNlyCardMaximized } from "./directives/card/maximized-card";

export { VNlyTogglePlugin } from "./directives/toggle";
export { VNlyToggle } from "./directives/toggle/toggle";

export { VNlyCollapseSidebarPlugin } from "./directives/sidebar-collapse";
export { VNlySidebarCollapse } from "./directives/sidebar-collapse/sidebar-collapse";
export { VNlyControlSidebarCollapse } from "./directives/sidebar-collapse/control-sidebar-collapse";

export { VNlyModalPlugin } from "./directives/modal";
export { VNlyModal } from "./directives/modal/modal";

export { VNlyScrollspyPlugin } from "./directives/scrollspy";
export { VNlyScrollspy } from "./directives/scrollspy/scrollspy";

export { TabsPlugin } from "./components/tabs";
export { NlyTab } from "./components/tabs/tab";
export { NlyTabs } from "./components/tabs/tabs";

export { NlyAdminlteVueIcons } from "./icon";

export default NlyAdminlteVue;
