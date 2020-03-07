import { collapseSidebarComponents } from "./components/layout/collapsesidebar";
import { navbarPlugin } from "./components/navbar";
import { wrapperPlugin } from "./components/layout/wrapper";
import { buttonPlugin } from "./components/button";
import { dropdownPlugin } from "./components/dropdown";
import { contentPlugin } from "./components/layout/content";
import { containerPlugin } from "./components/layout/container/index";
import { rowPlugin } from "./components/layout/grid";
import { collapsePlugin } from "./components/collapse";
import { navPlugin } from "./components/nav";
import { linkPlugin } from "./components/link";
import { sidebarPlugin } from "./components/siderbar";
import { overlayPlugin } from "./components/overlay";
import { controlSidebarPlugin } from "./components/controlsidebar";
import { iconPlugin } from "./components/icon";
import { switchPlugin } from "./components/switch";
import { badgePlugin } from "./components/badge";
import { cardPlugin } from "./components/card";
import { testCOM } from "./components/testcomponent";

import { toggleDirectivePlugin } from "./directives/toggle";
import { collapseSidebarDirectivePlugin } from "./directives/sidebarcollapse";
import { cardDirectivePlugin } from "./directives/card";

const componentPlugins = Object.assign(
  collapseSidebarComponents,
  navbarPlugin,
  wrapperPlugin,
  buttonPlugin,
  dropdownPlugin,
  contentPlugin,
  containerPlugin,
  rowPlugin,
  collapsePlugin,
  navPlugin,
  linkPlugin,
  sidebarPlugin,
  overlayPlugin,
  controlSidebarPlugin,
  iconPlugin,
  switchPlugin,
  badgePlugin,
  cardPlugin,
  testCOM
);

const directivePlugins = Object.assign(
  toggleDirectivePlugin,
  collapseSidebarDirectivePlugin,
  cardDirectivePlugin
);

export const registerComponent = (Vue, name, def) => {
  if (Vue && name && def) {
    Vue.component(name, def);
  }
};

export const registerComponents = (Vue, components = {}) => {
  for (const component in components) {
    registerComponent(Vue, component, components[component]);
  }
};

export const registerdirective = (Vue, name, def) => {
  if (Vue && name && def) {
    Vue.directive(name, def);
  }
};

export const registerdirectives = (Vue, directives = {}) => {
  for (const directive in directives) {
    registerdirective(Vue, directive, directives[directive]);
  }
};

function installFactory(components, directives) {
  const install = Vue => {
    if (install.installed) {
      return;
    }
    install.installed = true;
    registerComponents(Vue, components);
    registerdirectives(Vue, directives);
  };
  install.installed = false;
  return install;
}

const NlyAdminlteVue = installFactory(componentPlugins, directivePlugins);

export { NlyAdminlteVue };
