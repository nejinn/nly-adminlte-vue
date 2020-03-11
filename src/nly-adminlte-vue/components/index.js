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

export const nlyComponentsPlugin = nlyPluginFactory({
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
    breadcrumbPlugin
  }
});
