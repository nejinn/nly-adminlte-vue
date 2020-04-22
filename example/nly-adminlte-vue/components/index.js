import { nlyPluginFactory } from "../utils/plugins";

import { BadgePlugin } from "./badge";
import { BreadcrumbPlugin } from "./breadcrumb";
import { ButtonPlugin } from "./button";
import { ButtonGroupPlugin } from "./button-group";
import { CardPlugin } from "./card";
import { FormInputPlugin } from "./form-input";
import { collapsePlugin } from "./collapse";
import { ControlSidebarPlugin } from "./controlsidebar";
import { dropdownPlugin } from "./dropdown";
import { iconPlugin } from "./icon";
import { ContainerPlugin } from "./container";
import { ContentPlugin } from "./content";
import { GridPlugin } from "./grid";
import { WrapperPlugin } from "./wrapper";
import { linkPlugin } from "./link";
import { navPlugin } from "./nav";
import { navbarPlugin } from "./navbar";
import { overlayPlugin } from "./overlay";
import { sidebarPlugin } from "./sidebar";
import { switchPlugin } from "./switch";
import { CollapseSidebarPlugins } from "./collapsesidebar";
import { toastPlugin } from "./toast";
import { spinnerPlugin } from "./spinner";
import { progressPlugin } from "./progress";
import { timelinePlugin } from "./timeline";
import { infoboxPlugin } from "./info-box";
import { tablePlugin } from "./table";
import { tooltipPlugin } from "./tooltip";
import { renderFunctionPlugin } from "./render-function";
import { paginationPlugin } from "./pagination";
import { formPlguin } from "./form";
import { logPlugin } from "./log";
import { listGroupPlugin } from "./list-group";
import { modalPlugin } from "./modal";

export const componentsPlugin = nlyPluginFactory({
  plugins: {
    BadgePlugin,
    BreadcrumbPlugin,
    ButtonPlugin,
    ButtonGroupPlugin,
    CardPlugin,
    FormInputPlugin,
    collapsePlugin,
    ControlSidebarPlugin,
    dropdownPlugin,
    iconPlugin,
    ContainerPlugin,
    ContentPlugin,
    GridPlugin,
    WrapperPlugin,
    linkPlugin,
    navPlugin,
    navbarPlugin,
    overlayPlugin,
    sidebarPlugin,
    switchPlugin,
    CollapseSidebarPlugins,
    toastPlugin,
    spinnerPlugin,
    progressPlugin,
    timelinePlugin,
    infoboxPlugin,
    tablePlugin,
    tooltipPlugin,
    renderFunctionPlugin,
    paginationPlugin,
    formPlguin,
    logPlugin,
    listGroupPlugin,
    modalPlugin
  }
});
