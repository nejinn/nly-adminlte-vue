import { nlyPluginFactory } from "../utils/plugins";

import { BadgePlugin } from "./badge";
import { BreadcrumbPlugin } from "./breadcrumb";
import { ButtonPlugin } from "./button";
import { ButtonGroupPlugin } from "./button-group";
import { CardPlugin } from "./card";
import { CollapsePlugin } from "./collapse";
import { ContainerPlugin } from "./container";
import { ContentPlugin } from "./content";
import { ControlSidebarPlugin } from "./control-sidebar";
import { DropdownPlugin } from "./dropdown";
import { FormPlugin } from "./form";
import { FormGroupPlugin } from "./form-group";
import { FormInputPlugin } from "./form-input";
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
import { switchPlugin } from "./switch";
import { toastPlugin } from "./toast";
import { timelinePlugin } from "./timeline";
import { TablePlugin } from "./table";
import { TooltipPlugin } from "./tooltip";
import { RenderFunctionPlugin } from "./render-function";
import { TabsPlugin } from "./tabs";
import { WrapperPlugin } from "./wrapper";
import { FormSelectPlugin } from "./form-select";

export const componentsPlugin = nlyPluginFactory({
  plugins: {
    BadgePlugin,
    BreadcrumbPlugin,
    ButtonPlugin,
    ButtonGroupPlugin,
    CardPlugin,
    CollapsePlugin,
    ContainerPlugin,
    ContentPlugin,
    ControlSidebarPlugin,
    DropdownPlugin,
    FormGroupPlugin,
    FormInputPlugin,
    FormSelectPlugin,
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
    switchPlugin,
    toastPlugin,
    SearchSelectPlugin,
    SpinnerPlugin,
    ProgressPlugin,
    PopoverPlugin,
    timelinePlugin,
    InfoboxPlugin,
    TooltipPlugin,
    RenderFunctionPlugin,
    PaginationPlugin,
    FormPlugin,
    LogPlugin,
    ModalPlugin,
    TabsPlugin
  }
});
