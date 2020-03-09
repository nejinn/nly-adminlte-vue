// import { collapseSidebarComponents } from "./components/layout/collapsesidebar";
// import { navbarPlugin } from "./components/navbar";
// import { wrapperPlugin } from "./components/layout/wrapper";
// import { buttonPlugin } from "./components/button";
// import { dropdownPlugin } from "./components/dropdown";
// import { contentPlugin } from "./components/layout/content";
// import { containerPlugin } from "./components/layout/container/index";
// import { rowPlugin } from "./components/layout/grid";
// import { collapsePlugin } from "./components/collapse";
// import { navPlugin } from "./components/nav";
// import { linkPlugin } from "./components/link";
// import { sidebarPlugin } from "./components/siderbar";
// import { overlayPlugin } from "./components/overlay";
// import { controlSidebarPlugin } from "./components/controlsidebar";
// import { iconPlugin } from "./components/icon";
// import { switchPlugin } from "./components/switch";
// import { badgePlugin } from "./components/badge";
// import { cardPlugin } from "./components/card";
// import { testCOM } from "./components/testcomponent";

// import { toggleDirectivePlugin } from "./directives/toggle";
// import { collapseSidebarDirectivePlugin } from "./directives/sidebarcollapse";
// import { cardDirectivePlugin } from "./directives/card";

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
export { collapseSidebarPlugins } from "./components/layout/collapsesidebar";
export { navbarPlugin } from "./components/navbar";
export { wrapperPlugin } from "./components/layout/wrapper";
export { buttonPlugin } from "./components/button";
export { dropdownPlugin } from "./components/dropdown";
export { contentPlugin } from "./components/layout/content";
export { containerPlugin } from "./components/layout/container/index";
export { gridPlugin } from "./components/layout/grid";
export { collapsePlugin } from "./components/collapse";
export { navPlugin } from "./components/nav";
export { linkPlugin } from "./components/link";
export { sidebarPlugin } from "./components/siderbar";
export { overlayPlugin } from "./components/overlay";
export { controlSidebarPlugin } from "./components/controlsidebar";
export { iconPlugin } from "./components/icon";
export { switchPlugin } from "./components/switch";
export { cardPlugin } from "./components/card";
export { testCOM } from "./components/testcomponent";

export default NlyAdminlteVue;
