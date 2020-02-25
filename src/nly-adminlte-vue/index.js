import { collapseSidebarPlugin } from "./components/layout/collapsesidebar";
import { navPlugin } from "./components/navbar";
import { wrapperPlugin } from "./components/layout/wrapper";
import { buttonPlugin } from "./components/button";
import { dropdownPlugin } from "./components/dropdown";
import { contentPlugin } from "./components/layout/content";
import { containerPlugin } from "./components/layout/container/index";
import { rowPlugin } from "./components/layout/grid";
import { collapsePlugin } from "./components/collapse";

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

function installFactory(components) {
  const install = Vue => {
    if (install.installed) {
      return;
    }
    install.installed = true;
    registerComponents(Vue, components);
  };
  install.installed = false;
  return install;
}

const NlyAdminlteVue = installFactory(componentPlugins);

export { NlyAdminlteVue };
