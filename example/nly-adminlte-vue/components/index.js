import { nlyPluginFactory } from "../utils/plugins";

import { badgePlugin } from "./badge";
import { buttonPlugin } from "./button";
import { cardPlugin } from "./card";
import { collapsePlugin } from "./collapse";
import { controlSidebarPlugin } from "./controlsidebar";
import { dropdownPlugin } from "./dropdown";
import { iconPlugin } from "./icon";
import { containerPlugin } from "./layout/container";
import { contentPlugin } from "./layout/content";
import { gridPlugin } from "./layout/grid";
import { wrapperPlugin } from "./layout/wrapper";
import { linkPlugin } from "./link";
import { navPlugin } from "./nav";
import { navbarPlugin } from "./navbar";
import { overlayPlugin } from "./overlay";
import { sidebarPlugin } from "./sidebar";
import { switchPlugin } from "./switch";
import { collapseSidebarPlugins } from "./layout/collapsesidebar";
import { toastPlugin } from "./toast";
import { spinnerPlugin } from "./spinner";
import { progressPlugin } from "./progress";
import { timelinePlugin } from "./timeline";
import { breadcrumbPlugin } from "./breadcrumb";
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
    badgePlugin,
    buttonPlugin,
    cardPlugin,
    collapsePlugin,
    controlSidebarPlugin,
    dropdownPlugin,
    iconPlugin,
    containerPlugin,
    contentPlugin,
    gridPlugin,
    wrapperPlugin,
    linkPlugin,
    navPlugin,
    navbarPlugin,
    overlayPlugin,
    sidebarPlugin,
    switchPlugin,
    collapseSidebarPlugins,
    toastPlugin,
    spinnerPlugin,
    progressPlugin,
    timelinePlugin,
    breadcrumbPlugin,
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
