import { FlexWrapperPlugin } from "./layout/flex";

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

var NlyAdminlteVue = installFactory(FlexWrapperPlugin);

export { NlyAdminlteVue };
