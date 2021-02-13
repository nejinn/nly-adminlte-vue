import { nlyPluginFactory } from "../utils/plugins";

import { BadgePlugin } from "./badge";
import { BootstrapPaginationPlugin } from "./bootstrap-pagination";
import { BreadcrumbPlugin } from "./breadcrumb";
import { ButtonPlugin } from "./button";
import { ButtonGroupPlugin } from "./button-group";
import { CardPlugin } from "./card";
import { CollapsePlugin } from "./collapse";
import { ContainerPlugin } from "./container";
import { ContentPlugin } from "./content";
import { ControlSidebarPlugin } from "./control-sidebar";
import { DropdownPlugin } from "./dropdown";
import { FormCheckboxPlugin } from "./form-checkbox";
import { FormDaterangepickerPlugin } from "./form-daterangepicker";
import { FormPlugin } from "./form";
import { FormGroupPlugin } from "./form-group";
import { FormInputPlugin } from "./form-input";
import { FormRadioPlugin } from "./form-radio/";
import { FormSelectPlugin } from "./form-select";
import { FormTagsPlugin } from "./form-tags";
import { GridPlugin } from "./grid";
import { InfoboxPlugin } from "./info-box";
import { InputGroupoPlugin } from "./input-group";
import { LinkPlugin } from "./link";
import { ListGroupPlugin } from "./list-group";
import { LogPlugin } from "./log";
import { ModalPlugin } from "./modal";
import { NavPlugin } from "./nav";
import { NavbarPlugin } from "./navbar";
import { OverlayPlugin } from "./overlay";
import { PaginationPlugin } from "./pagination";
import { PopoverPlugin } from "./popover";
import { ProgressPlugin } from "./progress";
import { SearchSelectPlugin } from "./search-select";
import { SidebarPlugin } from "./sidebar";
import { SpinnerPlugin } from "./spinner";
import { SwitchPlugin } from "./switch";
import { toastPlugin } from "./toast";
import { timelinePlugin } from "./timeline";
import { TablePlugin } from "./table";
import { TooltipPlugin } from "./tooltip";
import { RenderFunctionPlugin } from "./render-function";
import { TabsPlugin } from "./tabs";
import { TreePlugin } from "./tree";
import { WrapperPlugin } from "./wrapper";

export const componentsPlugin = nlyPluginFactory({
  plugins: {
    BadgePlugin,
    BootstrapPaginationPlugin,
    BreadcrumbPlugin,
    ButtonPlugin,
    ButtonGroupPlugin,
    CardPlugin,
    CollapsePlugin,
    ContainerPlugin,
    ContentPlugin,
    ControlSidebarPlugin,
    DropdownPlugin,
    FormCheckboxPlugin,
    FormDaterangepickerPlugin,
    FormPlugin,
    FormGroupPlugin,
    FormInputPlugin,
    FormRadioPlugin,
    FormSelectPlugin,
    FormTagsPlugin,
    GridPlugin,
    InputGroupoPlugin,
    TablePlugin,
    WrapperPlugin,
    LinkPlugin,
    ListGroupPlugin,
    NavPlugin,
    NavbarPlugin,
    OverlayPlugin,
    SidebarPlugin,
    SwitchPlugin,
    toastPlugin,
    SearchSelectPlugin,
    SpinnerPlugin,
    ProgressPlugin,
    PopoverPlugin,
    timelinePlugin,
    InfoboxPlugin,
    TooltipPlugin,
    TreePlugin,
    RenderFunctionPlugin,
    PaginationPlugin,
    LogPlugin,
    ModalPlugin,
    TabsPlugin
  }
});
