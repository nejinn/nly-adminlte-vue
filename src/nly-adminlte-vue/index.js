import { collapseSidebarPlugin } from "./components/layout/collapsesidebar";
import { navPlugin } from "./components/navbar";
import { wrapperPlugin } from "./components/layout/wrapper";
import { buttonPlugin } from "./components/button";
import { dropdownPlugin } from "./components/dropdown";
import { contentPlugin } from "./components/layout/content";
import { containerPlugin } from "./components/layout/container/index";
import { rowPlugin } from "./components/layout/grid";
import { collapsePlugin } from "./components/collapse";

import { toggleDirectivePlugin } from "./directives/toggle";

const componentPlugins = Object.assign(
  collapseSidebarPlugin,
  navPlugin,
  wrapperPlugin,
  buttonPlugin,
  dropdownPlugin,
  contentPlugin,
  containerPlugin,
  rowPlugin,
  collapsePlugin
);

const directivePlugins = Object.assign(toggleDirectivePlugin);

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
    console.log(install.installed);
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
