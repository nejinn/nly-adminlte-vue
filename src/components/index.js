import { collapseSidebarPlugin } from "./layout/collapsesidebar";
import { navPlugin } from "./navbar";
import { wrapperPlugin } from "./layout/wrapper";
import { buttonPlugin } from "./button";
import { dropdownPlugin } from "./dropdown";
import { contentPlugin } from "./layout/content";
import { containerPlugin } from "./layout/container/index";
import { rowPlugin } from "./layout/grid";

const componentPlugins = Object.assign(
  collapseSidebarPlugin,
  navPlugin,
  wrapperPlugin,
  buttonPlugin,
  dropdownPlugin,
  contentPlugin,
  containerPlugin,
  rowPlugin
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
